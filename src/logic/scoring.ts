import { riskFactors } from "../data/catalog";
import type { Answers, RiskFactor, ScoreResult } from "../types";
import { getSelectedOptions } from "./routing";
import { questions } from "../data/catalog";

export function scoreAssessment(answers: Answers): ScoreResult {
  const factorQuestionScores = Object.fromEntries(riskFactors.map((factor) => [factor, [] as number[]])) as Record<RiskFactor, number[]>;

  for (const question of questions) {
    const answer = answers[question.question_id];
    if (!answer) continue;

    const questionScores: Partial<Record<RiskFactor, number>> = {};
    getSelectedOptions(question, answer).forEach((option) => {
      Object.entries(option.risk_scores).forEach(([factor, score]) => {
        if (typeof score !== "number") return;
        const key = factor as RiskFactor;
        questionScores[key] = Math.max(questionScores[key] ?? 0, score);
      });
    });

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

  const physicalValues = ["contact_stress", "force", "awkward_posture", "repetition", "symptoms"]
    .map((factor) => factors[factor as RiskFactor].score)
    .filter((score): score is number => typeof score === "number");
  const environmentalValues = [factors.environmental.score].filter((score): score is number => typeof score === "number");
  const allValues = Object.values(factors)
    .map((factor) => factor.score)
    .filter((score): score is number => typeof score === "number");

  return {
    scoring_version: "client-prototype-v1",
    aggregation: "Max selected option score per question, averaged by factor",
    factors,
    grouped_scores: {
      physical: physicalValues.length ? round(avg(physicalValues)) : null,
      environmental: environmentalValues.length ? round(avg(environmentalValues)) : null,
      organizational: null
    },
    composite_score: allValues.length ? round(avg(allValues)) : null,
    warnings: [
      "Question grading mappings are placeholders and can be replaced in the catalog.",
      "Organizational/work-design answers are report context only."
    ]
  };
}

function avg(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function round(value: number) {
  return Math.round(value * 10) / 10;
}

function describeScore(score: number | null) {
  if (score === null) return "N/A";
  if (score < 1.5) return "Low";
  if (score < 2.4) return "Possible risk";
  if (score < 3.5) return "Likely risk";
  return "Known risk";
}
