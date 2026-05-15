/**
 * Unit coverage for localized score formatting and score-summary rendering.
 */
import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { translations } from "../../src/data/translations";
import { scoreAssessment } from "../../src/logic/scoring";
import {
  describeFactorRisk,
  describeRisk,
  formatOverallScore,
  formatOverallScoreTokens,
  formatScore,
  formatScoreValue,
  getFactorSummaries,
  getPsychosocialInfluenceMessage,
  scorePercent
} from "../../src/logic/scorePresentation";
import { ScoreScreen } from "../../src/ui/screens/ResultScreens";
import type { FactorScore, ScoreResult } from "../../src/types";

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

test("score presentation helpers use selected translations", () => {
  const result = scoreAssessment({
    "question-17": { type: "multi_choice", value: "more_than_18_lb" }
  });

  assert.equal(formatOverallScore(3.7, translations.fr), "3.7 sur 4");
  assert.deepEqual(formatOverallScoreTokens(3.7, translations.ko), [
    { text: "4점 만점에 ", isScore: false },
    { text: "3.7", isScore: true }
  ]);
  assert.deepEqual(formatOverallScoreTokens(3.7, translations.fr), [
    { text: "3.7", isScore: true },
    { text: " sur 4", isScore: false }
  ]);
  assert.equal(describeRisk(3.5, translations.es), "Riesgo conocido");
  assert.equal(describeFactorRisk(1.5, "la répétition", translations.fr), "Risque possible d'inconfort lié à la répétition.");
  assert.equal(getFactorSummaries(result, translations.ja)[1].label, "力の使用");
});

test("score screen renders the localized overall score instead of hardcoded English", () => {
  const tree = ScoreScreen({
    result: getScoreResult(3.7),
    progressStep: 5,
    totalSteps: 5,
    translations: translations.ko,
    onBack: () => undefined,
    onContinue: () => undefined
  });
  const text = collectText(tree);

  assert.ok(text.includes("4점 만점에 3.7"));
  assert.ok(!text.includes("out of"));
  assert.deepEqual(collectSmallTextByClass(tree, "score-out-of"), ["4점 만점에 "]);
  assert.deepEqual(collectSpanTextInsideStrong(tree), []);
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

function getScoreResult(compositeScore: number): ScoreResult {
  return {
    scoring_version: "test",
    aggregation: "test",
    factors: {
      contact_stress: unscoredFactor(),
      force: unscoredFactor(),
      awkward_posture: unscoredFactor(),
      repetition: unscoredFactor(),
      environmental: unscoredFactor()
    },
    grouped_scores: {
      physical: null,
      environmental: null,
      organizational: null
    },
    base_composite_score: compositeScore,
    composite_score: compositeScore,
    psychosocial_modifier: {
      score: null,
      applicable_questions: 0,
      multiplier: 1,
      influenced_score: false
    },
    warnings: []
  };
}

function unscoredFactor(): FactorScore {
  return {
    score: null,
    applicable_questions: 0,
    severity: "unscored"
  };
}

function collectText(node: React.ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(collectText).join("");
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) return collectText(node.props.children);
  return "";
}

function collectSmallTextByClass(node: React.ReactNode, className: string): string[] {
  if (node === null || node === undefined || typeof node === "boolean" || typeof node === "string" || typeof node === "number") return [];
  if (Array.isArray(node)) return node.flatMap((child) => collectSmallTextByClass(child, className));
  if (!React.isValidElement<{ children?: React.ReactNode; className?: string }>(node)) return [];

  const childMatches = collectSmallTextByClass(node.props.children, className);
  if (node.type === "small" && node.props.className === className) return [collectText(node.props.children), ...childMatches];
  return childMatches;
}

function collectSpanTextInsideStrong(node: React.ReactNode, insideStrong = false): string[] {
  if (node === null || node === undefined || typeof node === "boolean" || typeof node === "string" || typeof node === "number") return [];
  if (Array.isArray(node)) return node.flatMap((child) => collectSpanTextInsideStrong(child, insideStrong));
  if (!React.isValidElement<{ children?: React.ReactNode }>(node)) return [];

  const nextInsideStrong = insideStrong || node.type === "strong";
  const childMatches = collectSpanTextInsideStrong(node.props.children, nextInsideStrong);
  if (nextInsideStrong && node.type === "span") return [collectText(node.props.children), ...childMatches];
  return childMatches;
}
