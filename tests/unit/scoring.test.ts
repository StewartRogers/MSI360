import test from "node:test";
import assert from "node:assert/strict";
import { scoreAssessment } from "../../src/logic/scoring";
import type { Answers } from "../../src/types";

test("scoreAssessment returns unscored results when no answers are present", () => {
  const result = scoreAssessment({});

  assert.equal(result.composite_score, null);
  assert.equal(result.grouped_scores.physical, null);
  assert.equal(result.grouped_scores.environmental, null);
  assert.equal(result.factors.force.applicable_questions, 0);
});

test("scoreAssessment uses max selected option score per question and averages by factor", () => {
  const answers: Answers = {
    recent_discomfort: { type: "multi_choice", value: "yes" },
    handheld_tool_contact: { type: "select_all", value: ["poor_grip_size", "irregular_unbalanced"] },
    object_weight: { type: "multi_choice", value: "more_than_18_lb" },
    upper_body_posture: {
      type: "grouped_multi_choice",
      value: { forward_backward: "some", sideways: "most" }
    },
    repetitive_movements_duration: { type: "multi_choice", value: "more_than_4_hours" },
    noise_distraction: { type: "multi_choice", value: "frequently" }
  };

  const result = scoreAssessment(answers);

  assert.equal(result.factors.contact_stress.score, 3);
  assert.equal(result.factors.force.score, 3);
  assert.equal(result.factors.awkward_posture.score, 3);
  assert.equal(result.factors.repetition.score, 4);
  assert.equal(result.factors.environmental.score, 3);
  assert.equal(result.factors.symptoms.score, 3);
  assert.equal(result.grouped_scores.physical, 3.2);
  assert.equal(result.grouped_scores.environmental, 3);
  assert.equal(result.composite_score, 3.2);
});
