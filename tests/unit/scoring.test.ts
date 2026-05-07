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
    "question-9": { type: "multi_choice", value: "yes" },
    "question-13": { type: "select_all", value: ["poor_grip_size", "irregular_unbalanced"] },
    "question-17": { type: "multi_choice", value: "more_than_18_lb" },
    "question-20": {
      type: "grouped_multi_choice",
      value: { forward_backward: "some", sideways: "most" }
    },
    "question-29": { type: "multi_choice", value: "more_than_4_hours" },
    "question-37": { type: "multi_choice", value: "frequently" }
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
