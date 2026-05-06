import test from "node:test";
import assert from "node:assert/strict";
import { questions } from "../../src/data/catalog";
import { getSelectedOptions, getVisibleQuestions, recomputeTags } from "../../src/logic/routing";
import type { AiOutputs, Answers } from "../../src/types";

test("base routing shows always-visible questions and hides conditional follow-ups", () => {
  const visibleIds = getVisibleQuestions(["start"]).map((question) => question.question_id);

  assert.ok(visibleIds.includes("role"));
  assert.ok(visibleIds.includes("recent_discomfort"));
  assert.ok(visibleIds.includes("upper_body_posture"));
  assert.ok(!visibleIds.includes("body_discomfort_areas"));
  assert.ok(!visibleIds.includes("object_weight"));
});

test("recomputeTags combines selected option tags and allowed AI tags", () => {
  const answers: Answers = {
    role: { type: "multi_choice", value: "supervisor" },
    task_description: { type: "text", value: "I lift boxes and use a drill." }
  };
  const aiOutputs: AiOutputs = {
    task_description: {
      normalized_answer_en: "I lift boxes and use a drill.",
      add_tags: ["manual_handling", "tool_use", "not_a_real_tag"],
      missing_details: [],
      confidence: 0.8,
      notes: "Test output",
      provider: "test"
    }
  };

  const tags = recomputeTags(answers, aiOutputs);

  assert.ok(tags.includes("start"));
  assert.ok(tags.includes("organizational_context"));
  assert.ok(tags.includes("manual_handling"));
  assert.ok(tags.includes("tool_use"));
  assert.ok(!tags.includes("not_a_real_tag"));
});

test("getSelectedOptions reads grouped question answers", () => {
  const question = questions.find((item) => item.question_id === "upper_body_posture");
  assert.ok(question);

  const selected = getSelectedOptions(question, {
    type: "grouped_multi_choice",
    value: { forward_backward: "some", sideways: "most" }
  });

  assert.equal(selected.length, 2);
  assert.deepEqual(
    selected.map((option) => option.risk_scores.awkward_posture),
    [2, 3]
  );
});
