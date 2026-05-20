import { translations } from "../../data/translations";
import type { AiPreAnswer, AiPreAnswerCandidate, AiPreAnswerOutput, AnswerValue, Answers, Question } from "../../types";
import { getGeminiApiUrl, parseGeminiJson, postGeminiPrompt } from "../ai/geminiClient";
import { clamp, isRecord } from "../ai/valueUtils";

const preAnswerConfidenceThreshold = 0.9;
const preAnswerPromptGuidance = [
  "The worker response may be written in any language or may mix languages.",
  "Interpret the original response semantically. You may internally translate or normalize it to English when helpful.",
  "Base decisions on the worker's intended meaning, not literal English keyword matching."
];

/**
 * Attempts to pre-answer visible follow-up questions from the task description.
 *
 * Pre-answering is an optional convenience only. When Gemini is unavailable or
 * uncertain, the app asks the worker the visible questions normally.
 */
export async function preAnswerQuestions(candidateQuestions: Question[], response: string, existingAnswers: Answers): Promise<AiPreAnswerOutput> {
  if (!candidateQuestions.length || !response.trim()) {
    return {
      auto_answers: [],
      provider: "client-no-preanswer",
      notes: "No eligible questions or worker response were available for pre-answering."
    };
  }

  return preAnswerWithGemini(candidateQuestions, response, existingAnswers).catch((error) => ({
    auto_answers: [],
    provider: "client-no-preanswer",
    notes: `Gemini pre-answering unavailable; no questions were hidden. ${error instanceof Error ? error.message : ""}`.trim()
  }));
}

/**
 * Returns the no-preanswer fallback used when task analysis already proved the
 * Gemini path unavailable. This avoids making the worker wait through a second
 * request timeout before normal follow-up questions are shown.
 */
export function createPreAnswerSkippedAfterTaskFallback(): AiPreAnswerOutput {
  return {
    auto_answers: [],
    provider: "client-no-preanswer",
    notes: "Gemini pre-answering unavailable; no questions were hidden because task analysis already used local fallback."
  };
}

async function preAnswerWithGemini(candidateQuestions: Question[], response: string, existingAnswers: Answers): Promise<AiPreAnswerOutput> {
  const apiUrl = getGeminiApiUrl();
  if (!apiUrl) {
    return {
      auto_answers: [],
      provider: "client-no-preanswer",
      notes: "No Gemini API key configured; no questions were pre-answered."
    };
  }

  const prompt = buildPreAnswerPrompt(candidateQuestions, response);
  const result = await postGeminiPrompt(apiUrl, prompt, 0, "Gemini pre-answering response timed out");

  if (!result.ok) {
    throw new Error(`Gemini pre-answer request failed with ${result.status}`);
  }

  const data = await result.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (typeof text !== "string" || !text.trim()) {
    throw new Error("Gemini returned no pre-answer JSON text");
  }

  const parsed = parseGeminiJson(text);
  return {
    auto_answers: validatePreAnswers(parsed, candidateQuestions, response, existingAnswers),
    provider: "gemini",
    notes: "Gemini pre-answering completed; only validated high-confidence answers were accepted."
  };
}

/**
 * Builds the Gemini prompt for optional question pre-answering.
 *
 * Candidate questions include canonical question/group/option IDs. The model may
 * reason over multilingual worker text, but accepted values must use those IDs.
 */
export function buildPreAnswerPrompt(candidateQuestions: Question[], response: string): string {
  const candidates = createPreAnswerCandidates(candidateQuestions);

  return [
    "You support MSI360, a prototype musculoskeletal injury risk survey.",
    "The worker already answered a free-text task description. Determine whether that text explicitly answers any candidate questions.",
    "Return strict JSON only. Do not include markdown or commentary.",
    ...preAnswerPromptGuidance,
    "The candidate question labels and option labels are provided in English, but the worker response may not be English.",
    "Only pre-answer a question when the answer is clearly stated by the worker response. Do not assume missing details.",
    "Use only the exact canonical question_id, group ids, and option ids shown in candidate_questions.",
    "Do not invent, translate, localize, rename, or paraphrase question IDs, group IDs, option IDs, or selected values.",
    "For negative options such as no, none, never, or does_not_apply, only answer when the worker explicitly says the negative fact.",
    "Do not answer symptom questions unless the response explicitly mentions work-related pain or discomfort and a time context.",
    "Evidence must be an exact phrase from the original worker response that supports the answer, even when that phrase is not English.",
    'Required JSON shape: {"auto_answers":[{"question_id":"string","value":"option_id | option_id[] | grouped object","confidence":0.0,"evidence":"exact phrase from response","notes":"string"}]}',
    `candidate_questions: ${JSON.stringify(candidates)}`,
    `worker_response: ${response}`
  ].join("\n");
}

/**
 * Converts catalog questions into compact prompt candidates for Gemini.
 *
 * Candidate payloads intentionally use English display text and canonical IDs.
 * Gemini can reason across languages, but it must return IDs from the catalog.
 */
export function createPreAnswerCandidates(candidateQuestions: Question[]): AiPreAnswerCandidate[] {
  return candidateQuestions.flatMap((question) => {
    const text = translations.en.questions[question.question_id];
    if (!text || question.type === "text") return [];

    const candidate: AiPreAnswerCandidate = {
      question_id: question.question_id,
      type: question.type,
      label: text.label
    };

    if (question.options && text.options) {
      candidate.options = Object.fromEntries(question.options.map((option) => [option.option_id, text.options?.[option.option_id] || option.option_id]));
    }

    if (question.groups && text.groups) {
      candidate.groups = Object.fromEntries(
        question.groups.map((group) => [
          group.group_id,
          {
            label: text.groups?.[group.group_id]?.label || group.group_id,
            options: Object.fromEntries(group.options.map((option) => [option.option_id, text.groups?.[group.group_id]?.options[option.option_id] || option.option_id]))
          }
        ])
      );
    }

    return [candidate];
  });
}

/**
 * Validates raw Gemini pre-answer JSON before it can affect app state.
 *
 * A returned pre-answer is accepted only when it targets an eligible unanswered
 * question, meets the confidence threshold, cites exact evidence from the worker
 * response, uses canonical IDs, and does not violate exclusive-option rules.
 */
export function validatePreAnswers(rawOutput: unknown, candidateQuestions: Question[], workerResponse: string, existingAnswers: Answers): AiPreAnswer[] {
  if (!isRecord(rawOutput) || !Array.isArray(rawOutput.auto_answers)) return [];

  const candidateById = new Map(candidateQuestions.map((question) => [question.question_id, question]));
  const accepted: AiPreAnswer[] = [];
  const answeredIds = new Set(Object.keys(existingAnswers));

  for (const rawAnswer of rawOutput.auto_answers) {
    if (!isRecord(rawAnswer)) continue;

    const questionId = typeof rawAnswer.question_id === "string" ? rawAnswer.question_id : "";
    if (!questionId || answeredIds.has(questionId)) continue;

    const question = candidateById.get(questionId);
    if (!question || question.type === "text") continue;

    const confidence = typeof rawAnswer.confidence === "number" ? clamp(rawAnswer.confidence, 0, 1) : 0;
    if (confidence < preAnswerConfidenceThreshold) continue;

    const evidence = typeof rawAnswer.evidence === "string" ? rawAnswer.evidence.trim() : "";
    if (!isEvidenceGrounded(evidence, workerResponse)) continue;

    const value = validatePreAnswerValue(question, rawAnswer.value);
    if (value === undefined) continue;

    accepted.push({
      question_id: question.question_id,
      value,
      confidence,
      evidence,
      notes: typeof rawAnswer.notes === "string" ? rawAnswer.notes : "",
      provider: "gemini"
    });
    answeredIds.add(questionId);
  }

  return accepted;
}

/**
 * Validates a Gemini-proposed answer value against the catalog question shape.
 */
function validatePreAnswerValue(question: Question, value: unknown): AnswerValue | undefined {
  if (question.type === "multi_choice" && question.options) {
    return typeof value === "string" && hasOption(question, value) ? value : undefined;
  }

  if (question.type === "select_all" && question.options) {
    if (!Array.isArray(value)) return undefined;
    const selected = uniqueStrings(value).filter((optionId) => hasOption(question, optionId));
    if (selected.length !== value.length || selected.length === 0 || hasExclusiveConflict(question, selected)) return undefined;
    return selected;
  }

  if (question.type === "grouped_multi_choice" && question.groups) {
    if (!isRecord(value)) return undefined;
    const answer: Record<string, string> = {};
    for (const group of question.groups) {
      const groupValue = value[group.group_id];
      if (typeof groupValue !== "string" || !hasGroupOption(group, groupValue)) return undefined;
      answer[group.group_id] = groupValue;
    }
    return answer;
  }

  if (question.type === "grouped_select_all" && question.groups) {
    if (!isRecord(value)) return undefined;
    const answer: Record<string, string[]> = {};
    for (const [groupId, groupValue] of Object.entries(value)) {
      const group = question.groups.find((item) => item.group_id === groupId);
      if (!group || !Array.isArray(groupValue)) return undefined;
      const selected = uniqueStrings(groupValue).filter((optionId) => hasGroupOption(group, optionId));
      if (selected.length !== groupValue.length || selected.length === 0 || hasGroupExclusiveConflict(group, selected)) return undefined;
      answer[groupId] = selected;
    }
    return Object.keys(answer).length ? answer : undefined;
  }

  return undefined;
}

function hasOption(question: Question, optionId: string) {
  return Boolean(question.options?.some((option) => option.option_id === optionId));
}

function hasGroupOption(group: NonNullable<Question["groups"]>[number], optionId: string) {
  return group.options.some((option) => option.option_id === optionId);
}

function hasExclusiveConflict(question: Question, selected: string[]) {
  const exclusiveSelected = question.options?.some((option) => option.exclusive && selected.includes(option.option_id)) ?? false;
  return exclusiveSelected && selected.length > 1;
}

function hasGroupExclusiveConflict(group: NonNullable<Question["groups"]>[number], selected: string[]) {
  const exclusiveSelected = group.options.some((option) => option.exclusive && selected.includes(option.option_id));
  return exclusiveSelected && selected.length > 1;
}

function uniqueStrings(value: unknown[]) {
  return [...new Set(value.filter((item): item is string => typeof item === "string"))];
}

function isEvidenceGrounded(evidence: string, workerResponse: string) {
  if (!evidence) return false;
  return normalizeForEvidence(workerResponse).includes(normalizeForEvidence(evidence));
}

function normalizeForEvidence(text: string) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}
