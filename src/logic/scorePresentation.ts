import type { ScoreResult } from "../types";

export function formatScore(score: number | null) {
  return typeof score === "number" ? `${score.toFixed(1)} / 4` : "N/A";
}

export function formatScoreValue(score: number | null) {
  return typeof score === "number" ? score.toFixed(1) : "N/A";
}

export function scorePercent(score: number | null) {
  return typeof score === "number" ? Math.min(100, Math.max(0, (score / 4) * 100)) : 0;
}

export function describeRisk(score: number | null) {
  if (score === null) return "Not enough data";
  if (score < 1.5) return "Low risk";
  if (score < 2.5) return "Possible risk";
  if (score < 3.5) return "Likely risk";
  return "High risk";
}

export function getFactorSummaries(result: ScoreResult) {
  const labels: Record<keyof ScoreResult["factors"], string> = {
    contact_stress: "Contact stress",
    force: "Force",
    awkward_posture: "Awkward postures",
    repetition: "Repetition",
    environmental: "Environmental factors",
    symptoms: "Symptoms"
  };

  return (Object.keys(result.factors) as Array<keyof ScoreResult["factors"]>).map((key) => ({ key, label: labels[key] }));
}
