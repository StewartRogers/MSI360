import type { AiOutput, AiPreAnswerOutput } from "../types";

export type AiFallbackToastKind = "task-analysis" | "question-pruning";

export const aiFallbackToastMessages: Record<AiFallbackToastKind, string> = {
  "task-analysis": "AI task analysis response timed out. Local fallback is being used instead.",
  "question-pruning": "AI question pruning response timed out. Fallback follow-up questions are being used instead."
};

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
