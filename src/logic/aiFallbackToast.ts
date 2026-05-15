import { getAppText } from "../data/translationText";
import type { AiOutput, AiPreAnswerOutput, Translation } from "../types";

export type AiFallbackToastKind = "task-analysis" | "question-pruning";

export const aiFallbackToastMessages: Record<AiFallbackToastKind, string> = {
  "task-analysis": "AI task analysis response timed out. Local fallback is being used instead.",
  "question-pruning": "AI question pruning response timed out. Fallback follow-up questions are being used instead."
};

const aiFallbackToastTranslationKeys: Record<AiFallbackToastKind, string> = {
  "task-analysis": "ai_task_analysis_fallback_toast",
  "question-pruning": "ai_question_pruning_fallback_toast"
};

export function getAiFallbackToastMessage(t: Translation, kind: AiFallbackToastKind) {
  return getAppText(t, aiFallbackToastTranslationKeys[kind], aiFallbackToastMessages[kind]);
}

export function getAiFallbackToastKinds(taskOutput: Pick<AiOutput, "provider" | "notes">, preAnswerOutput: Pick<AiPreAnswerOutput, "provider" | "notes">): AiFallbackToastKind[] {
  const fallbackToastKinds: AiFallbackToastKind[] = [];
  if (taskOutput.provider === "client-keyword-fallback" && taskOutput.notes.startsWith("Gemini unavailable")) {
    fallbackToastKinds.push("task-analysis");
  }
  if (preAnswerOutput.provider === "client-no-preanswer" && preAnswerOutput.notes.startsWith("Gemini pre-answering unavailable")) {
    fallbackToastKinds.push("question-pruning");
  }
  return fallbackToastKinds;
}
