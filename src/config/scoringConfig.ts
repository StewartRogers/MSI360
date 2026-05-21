/**
 * Prototype scoring and reporting thresholds.
 *
 * These values are intentionally isolated from catalog answer mappings so the
 * team can tune the interpretation bands without editing scoring flow code.
 */
export const scoringVersion = "client-prototype-v2";
export const scoringAggregationDescription = "Max selected option score per question, averaged by factor; psychosocial modifier applied to the final composite score only";
export const scoreScaleMaximum = 4;
export const scoreRoundingFactor = 10;

export const scoreRiskThresholds = {
  possibleRisk: 1.5,
  likelyRisk: 2.4,
  knownRisk: 3.5
};

export const psychosocialMultiplierThresholds = {
  moderateInfluence: 1.5,
  highInfluence: 2.4
};

export const psychosocialMultipliers = {
  none: 1,
  moderate: 1.3,
  high: 1.6
};

export const reportRiskDriverThresholds = {
  review: 2,
  medium: 3,
  high: 4
};
