import {
  psychosocialMultipliers,
  psychosocialMultiplierThresholds,
  scoreRiskThresholds,
  scoreRoundingFactor,
  scoreScaleMaximum,
  scoringAggregationDescription,
  scoringVersion
} from "../../config/scoringConfig";
import { questions, riskFactors } from "../../data/catalog";
import type { Answers, RiskFactor, ScoreResult } from "../../types";
import { getSelectedOptions } from "../questionnaire/questionRouting";

/**
 * Scores the committed assessment answers.
 *
 * Prototype scoring uses catalog-defined placeholder mappings. For each
 * question, the highest selected score per factor counts once, then factor
 * scores are averaged into the base composite. Psychosocial values are averaged
 * separately and applied only as a bounded final-score multiplier.
 */
export function scoreAssessment(answers: Answers): ScoreResult {
  const factorQuestionScores = Object.fromEntries(riskFactors.map((factor) => [factor, [] as number[]])) as Record<RiskFactor, number[]>;
  const psychosocialQuestionScores: number[] = [];

  for (const question of questions) {
    const answer = answers[question.question_id];
    if (!answer) continue;

    const questionScores: Partial<Record<RiskFactor, number>> = {};
    const selectedOptions = getSelectedOptions(question, answer);

    selectedOptions.forEach((option) => {
      Object.entries(option.risk_scores).forEach(([factor, score]) => {
        if (typeof score !== "number") return;
        const key = factor as RiskFactor;
        questionScores[key] = Math.max(questionScores[key] ?? 0, score);
      });
    });

    const psychosocialScores = selectedOptions
      .map((option) => option.psychosocial_score)
      .filter((score): score is number => typeof score === "number");
    if (psychosocialScores.length) psychosocialQuestionScores.push(Math.max(...psychosocialScores));

    Object.entries(questionScores).forEach(([factor, score]) => {
      if (typeof score === "number") factorQuestionScores[factor as RiskFactor].push(score);
    });
  }

  const factors = Object.fromEntries(
    riskFactors.map((factor) => {
      const values = factorQuestionScores[factor];
      const score = values.length ? round(avg(values)) : null;
      return [factor, { score, applicable_questions: values.length, severity: describeScore(score) }];
    })
  ) as ScoreResult["factors"];

  const physicalValues = ["contact_stress", "force", "awkward_posture", "repetition"]
    .map((factor) => factors[factor as RiskFactor].score)
    .filter((score): score is number => typeof score === "number");
  const environmentalValues = [factors.environmental.score].filter((score): score is number => typeof score === "number");
  const allValues = Object.values(factors)
    .map((factor) => factor.score)
    .filter((score): score is number => typeof score === "number");
  const baseCompositeScore = allValues.length ? round(avg(allValues)) : null;
  const psychosocialScore = psychosocialQuestionScores.length ? round(avg(psychosocialQuestionScores)) : null;
  const psychosocialMultiplier = getPsychosocialMultiplier(psychosocialScore);
  const compositeScore = baseCompositeScore === null ? null : round(Math.min(scoreScaleMaximum, baseCompositeScore * psychosocialMultiplier));

  return {
    scoring_version: scoringVersion,
    aggregation: scoringAggregationDescription,
    factors,
    grouped_scores: {
      physical: physicalValues.length ? round(avg(physicalValues)) : null,
      environmental: environmentalValues.length ? round(avg(environmentalValues)) : null,
      organizational: null
    },
    base_composite_score: baseCompositeScore,
    composite_score: compositeScore,
    psychosocial_modifier: {
      score: psychosocialScore,
      applicable_questions: psychosocialQuestionScores.length,
      multiplier: psychosocialMultiplier,
      influenced_score: baseCompositeScore !== null && psychosocialMultiplier > 1
    },
    warnings: [
      "Question grading mappings are placeholders and can be replaced in the catalog.",
      "Psychosocial grading mappings are placeholders and modify only the final overall score."
    ]
  };
}

function avg(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function round(value: number) {
  return Math.round(value * scoreRoundingFactor) / scoreRoundingFactor;
}

/**
 * Maps the psychosocial average to the final composite-score multiplier.
 *
 * These thresholds are prototype values and should be reviewed before
 * production use.
 */
export function getPsychosocialMultiplier(score: number | null) {
  if (score === null || score < psychosocialMultiplierThresholds.moderateInfluence) return psychosocialMultipliers.none;
  if (score < psychosocialMultiplierThresholds.highInfluence) return psychosocialMultipliers.moderate;
  return psychosocialMultipliers.high;
}

function describeScore(score: number | null) {
  if (score === null) return "N/A";
  if (score < scoreRiskThresholds.possibleRisk) return "Low";
  if (score < scoreRiskThresholds.likelyRisk) return "Possible risk";
  if (score < scoreRiskThresholds.knownRisk) return "Likely risk";
  return "Known risk";
}
