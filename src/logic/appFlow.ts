import { onboardingQuestionIds, questionIds } from "../app/questionAssets";
import type { StepId } from "../app/types";
import { questions, sectionOrder } from "../data/catalog";
import { getVisibleQuestions } from "./routing";
import type { AiPreAnswer, Answers } from "../types";

export function getProgressStep(step: StepId, assessmentIndex: number, total: number) {
  if (step === "language") return 1;
  if (step === "role") return 2;
  if (step === "time_in_role") return 3;
  if (step === "description" || step === "task_description") return 4;
  if (step === "height") return 5;
  if (step === "assessment") return Math.min(6 + assessmentIndex, total);
  return total;
}

export function getSortedVisibleQuestions(activeTags: string[]) {
  const visible = getVisibleQuestions(activeTags);
  return visible.sort((a, b) => sectionOrder.indexOf(a.section) - sectionOrder.indexOf(b.section));
}

export function splitParagraphs(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export function isRecord(value: unknown): value is Record<string, string | string[]> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

export function getPreAnswerCandidateQuestions(tags: string[], answers: Answers) {
  return getVisibleQuestions(tags).filter((question) => !onboardingQuestionIds.has(question.question_id) && !answers[question.question_id]);
}

export function toAnswers(autoAnswers: AiPreAnswer[]): Answers {
  const nextAnswers: Answers = {};
  autoAnswers.forEach((autoAnswer) => {
    const question = getQuestionById(autoAnswer.question_id);
    if (question) nextAnswers[autoAnswer.question_id] = { type: question.type, value: autoAnswer.value };
  });
  return nextAnswers;
}

export function withoutKeys<T>(record: Record<string, T>, keys: string[]) {
  const next = { ...record };
  keys.forEach((key) => delete next[key]);
  return next;
}

export function getTaskSummary(answers: Answers) {
  const value = answers[questionIds.taskDescription]?.value;
  if (typeof value === "string" && value.trim()) return value.trim();
  return "Work task";
}

export function getQuestionById(questionId: string) {
  return questions.find((question) => question.question_id === questionId);
}
