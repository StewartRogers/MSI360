import type { Answer, Answers, AnswerValue, Question, QuestionType } from "../../types";

/**
 * Applies a committed answer to the canonical answer map.
 *
 * Empty values remove the answer entirely so required-question checks, routing,
 * scoring, and report generation all observe the same incomplete state.
 */
export function applyAnswer(answers: Answers, questionId: string, type: QuestionType, value: AnswerValue): Answers {
  const nextAnswers = { ...answers };

  if (isEmptyAnswerValue(value)) {
    delete nextAnswers[questionId];
  } else {
    nextAnswers[questionId] = { type, value };
  }

  return nextAnswers;
}

/**
 * Stores a draft assessment answer without removing empty values.
 *
 * Drafts intentionally preserve empty values so clearing a selected answer is
 * visible to the current screen before the worker commits by clicking Continue.
 */
export function applyDraftAnswer(draftAnswers: Answers, questionId: string, type: QuestionType, value: AnswerValue): Answers {
  return {
    ...draftAnswers,
    [questionId]: { type, value }
  };
}

/**
 * Returns the answer that should be displayed for the current assessment screen.
 *
 * Draft answers take precedence over committed answers because the worker may be
 * editing an existing response. Use `hasOwnProperty` rather than truthiness so an
 * intentionally empty draft still overrides the committed value.
 */
export function getDisplayedAssessmentAnswer(questionId: string, committedAnswers: Answers, draftAnswers: Answers): Answer | undefined {
  return Object.prototype.hasOwnProperty.call(draftAnswers, questionId) ? draftAnswers[questionId] : committedAnswers[questionId];
}

/**
 * Filters visible questions down to assessment questions.
 *
 * Onboarding questions are rendered by dedicated screens. Validated AI
 * pre-answers are still stored and scored, but they are hidden from navigation to
 * reduce duplicate worker effort.
 */
export function getAssessmentQuestions(visibleQuestions: Question[], onboardingQuestionIds: Set<string>, autoAnsweredQuestionIds: string[]): Question[] {
  return visibleQuestions.filter((question) => !onboardingQuestionIds.has(question.question_id) && !autoAnsweredQuestionIds.includes(question.question_id));
}

/**
 * Determines where the assessment should move after a question is committed.
 *
 * A committed answer can change tags and reveal earlier follow-up questions in
 * section order. This helper prioritizes newly visible unanswered questions,
 * then moves forward to the next unanswered item, and returns `null` when the
 * assessment is complete.
 */
export function findNextAssessmentIndexAfterCommit(
  previousAssessmentQuestions: Question[],
  nextAssessmentQuestions: Question[],
  currentQuestionId: string,
  committedAnswers: Answers
): number | null {
  const previousQuestionIds = new Set(previousAssessmentQuestions.map((question) => question.question_id));
  const currentNextIndex = nextAssessmentQuestions.findIndex((question) => question.question_id === currentQuestionId);

  if (currentNextIndex >= 0) {
    const newlyVisibleEarlierIndex = nextAssessmentQuestions.findIndex((question, index) => {
      if (index >= currentNextIndex) return false;
      if (previousQuestionIds.has(question.question_id)) return false;
      return !isQuestionAnswered(question, committedAnswers[question.question_id]);
    });

    if (newlyVisibleEarlierIndex >= 0) return newlyVisibleEarlierIndex;

    const nextUnansweredIndex = nextAssessmentQuestions.findIndex((question, index) => {
      if (index <= currentNextIndex) return false;
      return !isQuestionAnswered(question, committedAnswers[question.question_id]);
    });

    return nextUnansweredIndex >= 0 ? nextUnansweredIndex : null;
  }

  const firstUnansweredIndex = nextAssessmentQuestions.findIndex((question) => !isQuestionAnswered(question, committedAnswers[question.question_id]));
  return firstUnansweredIndex >= 0 ? firstUnansweredIndex : null;
}

/**
 * Returns whether a question has enough data to continue.
 *
 * Required grouped radio questions need every group answered. Required grouped
 * checkbox questions need at least one selected body area/group.
 */
export function isQuestionAnswered(question: Question | undefined, answer: Answer | undefined) {
  if (!question?.required) return true;
  if (!answer) return false;

  if (question.type === "text") {
    return typeof answer.value === "string" && answer.value.trim().length > 0;
  }

  if (question.type === "multi_choice") {
    return typeof answer.value === "string" && answer.value.length > 0;
  }

  if (question.type === "select_all") {
    return Array.isArray(answer.value) && answer.value.length > 0;
  }

  if (question.type === "grouped_multi_choice") {
    if (!question.groups?.length || !isRecord(answer.value)) return false;
    const value = answer.value;
    return question.groups.every((group) => {
      const groupValue = value[group.group_id];
      return typeof groupValue === "string" && groupValue.length > 0;
    });
  }

  if (question.type === "grouped_select_all") {
    if (!isRecord(answer.value)) return false;
    return Object.values(answer.value).some((value) => Array.isArray(value) && value.length > 0);
  }

  return false;
}

/**
 * Returns whether a value should be treated as no committed answer.
 */
export function isEmptyAnswerValue(value: AnswerValue | undefined) {
  if (value === undefined) return true;
  if (typeof value === "string") return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (isRecord(value)) {
    return Object.values(value).every((entry) => (Array.isArray(entry) ? entry.length === 0 : entry.trim().length === 0));
  }
  return false;
}

function isRecord(value: unknown): value is Record<string, string | string[]> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
