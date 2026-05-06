import test from "node:test";
import assert from "node:assert/strict";
import { questions } from "../../src/data/catalog";
import { translations } from "../../src/data/translations";
import { interpretTextAnswer } from "../../src/logic/ai";
import { getVisibleQuestions, recomputeTags } from "../../src/logic/routing";
import { scoreAssessment } from "../../src/logic/scoring";
import type { AiOutputs, Answers } from "../../src/types";

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

  assert.equal(result.factors.force.severity, "Likely risk");
  assert.equal(result.factors.repetition.severity, "Known/high risk");
  assert.ok(typeof result.composite_score === "number");
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
