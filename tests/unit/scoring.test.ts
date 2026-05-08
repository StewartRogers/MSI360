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
  assert.equal(result.factors.force.score, 4);
  assert.equal(result.factors.awkward_posture.score, 3);
  assert.equal(result.factors.repetition.score, 3);
  assert.equal(result.factors.environmental.score, 3);
  assert.equal(result.factors.symptoms.score, 3);
  assert.equal(result.grouped_scores.physical, 3.2);
  assert.equal(result.grouped_scores.environmental, 3);
  assert.equal(result.composite_score, 3.2);
});

test("scoreAssessment averages contact stress over the number of answered contact stress questions", () => {
  const fourContactStressAnswers: Answers = {
    "question-11": { type: "multi_choice", value: "more_than_1_hour" },
    "question-12": { type: "multi_choice", value: "30_min_to_1_hour" },
    "question-13": { type: "select_all", value: ["sharp_handholds"] },
    "question-14": { type: "multi_choice", value: "no" }
  };
  const threeContactStressAnswers: Answers = {
    "question-11": fourContactStressAnswers["question-11"],
    "question-12": fourContactStressAnswers["question-12"],
    "question-14": fourContactStressAnswers["question-14"]
  };

  const fourQuestionResult = scoreAssessment(fourContactStressAnswers);
  const threeQuestionResult = scoreAssessment(threeContactStressAnswers);

  assert.equal(fourQuestionResult.factors.contact_stress.applicable_questions, 4);
  assert.equal(fourQuestionResult.factors.contact_stress.score, 2.8);
  assert.equal(threeQuestionResult.factors.contact_stress.applicable_questions, 3);
  assert.equal(threeQuestionResult.factors.contact_stress.score, 2.7);
});

test("scoreAssessment averages force over the number of answered force questions", () => {
  const fiveForceAnswers: Answers = {
    "question-15": { type: "multi_choice", value: "rough" },
    "question-16": { type: "multi_choice", value: "most" },
    "question-17": { type: "multi_choice", value: "more_than_18_lb" },
    "question-18": { type: "multi_choice", value: "regularly" },
    "question-19": { type: "multi_choice", value: "ask_but_no_assistance" }
  };
  const threeForceAnswers: Answers = {
    "question-15": fiveForceAnswers["question-15"],
    "question-16": fiveForceAnswers["question-16"],
    "question-17": fiveForceAnswers["question-17"]
  };

  const fiveQuestionResult = scoreAssessment(fiveForceAnswers);
  const threeQuestionResult = scoreAssessment(threeForceAnswers);

  assert.equal(fiveQuestionResult.factors.force.applicable_questions, 5);
  assert.equal(fiveQuestionResult.factors.force.score, 3.4);
  assert.equal(threeQuestionResult.factors.force.applicable_questions, 3);
  assert.equal(threeQuestionResult.factors.force.score, 3.3);
});

test("scoreAssessment averages repetition over the number of answered repetition questions", () => {
  const answers: Answers = {
    "question-29": { type: "multi_choice", value: "more_than_4_hours" },
    "question-30": { type: "multi_choice", value: "more_than_2_hours" },
    "question-31": { type: "multi_choice", value: "none" }
  };

  const result = scoreAssessment(answers);

  assert.equal(result.factors.repetition.applicable_questions, 3);
  assert.equal(result.factors.repetition.score, 2.3);
});

test("scoreAssessment severity uses the configured risk interpretation boundaries", () => {
  const possibleRiskAnswers: Answers = {
    "question-15": { type: "multi_choice", value: "rough" },
    "question-16": { type: "multi_choice", value: "some" },
    "question-17": { type: "multi_choice", value: "5_to_18_lb" }
  };
  const likelyRiskAnswers: Answers = {
    ...possibleRiskAnswers,
    "question-18": { type: "multi_choice", value: "occasionally" },
    "question-19": { type: "multi_choice", value: "do_not_ask" }
  };
  const knownRiskAnswers: Answers = {
    "question-16": { type: "multi_choice", value: "most" },
    "question-17": { type: "multi_choice", value: "more_than_18_lb" },
    "question-18": { type: "multi_choice", value: "occasionally" },
    "question-19": { type: "multi_choice", value: "ask_but_no_assistance" }
  };

  assert.equal(scoreAssessment(possibleRiskAnswers).factors.force.score, 2.3);
  assert.equal(scoreAssessment(possibleRiskAnswers).factors.force.severity, "Possible risk");
  assert.equal(scoreAssessment(likelyRiskAnswers).factors.force.score, 2.4);
  assert.equal(scoreAssessment(likelyRiskAnswers).factors.force.severity, "Likely risk");
  assert.equal(scoreAssessment(knownRiskAnswers).factors.force.score, 3.5);
  assert.equal(scoreAssessment(knownRiskAnswers).factors.force.severity, "Known risk");
});
