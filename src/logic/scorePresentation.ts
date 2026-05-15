import { translations } from "../data/translations";
import type { RiskFactor, ScoreResult, Translation } from "../types";

export function formatScore(score: number | null, t?: Translation) {
  return typeof score === "number" ? `${score.toFixed(1)} / 4` : getScoreText(t, "score_not_available", "N/A");
}

export function formatOverallScore(score: number | null, t?: Translation) {
  if (typeof score !== "number") return getScoreText(t, "score_not_available", "N/A");
  return getScoreText(t, "score_out_of_4", "{score} out of 4").replaceAll("{score}", score.toFixed(1));
}

export function formatScoreValue(score: number | null, t?: Translation) {
  return typeof score === "number" ? score.toFixed(1) : getScoreText(t, "score_not_available", "N/A");
}

export function scorePercent(score: number | null) {
  return typeof score === "number" ? Math.min(100, Math.max(0, (score / 4) * 100)) : 0;
}

export function describeRisk(score: number | null, t?: Translation) {
  if (score === null) return getScoreText(t, "score_risk_not_enough", "Not enough data");
  if (score < 1.5) return getScoreText(t, "score_risk_low", "Low risk");
  if (score < 2.4) return getScoreText(t, "score_risk_possible", "Possible risk");
  if (score < 3.5) return getScoreText(t, "score_risk_likely", "Likely risk");
  return getScoreText(t, "score_risk_known", "Known risk");
}

export function describeFactorRisk(score: number | null, factorSubject: string, t?: Translation) {
  if (score === null) return interpolateScoreText(t, "score_factor_not_enough", "Not enough data to interpret {factor}.", factorSubject);
  if (score < 1.5) return interpolateScoreText(t, "score_factor_low", "Currently low risk associated with {factor}.", factorSubject);
  if (score < 2.4) return interpolateScoreText(t, "score_factor_possible", "Possible risk of discomfort from {factor}.", factorSubject);
  if (score < 3.5) return interpolateScoreText(t, "score_factor_likely", "Likely risk of discomfort from {factor}.", factorSubject);
  return getScoreText(t, "score_factor_known", "Known risk of pain and/or injury.");
}

export function getPsychosocialInfluenceMessage(result: ScoreResult, t?: Translation) {
  if (!result.psychosocial_modifier.influenced_score) return null;
  return getScoreText(t, "score_psychosocial_note", "Psychosocial factors negatively influenced the overall MSI risk score ({multiplier}).").replaceAll(
    "{multiplier}",
    formatMultiplier(result.psychosocial_modifier.multiplier)
  );
}

export function getFactorSummaries(result: ScoreResult, t?: Translation) {
  const labels: Record<RiskFactor, { label: string; riskSubject: string }> = {
    contact_stress: { label: t?.sections.contact_stress || "Contact stress", riskSubject: getScoreText(t, "score_subject_contact_stress", "contact stress") },
    force: { label: t?.sections.force || "Force", riskSubject: getScoreText(t, "score_subject_force", "force") },
    awkward_posture: { label: t?.sections.awkward_postures || "Awkward postures", riskSubject: getScoreText(t, "score_subject_awkward_postures", "awkward postures") },
    repetition: { label: t?.sections.repetition || "Repetition", riskSubject: getScoreText(t, "score_subject_repetition", "repetition") },
    environmental: { label: t?.sections.environmental || "Environmental factors", riskSubject: getScoreText(t, "score_subject_environmental", "environmental factors") }
  };

  return (Object.keys(result.factors) as RiskFactor[]).map((key) => ({ key, ...labels[key] }));
}

function formatMultiplier(multiplier: number) {
  return `x${multiplier.toFixed(1).replace(/\.0$/, "")}`;
}

function interpolateScoreText(t: Translation | undefined, key: string, fallback: string, factorSubject: string) {
  return getScoreText(t, key, fallback).replaceAll("{factor}", factorSubject);
}

function getScoreText(t: Translation | undefined, key: string, fallback: string) {
  return t?.app[key] || translations.en.app[key] || fallback;
}
