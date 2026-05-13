import test from "node:test";
import assert from "node:assert/strict";
import { scoreAssessment } from "../../src/logic/scoring";
import { describeFactorRisk, describeRisk, formatOverallScore, formatScore, formatScoreValue, getFactorSummaries, getPsychosocialInfluenceMessage, scorePercent } from "../../src/logic/scorePresentation";

test("score presentation helpers preserve existing labels and formatting", () => {
  assert.equal(formatScore(2), "2.0 / 4");
  assert.equal(formatOverallScore(3.7), "3.7 out of 4");
  assert.equal(formatOverallScore(null), "N/A");
  assert.equal(formatScoreValue(null), "N/A");
  assert.equal(scorePercent(5), 100);
  assert.equal(scorePercent(-1), 0);

  const result = scoreAssessment({
    "question-9": { type: "multi_choice", value: "yes" },
    "question-17": { type: "multi_choice", value: "5_to_18_lb" }
  });
  assert.deepEqual(
    getFactorSummaries(result).map((factor) => factor.label),
    ["Contact stress", "Force", "Awkward postures", "Repetition", "Environmental factors"]
  );
});

test("risk descriptions match score thresholds", () => {
  assert.equal(describeRisk(null), "Not enough data");
  assert.equal(describeRisk(1.4), "Low risk");
  assert.equal(describeRisk(1.5), "Possible risk");
  assert.equal(describeRisk(2.3), "Possible risk");
  assert.equal(describeRisk(2.4), "Likely risk");
  assert.equal(describeRisk(3.4), "Likely risk");
  assert.equal(describeRisk(3.5), "Known risk");
});

test("factor risk interpretations match score thresholds", () => {
  assert.equal(describeFactorRisk(null, "repetition"), "Not enough data to interpret repetition.");
  assert.equal(describeFactorRisk(1.4, "repetition"), "Currently low risk associated with repetition.");
  assert.equal(describeFactorRisk(1.5, "repetition"), "Possible risk of discomfort from repetition.");
  assert.equal(describeFactorRisk(2.3, "repetition"), "Possible risk of discomfort from repetition.");
  assert.equal(describeFactorRisk(2.4, "repetition"), "Likely risk of discomfort from repetition.");
  assert.equal(describeFactorRisk(3.4, "repetition"), "Likely risk of discomfort from repetition.");
  assert.equal(describeFactorRisk(3.5, "repetition"), "Known risk of pain and/or injury.");
});

test("psychosocial influence message appears only when the final score is negatively influenced", () => {
  const noInfluence = scoreAssessment({
    "question-17": { type: "multi_choice", value: "5_to_18_lb" }
  });
  const moderateInfluence = scoreAssessment({
    "question-7": { type: "multi_choice", value: "some_extent" },
    "question-17": { type: "multi_choice", value: "5_to_18_lb" }
  });
  const highInfluence = scoreAssessment({
    "question-7": { type: "multi_choice", value: "rarely" },
    "question-17": { type: "multi_choice", value: "5_to_18_lb" }
  });

  assert.equal(getPsychosocialInfluenceMessage(noInfluence), null);
  assert.equal(getPsychosocialInfluenceMessage(moderateInfluence), "Psychosocial factors negatively influenced the overall MSI risk score (x1.3).");
  assert.equal(getPsychosocialInfluenceMessage(highInfluence), "Psychosocial factors negatively influenced the overall MSI risk score (x1.6).");
});
