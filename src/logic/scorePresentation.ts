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
  if (score < 2.4) return "Possible risk";
  if (score < 3.5) return "Likely risk";
  return "Known risk";
}

export function describeFactorRisk(score: number | null, factorSubject: string) {
  if (score === null) return `Not enough data to interpret ${factorSubject}.`;
  if (score < 1.5) return `Currently low risk associated with ${factorSubject}.`;
  if (score < 2.4) return `Possible risk of discomfort from ${factorSubject}.`;
  if (score < 3.5) return `Likely risk of discomfort from ${factorSubject}.`;
  return "Known risk of pain and/or injury.";
}

export function getFactorSummaries(result: ScoreResult) {
  const labels: Record<keyof ScoreResult["factors"], { label: string; riskSubject: string }> = {
    contact_stress: { label: "Contact stress", riskSubject: "contact stress" },
    force: { label: "Force", riskSubject: "force" },
    awkward_posture: { label: "Awkward postures", riskSubject: "awkward postures" },
    repetition: { label: "Repetition", riskSubject: "repetition" },
    environmental: { label: "Environmental factors", riskSubject: "environmental factors" },
    symptoms: { label: "Symptoms", riskSubject: "reported symptoms" }
  };

  return (Object.keys(result.factors) as Array<keyof ScoreResult["factors"]>).map((key) => ({ key, ...labels[key] }));
}
