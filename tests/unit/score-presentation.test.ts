import test from "node:test";
import assert from "node:assert/strict";
import { describeFactorRisk, describeRisk, formatScore, formatScoreValue, scorePercent } from "../../src/logic/scorePresentation";

test("score presentation helpers preserve existing labels and formatting", () => {
  assert.equal(formatScore(2), "2.0 / 4");
  assert.equal(formatScoreValue(null), "N/A");
  assert.equal(scorePercent(5), 100);
  assert.equal(scorePercent(-1), 0);
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
