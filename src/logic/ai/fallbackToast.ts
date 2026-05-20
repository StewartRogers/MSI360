import { getAppText } from "../../data/translationText";
import type { AiOutput, AiPreAnswerOutput, Translation } from "../../types";

/**
 * User-facing fallback notice categories.
 *
 * Task analysis fallback means routing used local keyword interpretation.
 * Question-pruning fallback means no AI pre-answers were accepted and all
 * follow-up questions remain visible.
 */
export type AiFallbackToastKind = "task-analysis" | "question-pruning";

/**
 * English fallback messages for AI timeout/unavailable notices.
 */
export const aiFallbackToastMessages: Record<AiFallbackToastKind, string> = {
  "task-analysis": "AI task analysis response timed out. Local fallback is being used instead.",
  "question-pruning": "AI question pruning response timed out. Fallback follow-up questions are being used instead."
};

const aiFallbackToastTranslationKeys: Record<AiFallbackToastKind, string> = {
  "task-analysis": "ai_task_analysis_fallback_toast",
  "question-pruning": "ai_question_pruning_fallback_toast"
};

/**
 * Returns the localized toast message for a fallback category.
 */
export function getAiFallbackToastMessage(t: Translation, kind: AiFallbackToastKind) {
  return getAppText(t, aiFallbackToastTranslationKeys[kind], aiFallbackToastMessages[kind]);
}

/**
 * Identifies task-analysis fallbacks caused by an attempted Gemini request.
 */
export function isTaskAnalysisRequestFallback(taskOutput: Pick<AiOutput, "provider" | "notes">) {
  return taskOutput.provider === "client-keyword-fallback" && taskOutput.notes.startsWith("Gemini unavailable");
}

/**
 * Identifies pre-answer fallbacks caused by an attempted or skipped Gemini path.
 */
export function isQuestionPruningRequestFallback(preAnswerOutput: Pick<AiPreAnswerOutput, "provider" | "notes">) {
  return preAnswerOutput.provider === "client-no-preanswer" && preAnswerOutput.notes.startsWith("Gemini pre-answering unavailable");
}

/**
 * Determines which fallback toasts should be shown after the task-description
 * AI passes finish.
 *
 * Missing API keys are treated as configured-off prototype behavior and do not
 * show a warning. API failures/timeouts do show a warning because the user saw
 * an analysis attempt.
 */
export function getAiFallbackToastKinds(taskOutput: Pick<AiOutput, "provider" | "notes">, preAnswerOutput: Pick<AiPreAnswerOutput, "provider" | "notes">): AiFallbackToastKind[] {
  const fallbackToastKinds: AiFallbackToastKind[] = [];
  if (isTaskAnalysisRequestFallback(taskOutput)) fallbackToastKinds.push("task-analysis");
  if (isQuestionPruningRequestFallback(preAnswerOutput)) fallbackToastKinds.push("question-pruning");
  return fallbackToastKinds;
}
