/**
 * External source links that the AI report-analysis prompt may cite and the PDF
 * may render as fixed references.
 *
 * Keep these as curated links rather than model-generated URLs so report source
 * text stays stable and reviewable.
 */
export const reportAnalysisReferenceLinks = {
  iwhNewWorkerRisk:
    "https://www.iwh.on.ca/plain-language-summaries/review-confirms-prevention-systems-message-about-injury-risks-and-new-workers",
  worksafeBcOhsRegulation:
    "https://www.worksafebc.com/en/law-policy/occupational-health-safety/searchable-ohs-regulation/ohs-regulation/part-04-general-conditions?utm_source=chatgpt.com"
} as const;
