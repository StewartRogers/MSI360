import test from "node:test";
import assert from "node:assert/strict";
import { questions, sectionOrder } from "../../src/data/catalog";
import { translations } from "../../src/data/translations";
import { getQuestionText } from "../../src/data/translationText";
import { interpretTextAnswer } from "../../src/logic/ai";
import { applyAnswer, applyDraftAnswer, findNextAssessmentIndexAfterCommit, getAssessmentQuestions, getDisplayedAssessmentAnswer, isQuestionAnswered } from "../../src/logic/assessmentFlow";
import { getVisibleQuestions, recomputeTags } from "../../src/logic/routing";
import { scoreAssessment } from "../../src/logic/scoring";
import type { AiOutputs, Answer, Answers } from "../../src/types";

test("manual-handling task description routes to the main force and tool follow-up questions", async () => {
  const taskQuestion = questions.find((question) => question.question_id === "question-3");
  assert.ok(taskQuestion);

  const answers: Answers = {
    "question-3": {
      type: "text",
      value: "I repeatedly lift heavy boxes and use a drill."
    }
  };
  const aiOutput = await interpretTextAnswer(taskQuestion, String(answers["question-3"].value));
  const aiOutputs: AiOutputs = { "question-3": aiOutput };
  const tags = recomputeTags(answers, aiOutputs);
  const visibleQuestionIds = getVisibleQuestions(tags).map((question) => question.question_id);

  assert.ok(visibleQuestionIds.includes("question-13"));
  assert.ok(visibleQuestionIds.includes("question-17"));
  assert.ok(visibleQuestionIds.includes("question-32"));
});

test("reported discomfort answer routes to the body discomfort follow-up", () => {
  const answers: Answers = {
    "question-9": { type: "multi_choice", value: "yes" }
  };

  const tags = recomputeTags(answers, {});
  const visibleQuestionIds = getVisibleQuestions(tags).map((question) => question.question_id);

  assert.ok(visibleQuestionIds.includes("question-10"));
});

test("completed high-risk sample answers produce a score summary", () => {
  const answers: Answers = {
    "question-9": { type: "multi_choice", value: "yes" },
    "question-17": { type: "multi_choice", value: "more_than_18_lb" },
    "question-20": {
      type: "grouped_multi_choice",
      value: { forward_backward: "most", sideways: "some" }
    },
    "question-29": { type: "multi_choice", value: "more_than_4_hours" },
    "question-37": { type: "multi_choice", value: "frequently" }
  };

  const result = scoreAssessment(answers);

  assert.equal(result.factors.force.severity, "Known risk");
  assert.equal(result.factors.repetition.severity, "Likely risk");
  assert.ok(typeof result.composite_score === "number");
});

test("auto-answered questions can be hidden from assessment navigation while still being scored", () => {
  const onboardingQuestionIds = new Set(["question-1", "question-2", "question-3", "question-4"]);
  const autoAnsweredQuestionIds = new Set(["question-17"]);
  const answers: Answers = {
    "question-3": { type: "text", value: "I lift boxes that are more than 18 lb." },
    "question-17": { type: "multi_choice", value: "more_than_18_lb" }
  };
  const aiOutputs: AiOutputs = {
    "question-3": {
      normalized_answer_en: "I lift boxes that are more than 18 lb.",
      add_tags: ["manual_handling", "lifting_lowering", "heavy_loads"],
      missing_details: [],
      confidence: 0.9,
      notes: "Test output",
      provider: "test"
    }
  };

  const tags = recomputeTags(answers, aiOutputs);
  const assessmentQuestionIds = getVisibleQuestions(tags)
    .filter((question) => !onboardingQuestionIds.has(question.question_id) && !autoAnsweredQuestionIds.has(question.question_id))
    .map((question) => question.question_id);
  const result = scoreAssessment(answers);

  assert.ok(!assessmentQuestionIds.includes("question-17"));
  assert.equal(result.factors.force.score, 4);
});

test("draft assessment answers do not reroute question 22 until committed", () => {
  const answers = getAnsweredSeatedAssessmentThroughQuestion21();
  const tagsBeforeDraft = recomputeTags(answers, {});
  const questionsBeforeDraft = getVisibleAssessmentQuestions(tagsBeforeDraft, answers);
  const question22Index = questionsBeforeDraft.findIndex((question) => question.question_id === "question-22");
  assert.ok(question22Index >= 0);

  const draftAnswers = applyAnswer({}, "question-22", "grouped_multi_choice", { hands_above_shoulders: "never", hands_floor_to_knee: "some" });
  const displayedAnswer = getDisplayedAssessmentAnswer("question-22", answers, draftAnswers);
  const questionsAfterDraft = getVisibleAssessmentQuestions(tagsBeforeDraft, answers);

  assert.equal(displayedAnswer?.value && typeof displayedAnswer.value === "object" && !Array.isArray(displayedAnswer.value) ? displayedAnswer.value.hands_floor_to_knee : "", "some");
  assert.deepEqual(
    questionsAfterDraft.map((question) => question.question_id),
    questionsBeforeDraft.map((question) => question.question_id)
  );
  assert.equal(questionsAfterDraft[question22Index].question_id, "question-22");

  const committedAnswers = applyAnswer(answers, "question-22", "grouped_multi_choice", displayedAnswer?.value || {});
  const tagsAfterCommit = recomputeTags(committedAnswers, {});
  const questionsAfterCommit = getVisibleAssessmentQuestions(tagsAfterCommit, committedAnswers);
  const nextIndex = findNextAssessmentIndexAfterCommit(questionsBeforeDraft, questionsAfterCommit, "question-22", committedAnswers);

  assert.ok(tagsAfterCommit.includes("low_work"));
  assert.equal(nextIndex === null ? "" : questionsAfterCommit[nextIndex].question_id, "question-12");
});

test("question 22 overhead-work follow-ups appear only after commit", () => {
  const answers = getAnsweredSeatedAssessmentThroughQuestion21();
  const tagsBeforeDraft = recomputeTags(answers, {});
  const questionsBeforeDraft = getVisibleAssessmentQuestions(tagsBeforeDraft, answers);
  const draftAnswers = applyAnswer({}, "question-22", "grouped_multi_choice", { hands_above_shoulders: "some", hands_floor_to_knee: "never" });
  const displayedAnswer = getDisplayedAssessmentAnswer("question-22", answers, draftAnswers);
  const questionsAfterDraft = getVisibleAssessmentQuestions(tagsBeforeDraft, answers);

  assert.ok(!questionsAfterDraft.some((question) => question.question_id === "question-23"));
  assert.ok(!questionsAfterDraft.some((question) => question.question_id === "question-24"));

  const committedAnswers = applyAnswer(answers, "question-22", "grouped_multi_choice", displayedAnswer?.value || {});
  const questionsAfterCommit = getVisibleAssessmentQuestions(recomputeTags(committedAnswers, {}), committedAnswers);
  const nextIndex = findNextAssessmentIndexAfterCommit(questionsBeforeDraft, questionsAfterCommit, "question-22", committedAnswers);

  assert.equal(nextIndex === null ? "" : questionsAfterCommit[nextIndex].question_id, "question-23");
  assert.ok(questionsAfterCommit.some((question) => question.question_id === "question-24"));
});

test("grouped assessment drafts must answer every required group before continuing", () => {
  const question22 = questions.find((question) => question.question_id === "question-22");
  assert.ok(question22);

  const partialDraft: Answer = {
    type: "grouped_multi_choice",
    value: { hands_floor_to_knee: "some" }
  };
  const completeDraft: Answer = {
    type: "grouped_multi_choice",
    value: { hands_above_shoulders: "never", hands_floor_to_knee: "some" }
  };

  assert.equal(isQuestionAnswered(question22, partialDraft), false);
  assert.equal(isQuestionAnswered(question22, completeDraft), true);
});

test("empty drafts override committed assessment answers while editing", () => {
  const question22 = questions.find((question) => question.question_id === "question-22");
  assert.ok(question22);

  const committedAnswers = applyAnswer({}, "question-22", "grouped_multi_choice", { hands_above_shoulders: "never", hands_floor_to_knee: "some" });
  const draftAnswers = applyDraftAnswer({}, "question-22", "grouped_multi_choice", {});
  const displayedAnswer = getDisplayedAssessmentAnswer("question-22", committedAnswers, draftAnswers);

  assert.deepEqual(displayedAnswer?.value, {});
  assert.equal(isQuestionAnswered(question22, displayedAnswer), false);
});

test("draft assessment answers are not scored until committed", () => {
  const answers = getAnsweredSeatedAssessmentThroughQuestion21();
  const draftAnswers = applyAnswer({}, "question-22", "grouped_multi_choice", { hands_above_shoulders: "never", hands_floor_to_knee: "some" });
  const committedScore = scoreAssessment(answers);
  const scoreAfterCommit = scoreAssessment(applyAnswer(answers, "question-22", "grouped_multi_choice", draftAnswers["question-22"].value));

  assert.equal(answers["question-22"], undefined);
  assert.equal(committedScore.factors.awkward_posture.score, 1.3);
  assert.equal(scoreAfterCommit.factors.awkward_posture.score, 1.5);
});

test("every configured question has English display text for its options", () => {
  const englishQuestions = translations.en.questions;

  for (const question of questions) {
    const text = englishQuestions[question.question_id];
    assert.ok(text, `Missing English text for question ${question.question_id}`);
    assert.ok(text.label, `Missing English label for question ${question.question_id}`);

    for (const option of question.options ?? []) {
      assert.ok(text.options?.[option.option_id], `Missing option label for ${question.question_id}.${option.option_id}`);
    }

    for (const group of question.groups ?? []) {
      const groupText = text.groups?.[group.group_id];
      assert.ok(groupText?.label, `Missing group label for ${question.question_id}.${group.group_id}`);
      for (const option of group.options) {
        assert.ok(groupText.options[option.option_id], `Missing grouped option label for ${question.question_id}.${group.group_id}.${option.option_id}`);
      }
    }
  }
});

test("question text uses selected translations with English field fallback", () => {
  const text = getQuestionText(
    {
      ...translations.en,
      questions: {
        "question-1": {
          label: "Translated role question",
          options: {
            worker: "Translated worker"
          }
        }
      }
    },
    "question-1"
  );

  assert.equal(text?.label, "Translated role question");
  assert.equal(text?.options?.worker, "Translated worker");
  assert.equal(text?.options?.supervisor, "Supervisor");
});

test("Punjabi translation has display text for every configured question option", () => {
  const punjabiQuestions = translations.pa.questions;

  assert.equal(translations.pa.app.description_title, "ਵੇਰਵਾ");
  assert.ok(translations.pa.app.description_body);

  for (const question of questions) {
    const text = punjabiQuestions[question.question_id];
    assert.ok(text, `Missing Punjabi text for question ${question.question_id}`);
    assert.ok(text.label, `Missing Punjabi label for question ${question.question_id}`);

    for (const option of question.options ?? []) {
      assert.ok(text.options?.[option.option_id], `Missing Punjabi option label for ${question.question_id}.${option.option_id}`);
    }

    for (const group of question.groups ?? []) {
      const groupText = text.groups?.[group.group_id];
      assert.ok(groupText?.label, `Missing Punjabi group label for ${question.question_id}.${group.group_id}`);
      for (const option of group.options) {
        assert.ok(groupText.options[option.option_id], `Missing Punjabi grouped option label for ${question.question_id}.${group.group_id}.${option.option_id}`);
      }
    }
  }
});

function getAnsweredSeatedAssessmentThroughQuestion21(): Answers {
  return {
    "question-6": { type: "multi_choice", value: "mostly_sit" },
    "question-8": { type: "multi_choice", value: "not_at_all" },
    "question-9": { type: "multi_choice", value: "no" },
    "question-20": {
      type: "grouped_multi_choice",
      value: { forward_backward: "never", sideways: "never" }
    },
    "question-21": { type: "multi_choice", value: "never" }
  };
}

function getVisibleAssessmentQuestions(activeTags: string[], answers: Answers) {
  const onboardingQuestionIds = new Set(["question-1", "question-2", "question-3", "question-4"]);
  return getAssessmentQuestions(
    getVisibleQuestions(activeTags).sort((a, b) => sectionOrder.indexOf(a.section) - sectionOrder.indexOf(b.section)),
    onboardingQuestionIds,
    []
  ).filter((question) => question.question_id === "question-22" || !isQuestionAnswered(question, answers[question.question_id]));
}
