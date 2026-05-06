import test from "node:test";
import assert from "node:assert/strict";
import { questions } from "../../src/data/catalog";
import { translations } from "../../src/data/translations";
import { interpretTextAnswer } from "../../src/logic/ai";
import { getVisibleQuestions, recomputeTags } from "../../src/logic/routing";
import { scoreAssessment } from "../../src/logic/scoring";
import type { AiOutputs, Answers } from "../../src/types";

test("manual-handling task description routes to the main force and tool follow-up questions", async () => {
  const taskQuestion = questions.find((question) => question.question_id === "task_description");
  assert.ok(taskQuestion);

  const answers: Answers = {
    task_description: {
      type: "text",
      value: "I repeatedly lift heavy boxes and use a drill."
    }
  };
  const aiOutput = await interpretTextAnswer(taskQuestion, String(answers.task_description.value));
  const aiOutputs: AiOutputs = { task_description: aiOutput };
  const tags = recomputeTags(answers, aiOutputs);
  const visibleQuestionIds = getVisibleQuestions(tags).map((question) => question.question_id);

  assert.ok(visibleQuestionIds.includes("object_weight"));
  assert.ok(visibleQuestionIds.includes("handheld_tool_contact"));
  assert.ok(visibleQuestionIds.includes("repetitive_movements_duration"));
});

test("reported discomfort answer routes to the body discomfort follow-up", () => {
  const answers: Answers = {
    recent_discomfort: { type: "multi_choice", value: "yes" }
  };

  const tags = recomputeTags(answers, {});
  const visibleQuestionIds = getVisibleQuestions(tags).map((question) => question.question_id);

  assert.ok(visibleQuestionIds.includes("body_discomfort_areas"));
});

test("completed high-risk sample answers produce a score summary", () => {
  const answers: Answers = {
    recent_discomfort: { type: "multi_choice", value: "yes" },
    object_weight: { type: "multi_choice", value: "more_than_18_lb" },
    upper_body_posture: {
      type: "grouped_multi_choice",
      value: { forward_backward: "most", sideways: "some" }
    },
    repetitive_movements_duration: { type: "multi_choice", value: "more_than_4_hours" },
    noise_distraction: { type: "multi_choice", value: "frequently" }
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
