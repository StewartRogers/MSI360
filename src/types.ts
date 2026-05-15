/**
 * Shared domain types for the MSI360 client prototype.
 *
 * This project is intentionally data-driven: question definitions, answer
 * values, AI outputs, scoring results, and report generation all communicate
 * through the contracts in this file. When a future team changes the survey
 * catalog, these types are the first place to check so routing, scoring,
 * translation, tests, and PDF output continue to agree on the same shape.
 */

/**
 * Supported survey input models.
 *
 * - `text`: free-text response, currently used for the task description.
 * - `multi_choice`: one option ID.
 * - `select_all`: one or more option IDs.
 * - `grouped_multi_choice`: one option ID per required group.
 * - `grouped_select_all`: one or more option IDs per selected group.
 */
export type QuestionType = "text" | "multi_choice" | "select_all" | "grouped_multi_choice" | "grouped_select_all";

/**
 * The five scored MSI risk categories rendered on the score screen and in the
 * PDF report. Symptoms and psychosocial factors are intentionally not separate
 * `RiskFactor` values in this prototype.
 */
export type RiskFactor = "contact_stress" | "force" | "awkward_posture" | "repetition" | "environmental";

/**
 * Optional score mapping attached to an answer option.
 *
 * Scores use the prototype's 1-4 scale. A missing factor means the option does
 * not contribute to that category.
 */
export type RiskScores = Partial<Record<RiskFactor, number>>;

/**
 * Language selector metadata.
 *
 * `code` must match a key in `src/data/translations/index.ts`. `flagCode` is
 * used by the current flag CDN URL, and `flag` is retained as a fallback glyph
 * if the remote image cannot load.
 */
export interface Language {
  code: string;
  name: string;
  flag: string;
  flagCode: string;
  ready: boolean;
}

/**
 * A selectable answer option from the survey catalog.
 *
 * `option_id` is the canonical value stored in answers, AI pre-answer payloads,
 * tests, and report records. Display labels live in translation files.
 */
export interface Option {
  option_id: string;
  risk_scores: RiskScores;
  /** Optional organizational/psychosocial score used only by the final modifier. */
  psychosocial_score?: number;
  /** Routing tags activated when this option is selected. */
  add_tags?: string[];
  /** Marks checkbox options such as "none" that cannot be combined with others. */
  exclusive?: boolean;
}

/**
 * A repeated prompt group inside grouped question types.
 *
 * Example: question 22 asks the same posture-frequency options for separate
 * body-position groups.
 */
export interface QuestionGroup {
  group_id: string;
  options: Option[];
}

/**
 * Prompt metadata for text questions that can be interpreted by Gemini.
 *
 * The client still validates any returned tag against `allowed_add_tags` and the
 * global tag taxonomy, so these instructions guide the model without trusting
 * model output blindly.
 */
export interface TextAiInstructions {
  purpose: string;
  prompt: string;
  allowed_add_tags: string[];
  expected_fields: string[];
  confidence_threshold: number;
}

/**
 * Structural definition for one survey question.
 *
 * This is the source of truth for routing, scoring, and answer validation.
 * Human-readable labels, help text, and option copy are stored separately in
 * `src/data/translations/*`.
 */
export interface Question {
  question_id: string;
  section: string;
  /**
   * Empty means always visible. Otherwise any matching active tag is enough to
   * show the question.
   */
  display_condition_tags: string[];
  required: boolean;
  type: QuestionType;
  options?: Option[];
  groups?: QuestionGroup[];
  /**
   * Question-level tags apply after the question is answered; option-level tags
   * apply only when that option is selected.
   */
  add_tags?: string[];
  ai_instructions?: TextAiInstructions;
}

/**
 * Localized question copy.
 *
 * The question/group/option IDs must mirror `Question` definitions exactly.
 * Missing localized fields fall back to English through `getQuestionText`.
 */
export interface QuestionText {
  label: string;
  help_text?: string;
  options?: Record<string, string>;
  groups?: Record<string, { label: string; options: Record<string, string> }>;
}

/**
 * Complete localized text bundle for one language.
 *
 * `app` contains shared UI strings, `sections` contains section headings, and
 * `questions` contains labels/options keyed by canonical question IDs.
 */
export interface Translation {
  app: Record<string, string>;
  sections: Record<string, string>;
  questions: Record<string, QuestionText>;
}

/**
 * Runtime answer value stored by question ID.
 *
 * Values intentionally store canonical option IDs, not translated labels, so a
 * response can be scored and reported consistently across languages.
 */
export type AnswerValue = string | string[] | Record<string, string | string[]>;

/**
 * One committed or draft answer.
 */
export interface Answer {
  type: QuestionType;
  value: AnswerValue;
}

/**
 * Answer map keyed by canonical `question_id`.
 */
export type Answers = Record<string, Answer>;

/**
 * Validated interpretation of a free-text answer.
 *
 * `provider` is used to distinguish Gemini, local keyword fallback, and tests.
 */
export interface AiOutput {
  normalized_answer_en: string;
  add_tags: string[];
  missing_details: string[];
  confidence: number;
  notes: string;
  provider: string;
}

/**
 * AI output map keyed by the text question that produced the interpretation.
 */
export type AiOutputs = Record<string, AiOutput>;

/**
 * Question payload sent to Gemini for optional pre-answering.
 *
 * Candidate labels are English for model context, while IDs remain canonical so
 * responses can be validated and stored without translation ambiguity.
 */
export interface AiPreAnswerCandidate {
  question_id: string;
  type: QuestionType;
  label: string;
  options?: Record<string, string>;
  groups?: Record<string, { label: string; options: Record<string, string> }>;
}

/**
 * One Gemini-suggested answer that passed validation.
 *
 * These answers may be hidden from the worker's assessment navigation, so the
 * validation path requires high confidence, canonical IDs, and source evidence.
 */
export interface AiPreAnswer {
  question_id: string;
  /** Must use canonical option/group IDs from `src/data/questions.ts`, not labels. */
  value: AnswerValue;
  confidence: number;
  evidence: string;
  notes: string;
  provider: string;
}

/**
 * Result of the optional pre-answer pass.
 */
export interface AiPreAnswerOutput {
  auto_answers: AiPreAnswer[];
  provider: string;
  notes: string;
}

/**
 * Optional Gemini paragraph rendered in the PDF overview.
 *
 * The paragraph is generated only from onboarding questions. Disclaimer and
 * source metadata are added later in report data construction.
 */
export interface AiReportAnalysis {
  paragraph: string;
  provider: string;
}

/**
 * Score for one MSI risk category.
 */
export interface FactorScore {
  score: number | null;
  applicable_questions: number;
  severity: string;
}

/**
 * Organizational/psychosocial adjustment applied to the final composite score.
 */
export interface PsychosocialModifier {
  score: number | null;
  applicable_questions: number;
  multiplier: number;
  influenced_score: boolean;
}

/**
 * Complete score object used by the score screen and PDF report.
 *
 * `base_composite_score` is the average of available category scores.
 * `composite_score` is the base score after the bounded psychosocial modifier.
 */
export interface ScoreResult {
  scoring_version: string;
  aggregation: string;
  factors: Record<RiskFactor, FactorScore>;
  grouped_scores: {
    physical: number | null;
    environmental: number | null;
    organizational: number | null;
  };
  base_composite_score: number | null;
  composite_score: number | null;
  psychosocial_modifier: PsychosocialModifier;
  warnings: string[];
}
