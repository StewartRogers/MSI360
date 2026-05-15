import { translations } from "../../data/translations";
import type { RiskFactor, ScoreResult, Translation } from "../../types";

/**
 * One display token from an overall-score phrase.
 *
 * The score screen renders the numeric score larger than the surrounding text,
 * so localized templates are split into score and non-score tokens.
 */
export interface OverallScoreToken {
  text: string;
  isScore: boolean;
}

/**
 * Formats a category score using the compact screen/report label.
 */
export function formatScore(score: number | null, t?: Translation) {
  return typeof score === "number" ? `${score.toFixed(1)} / 4` : getScoreText(t, "score_not_available", "N/A");
}

/**
 * Formats the overall composite score using the localized `{score}` template.
 */
export function formatOverallScore(score: number | null, t?: Translation) {
  if (typeof score !== "number") return getScoreText(t, "score_not_available", "N/A");
  return getScoreText(t, "score_out_of_4", "{score} out of 4").replaceAll("{score}", score.toFixed(1));
}

/**
 * Splits the localized overall-score template so the UI can style the numeric
 * score separately from surrounding words.
 */
export function formatOverallScoreTokens(score: number | null, t?: Translation): OverallScoreToken[] {
  if (typeof score !== "number") return [{ text: getScoreText(t, "score_not_available", "N/A"), isScore: true }];

  const scoreText = score.toFixed(1);
  const template = getScoreText(t, "score_out_of_4", "{score} out of 4");
  const scorePlaceholder = "{score}";
  const tokens: OverallScoreToken[] = [];
  let remaining = template;

  while (remaining.includes(scorePlaceholder)) {
    const placeholderIndex = remaining.indexOf(scorePlaceholder);
    const prefix = remaining.slice(0, placeholderIndex);
    if (prefix) tokens.push({ text: prefix, isScore: false });
    tokens.push({ text: scoreText, isScore: true });
    remaining = remaining.slice(placeholderIndex + scorePlaceholder.length);
  }

  if (remaining) tokens.push({ text: remaining, isScore: false });
  return tokens.length ? tokens : [{ text: formatOverallScore(score, t), isScore: true }];
}

/**
 * Formats only the numeric score value.
 */
export function formatScoreValue(score: number | null, t?: Translation) {
  return typeof score === "number" ? score.toFixed(1) : getScoreText(t, "score_not_available", "N/A");
}

/**
 * Converts the 0-4 score scale to a percentage for progress-track width.
 */
export function scorePercent(score: number | null) {
  return typeof score === "number" ? Math.min(100, Math.max(0, (score / 4) * 100)) : 0;
}

/**
 * Converts the overall score into a localized risk label.
 */
export function describeRisk(score: number | null, t?: Translation) {
  if (score === null) return getScoreText(t, "score_risk_not_enough", "Not enough data");
  if (score < 1.5) return getScoreText(t, "score_risk_low", "Low risk");
  if (score < 2.4) return getScoreText(t, "score_risk_possible", "Possible risk");
  if (score < 3.5) return getScoreText(t, "score_risk_likely", "Likely risk");
  return getScoreText(t, "score_risk_known", "Known risk");
}

/**
 * Converts a category score into a localized plain-language interpretation.
 */
export function describeFactorRisk(score: number | null, factorSubject: string, t?: Translation) {
  if (score === null) return interpolateScoreText(t, "score_factor_not_enough", "Not enough data to interpret {factor}.", factorSubject);
  if (score < 1.5) return interpolateScoreText(t, "score_factor_low", "Currently low risk associated with {factor}.", factorSubject);
  if (score < 2.4) return interpolateScoreText(t, "score_factor_possible", "Possible risk of discomfort from {factor}.", factorSubject);
  if (score < 3.5) return interpolateScoreText(t, "score_factor_likely", "Likely risk of discomfort from {factor}.", factorSubject);
  return getScoreText(t, "score_factor_known", "Known risk of pain and/or injury.");
}

/**
 * Returns the localized psychosocial modifier note when the modifier changed
 * the final composite score.
 */
export function getPsychosocialInfluenceMessage(result: ScoreResult, t?: Translation) {
  if (!result.psychosocial_modifier.influenced_score) return null;
  return getScoreText(t, "score_psychosocial_note", "Psychosocial factors negatively influenced the overall MSI risk score ({multiplier}).").replaceAll(
    "{multiplier}",
    formatMultiplier(result.psychosocial_modifier.multiplier)
  );
}

/**
 * Returns localized factor labels and risk-subject phrases in score/report order.
 */
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
