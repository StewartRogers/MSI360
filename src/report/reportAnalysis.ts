import { questionIds } from "../app/questionAssets";
import { reportAnalysisReferenceLinks } from "../data/reportReferences";
import { translations } from "../data/translations";
import { getGeminiApiUrl, parseGeminiJson, postGeminiPrompt } from "../logic/ai/geminiClient";
import { isRecord } from "../logic/ai/valueUtils";
import type { AiOutput, AiReportAnalysis, Answers } from "../types";

const reportAnalysisRequestTimeoutMs = 60000;
const reportAnalysisMaxCharacters = 750;

/**
 * Generates optional report-background analysis for the PDF.
 *
 * Report analysis must never block report generation; callers receive `null`
 * when Gemini is absent, slow, or returns unusable output.
 */
export async function generateReportAnalysis(answers: Answers, aiOutputs: Record<string, AiOutput>): Promise<AiReportAnalysis | null> {
  return generateReportAnalysisWithGemini(answers, aiOutputs).catch(() => null);
}

async function generateReportAnalysisWithGemini(answers: Answers, aiOutputs: Record<string, AiOutput>): Promise<AiReportAnalysis | null> {
  const apiUrl = getGeminiApiUrl();
  if (!apiUrl) return null;

  const prompt = buildReportAnalysisPrompt(answers, aiOutputs);
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

/**
 * Builds the Gemini prompt for the optional PDF report analysis paragraph.
 *
 * The prompt is deliberately limited to onboarding answers (`question-1` through
 * `question-4`) so generated analysis cannot imply it used detailed assessment
 * answers or category scores.
 */
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

/**
 * Validates and normalizes Gemini report-analysis output.
 *
 * The PDF renderer only accepts a normalized paragraph plus a provider marker.
 * Source labels and the fixed disclaimer are added later in `reportData.ts`.
 */
export function validateReportAnalysisOutput(rawOutput: unknown): AiReportAnalysis | null {
  if (!isRecord(rawOutput)) return null;
  const paragraph = typeof rawOutput.paragraph === "string" ? normalizeAiParagraph(rawOutput.paragraph) : "";
  if (!paragraph) return null;

  return {
    paragraph: paragraph.slice(0, reportAnalysisMaxCharacters),
    provider: "gemini"
  };
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

function normalizeAiParagraph(text: string) {
  return text.replace(/\s+/g, " ").trim();
}
