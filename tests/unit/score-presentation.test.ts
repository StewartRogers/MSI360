import test from "node:test";
import assert from "node:assert/strict";
import { describeRisk, formatScore, formatScoreValue, scorePercent } from "../../src/logic/scorePresentation";

test("score presentation helpers preserve existing labels and formatting", () => {
  assert.equal(formatScore(2), "2.0 / 4");
  assert.equal(formatScoreValue(null), "N/A");
  assert.equal(scorePercent(5), 100);
  assert.equal(scorePercent(-1), 0);
});

test("risk descriptions match score thresholds", () => {
  assert.equal(describeRisk(null), "Not enough data");
  assert.equal(describeRisk(1.4), "Low risk");
  assert.equal(describeRisk(2.4), "Possible risk");
  assert.equal(describeRisk(3.4), "Likely risk");
  assert.equal(describeRisk(3.5), "High risk");
});
