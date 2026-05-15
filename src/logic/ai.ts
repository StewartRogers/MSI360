import { questionIds } from "../app/questionAssets";
import { tagTaxonomy } from "../data/catalog";
import { reportAnalysisReferenceLinks } from "../data/reportReferences";
import { translations } from "../data/translations";
import type { AiOutput, AiPreAnswer, AiPreAnswerCandidate, AiPreAnswerOutput, AiReportAnalysis, AnswerValue, Answers, Question } from "../types";

declare const __MSI360_TEST_GEMINI_TIMEOUT_MS__: number | undefined;

const allowedTags = new Set(tagTaxonomy);
const preAnswerConfidenceThreshold = 0.9;
// Change this number to set how long app should wait for Gemini API call. Default = 15000ms
const geminiRequestTimeoutMs = typeof __MSI360_TEST_GEMINI_TIMEOUT_MS__ === "number" ? __MSI360_TEST_GEMINI_TIMEOUT_MS__ : 15000;
const reportAnalysisRequestTimeoutMs = 60000;
const interpretTextPromptGuidance = [
  "If the worker response is in English, interpret it directly using the same tag-selection behavior as an English task description.",
  "For English responses, preserve concrete routing clues from the text such as desk, computer, keyboard, mouse, screen, lift, carry, tool, reach, bend, twist, kneel, cold, glare, or noise.",
  "If the worker response is not English or mixes languages, internally translate or interpret it to English, then apply the same tag-selection behavior used for English responses."
];
const preAnswerPromptGuidance = [
  "The worker response may be written in any language or may mix languages.",
  "Interpret the original response semantically. You may internally translate or normalize it to English when helpful.",
  "Base decisions on the worker's intended meaning, not literal English keyword matching."
];
const reportAnalysisMaxCharacters = 750;

export async function interpretTextAnswer(question: Question, response: string): Promise<AiOutput> {
  const output = await interpretWithGemini(question, response).catch((error) => ({
    ...fallbackInterpretation(response),
    provider: "client-keyword-fallback",
    notes: `Gemini unavailable, used local fallback. ${error instanceof Error ? error.message : ""}`.trim()
  }));

  return {
    ...output,
    add_tags: filterAllowedAddTags(question, output.add_tags)
  };
}

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

export async function generateReportAnalysis(answers: Answers, aiOutputs: Record<string, AiOutput>): Promise<AiReportAnalysis | null> {
  return generateReportAnalysisWithGemini(answers, aiOutputs).catch(() => null);
}

async function interpretWithGemini(question: Question, response: string): Promise<AiOutput> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return {
      ...fallbackInterpretation(response),
      provider: "client-keyword-fallback",
      notes: "No Gemini API key configured; used local fallback."
    };
  }

  const model = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.5-flash";
  const prompt = buildInterpretTextPrompt(question, response);

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const result = await postGeminiPrompt(apiUrl, prompt, 0.1, "Gemini task analysis response timed out");

  if (!result.ok) {
    throw new Error(`Gemini request failed with ${result.status}`);
  }

  const data = await result.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (typeof text !== "string" || !text.trim()) {
    throw new Error("Gemini returned no JSON text");
  }

  const parsed = parseGeminiJson(text);
  return {
    normalized_answer_en: stringOrFallback(parsed.normalized_answer_en, response),
    add_tags: Array.isArray(parsed.add_tags) ? parsed.add_tags.filter((tag: unknown): tag is string => typeof tag === "string") : [],
    missing_details: Array.isArray(parsed.missing_details)
      ? parsed.missing_details.filter((detail: unknown): detail is string => typeof detail === "string")
      : [],
    confidence: typeof parsed.confidence === "number" ? clamp(parsed.confidence, 0, 1) : 0.5,
    notes: stringOrFallback(parsed.notes, "Gemini interpreted the text answer."),
    provider: "gemini"
  };
}

async function preAnswerWithGemini(candidateQuestions: Question[], response: string, existingAnswers: Answers): Promise<AiPreAnswerOutput> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return {
      auto_answers: [],
      provider: "client-no-preanswer",
      notes: "No Gemini API key configured; no questions were pre-answered."
    };
  }

  const model = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.5-flash";
  const prompt = buildPreAnswerPrompt(candidateQuestions, response);

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
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

async function generateReportAnalysisWithGemini(answers: Answers, aiOutputs: Record<string, AiOutput>): Promise<AiReportAnalysis | null> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) return null;

  const model = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.5-flash";
  const prompt = buildReportAnalysisPrompt(answers, aiOutputs);
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const result = await postGeminiPrompt(apiUrl, prompt, 0.2, "Gemini report analysis response timed out", reportAnalysisRequestTimeoutMs);

  if (!result.ok) {
    throw new Error(`Gemini report analysis request failed with ${result.status}`);
  }

  const data = await result.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (typeof text !== "string" || !text.trim()) {
    throw new Error("Gemini returned no report analysis JSON text");
  }

  return validateReportAnalysisOutput(parseGeminiJson(text));
}

export function buildInterpretTextPrompt(question: Question, response: string): string {
  const instruction = question.ai_instructions;
  const allowedAddTags = instruction?.allowed_add_tags ?? [];

  return [
    "You support MSI360, a prototype musculoskeletal injury risk survey.",
    "Analyze the worker's text answer and return strict JSON only. Do not include markdown or commentary.",
    ...interpretTextPromptGuidance,
    "Return normalized_answer_en as a concise English interpretation of the original response.",
    "Use only tags listed in allowed_add_tags. If no tag clearly applies, return an empty add_tags array.",
    "Do not invent, translate, localize, rename, or paraphrase tag IDs. Return exact tag IDs from allowed_add_tags.",
    "Do not invent scoring values. Only extract tags and missing details that help route follow-up MSI questions.",
    `Question id: ${question.question_id}`,
    `Purpose: ${instruction?.purpose ?? "interpret_text_answer"}`,
    `Instruction: ${instruction?.prompt ?? ""}`,
    `Expected fields to consider: ${(instruction?.expected_fields ?? []).join(", ")}`,
    `allowed_add_tags: ${allowedAddTags.join(", ")}`,
    'Required JSON shape: {"normalized_answer_en":"string","add_tags":["tag"],"missing_details":["string"],"confidence":0.0,"notes":"string"}',
    `Worker response: ${response}`
  ].join("\n");
}

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

export function buildReportAnalysisPrompt(answers: Answers, aiOutputs: Record<string, AiOutput>): string {
  const onboardingContext = createReportAnalysisContext(answers, aiOutputs);

  return [
    "You support MSI360, a prototype musculoskeletal injury risk survey.",
    "Write one concise paragraph for a PDF report section titled AI-generated analysis.",
    "Return strict JSON only. Do not include markdown or commentary.",
    'Required JSON shape: {"paragraph":"string"}',
    "Use only the onboarding_context JSON below. Do not use answers beyond question-1, question-2, question-3, and question-4.",
    "Do not mention category scores, score results, highest-risk categories, or assessment answers after question-4.",
    "The app will render a separate disclaimer, so do not write a disclaimer sentence inside the paragraph.",
    "Write a general, category-score-agnostic guide to what could worsen the likelihood of MSI risk based on the responder context, tenure, task description, and height band.",
    "For question-1: if the role is worker, state that the information is directly relevant because it comes from someone performing the task. If the role is not worker, include a sentence recommending review with a worker who performs the task.",
    "For question-2: treat shorter tenure as a reason to pay closer attention to training, familiarity with hazards, and supervision. Accurately cite Institute for Work & Health research: workers in their first month had more than three times the lost-time injury risk of workers in a job for over a year; also note that the 2019 review confirmed higher acute-injury risk in the first year while MSI-specific evidence was inconclusive.",
    "Always refer responders to WorkSafeBC OHS Regulation Part 4 because it requires MSI risk identification, assessment, control, education/training, evaluation, and consultation where applicable.",
    "For question-3: use the task description only to identify general conditions that could worsen MSI likelihood, such as force, repetition, duration, posture, workstation layout, handled objects, environment, recovery time, or task variability.",
    "For question-4: if the role is worker and height_far_from_average is true, include one employer-facing sentence about checking working heights, reaches, seating, tools, and workspace adjustability/accommodation.",
    "Keep the paragraph between 80 and 115 words.",
    `IWH source label to cite in prose: Institute for Work & Health new-worker risk review (${reportAnalysisReferenceLinks.iwhNewWorkerRisk})`,
    `WorkSafeBC source label to cite in prose: WorkSafeBC OHS Regulation Part 4 (${reportAnalysisReferenceLinks.worksafeBcOhsRegulation})`,
    `onboarding_context: ${JSON.stringify(onboardingContext)}`
  ].join("\n");
}

export function validateReportAnalysisOutput(rawOutput: unknown): AiReportAnalysis | null {
  if (!isRecord(rawOutput)) return null;
  const paragraph = typeof rawOutput.paragraph === "string" ? normalizeAiParagraph(rawOutput.paragraph) : "";
  if (!paragraph) return null;

  return {
    paragraph: paragraph.slice(0, reportAnalysisMaxCharacters),
    provider: "gemini"
  };
}

async function postGeminiPrompt(apiUrl: string, prompt: string, temperature: number, timeoutMessage: string, timeoutMs = geminiRequestTimeoutMs): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      signal: controller.signal,
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature,
          responseMimeType: "application/json"
        }
      })
    });
  } catch (error) {
    if (isAbortError(error)) throw new Error(timeoutMessage);
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

function isAbortError(error: unknown) {
  return error instanceof DOMException && error.name === "AbortError";
}

export function filterAllowedAddTags(question: Question, tags: string[]): string[] {
  return tags.filter((tag) => allowedTags.has(tag) && question.ai_instructions?.allowed_add_tags.includes(tag));
}

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

function createReportAnalysisContext(answers: Answers, aiOutputs: Record<string, AiOutput>) {
  const roleValue = getStringAnswer(answers, questionIds.role);
  const timeInRoleValue = getStringAnswer(answers, questionIds.timeInRole);
  const taskDescription = getStringAnswer(answers, questionIds.taskDescription);
  const heightValue = getStringAnswer(answers, questionIds.height);
  const taskAiOutput = aiOutputs[questionIds.taskDescription];

  return {
    "question-1": {
      label: getQuestionLabel(questionIds.role),
      selected_option_id: roleValue,
      selected_option_label: roleValue ? getOptionLabel(questionIds.role, roleValue) : null,
      is_worker_responder: roleValue === "worker"
    },
    "question-2": {
      label: getQuestionLabel(questionIds.timeInRole),
      selected_option_id: timeInRoleValue,
      selected_option_label: timeInRoleValue ? getOptionLabel(questionIds.timeInRole, timeInRoleValue) : null,
      lower_experience: timeInRoleValue === "less_than_year"
    },
    "question-3": {
      label: getQuestionLabel(questionIds.taskDescription),
      answer: taskDescription || null,
      normalized_answer_en: taskAiOutput?.normalized_answer_en || null,
      routing_tags: taskAiOutput?.add_tags || []
    },
    "question-4": {
      label: getQuestionLabel(questionIds.height),
      selected_option_id: heightValue,
      selected_option_label: heightValue ? getOptionLabel(questionIds.height, heightValue) : null,
      height_far_from_average: heightValue === "under_5_4" || heightValue === "over_6_2"
    }
  };
}

function getStringAnswer(answers: Answers, questionId: string) {
  const value = answers[questionId]?.value;
  return typeof value === "string" ? value : "";
}

function getQuestionLabel(questionId: string) {
  return translations.en.questions[questionId]?.label || questionId;
}

function getOptionLabel(questionId: string, optionId: string) {
  return translations.en.questions[questionId]?.options?.[optionId] || optionId;
}

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

function fallbackInterpretation(text: string): Omit<AiOutput, "provider"> {
  const lower = text.toLowerCase();
  const tags: string[] = [];

  addIf(tags, lower, ["computer", "keyboard", "mouse", "desk", "screen", "office"], ["office_computer", "desk_based", "screen_work", "seated_work"]);
  addIf(tags, lower, ["lift", "carry", "box", "load"], ["manual_handling", "lifting_lowering", "carrying"]);
  addIf(tags, lower, ["heavy", "80", "pound", "kg"], ["heavy_loads"]);
  addIf(tags, lower, ["push", "pull", "cart", "dolly", "wheelbarrow", "rough surface", "soft surface"], ["pushing_pulling"]);
  addIf(tags, lower, ["tool", "drill", "hammer", "wrench", "equipment", "machine", "lawnmower"], ["tool_use"]);
  addIf(tags, lower, ["vehicle", "forklift", "loader", "tractor", "pedal"], ["vehicle_equipment", "tool_use"]);
  addIf(tags, lower, ["vibration", "vibrating", "jackhammer"], ["vibrating_tools", "tool_use"]);
  addIf(tags, lower, ["sharp", "edge"], ["sharp_edges"]);
  addIf(tags, lower, ["kneel", "floor"], ["kneeling_floor_work", "low_work"]);
  addIf(tags, lower, ["overhead", "above shoulder"], ["overhead_work"]);
  addIf(tags, lower, ["reach", "outstretched", "extended"], ["reaching_forward"]);
  addIf(tags, lower, ["bend", "lean", "stoop"], ["bending_trunk"]);
  addIf(tags, lower, ["twist", "rotate"], ["twisting"]);
  addIf(tags, lower, ["repeat", "repetitive", "typing", "assembly"], ["repetitive_movements"]);
  addIf(tags, lower, ["wrist", "hand", "grip"], ["wrist_bending"]);
  addIf(tags, lower, ["pinch"], ["pinch_grip"]);
  addIf(tags, lower, ["power grip", "wrap my hand", "wrap hand"], ["power_grip"]);
  addIf(tags, lower, ["fine detail", "small print", "inspect", "inspection"], ["fine_visual_work"]);
  addIf(tags, lower, ["glare", "sun", "reflection"], ["glare_exposure"]);
  addIf(tags, lower, ["cold", "freezer", "outside", "outdoor"], ["cold_environment", "outdoor_work"]);
  addIf(tags, lower, ["noise", "loud"], ["noise_exposure"]);
  addIf(tags, lower, ["deadline", "rush"], ["tight_deadlines"]);
  addIf(tags, lower, ["overtime"], ["overtime"]);

  const missing: string[] = [];
  if (tags.includes("lifting_lowering") && !/\b(lb|pound|kg|kilogram)\b/i.test(text)) missing.push("Approximate object weight");
  if (tags.includes("repetitive_movements") && !/\b(hour|minute|daily|shift|day)\b/i.test(text)) missing.push("Frequency or duration");

  return {
    normalized_answer_en: text,
    add_tags: [...new Set(tags)],
    missing_details: missing,
    confidence: tags.length ? 0.65 : 0.35,
    notes: tags.length ? "Local keyword interpretation detected likely MSI tags." : "No clear MSI tags detected."
  };
}

function addIf(tags: string[], text: string, keywords: string[], matches: string[]) {
  if (keywords.some((keyword) => text.includes(keyword))) tags.push(...matches);
}

function parseGeminiJson(text: string): Record<string, unknown> {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("Gemini response was not valid JSON");
    return JSON.parse(match[0]);
  }
}

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

function normalizeAiParagraph(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function stringOrFallback(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
