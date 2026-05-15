import { onboardingQuestionIds, questionIds } from "../../app/questionAssets";
import type { StepId } from "../../app/types";
import { questions, sectionOrder } from "../../data/catalog";
import type { AiPreAnswer, Answers } from "../../types";
import { getVisibleQuestions } from "./questionRouting";

/**
 * Calculates the visible progress step for the current screen.
 *
 * The description and task-description screens are treated as one worker-facing
 * step. Dynamic assessment questions are appended after the fixed onboarding
 * gates, so the total changes with routing.
 */
export function getProgressStep(step: StepId, assessmentIndex: number, total: number) {
  if (step === "language") return 1;
  if (step === "role") return 2;
  if (step === "time_in_role") return 3;
  if (step === "description" || step === "task_description") return 4;
  if (step === "height") return 5;
  if (step === "assessment") return Math.min(6 + assessmentIndex, total);
  return total;
}

/**
 * Returns visible questions sorted into the expected questionnaire section order.
 */
export function getSortedVisibleQuestions(activeTags: string[]) {
  const visible = getVisibleQuestions(activeTags);
  return visible.sort((a, b) => sectionOrder.indexOf(a.section) - sectionOrder.indexOf(b.section));
}

/**
 * Splits multiline translated prompt text into display paragraphs.
 */
export function splitParagraphs(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

/**
 * Narrowing helper for grouped answer values.
 */
export function isRecord(value: unknown): value is Record<string, string | string[]> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

/**
 * Builds the candidate list for AI pre-answering.
 *
 * Only questions that are currently visible, not onboarding questions, and not
 * already answered are eligible.
 */
export function getPreAnswerCandidateQuestions(tags: string[], answers: Answers) {
  return getVisibleQuestions(tags).filter((question) => !onboardingQuestionIds.has(question.question_id) && !answers[question.question_id]);
}

/**
 * Converts accepted AI pre-answers into the same `Answers` shape used for
 * manually entered responses.
 *
 * Gemini returns question IDs and raw values; this function attaches the
 * question type from the catalog before merging them into application state.
 */
export function toAnswers(autoAnswers: AiPreAnswer[]): Answers {
  const nextAnswers: Answers = {};
  autoAnswers.forEach((autoAnswer) => {
    const question = getQuestionById(autoAnswer.question_id);
    if (question) nextAnswers[autoAnswer.question_id] = { type: question.type, value: autoAnswer.value };
  });
  return nextAnswers;
}

/**
 * Returns a shallow copy of `record` without the provided keys.
 */
export function withoutKeys<T>(record: Record<string, T>, keys: string[]) {
  const next = { ...record };
  keys.forEach((key) => delete next[key]);
  return next;
}

/**
 * Returns a short task label for UI surfaces that need a non-empty summary.
 */
export function getTaskSummary(answers: Answers) {
  const value = answers[questionIds.taskDescription]?.value;
  if (typeof value === "string" && value.trim()) return value.trim();
  return "Work task";
}

/**
 * Looks up a catalog question by canonical ID.
 */
export function getQuestionById(questionId: string) {
  return questions.find((question) => question.question_id === questionId);
}
