export type QuestionType = "text" | "multi_choice" | "select_all" | "grouped_multi_choice" | "grouped_select_all";

export type RiskFactor = "contact_stress" | "force" | "awkward_posture" | "repetition" | "environmental" | "symptoms";

export type RiskScores = Partial<Record<RiskFactor, number>>;

export interface Language {
  code: string;
  name: string;
  flag: string;
  ready: boolean;
}

export interface Option {
  option_id: string;
  risk_scores: RiskScores;
  add_tags?: string[];
  exclusive?: boolean;
}

export interface QuestionGroup {
  group_id: string;
  options: Option[];
}

export interface TextAiInstructions {
  purpose: string;
  prompt: string;
  allowed_add_tags: string[];
  expected_fields: string[];
  confidence_threshold: number;
}

export interface Question {
  question_id: string;
  section: string;
  display_condition_tags: string[];
  required: boolean;
  type: QuestionType;
  options?: Option[];
  groups?: QuestionGroup[];
  add_tags?: string[];
  ai_instructions?: TextAiInstructions;
}

export interface QuestionText {
  label: string;
  help_text?: string;
  options?: Record<string, string>;
  groups?: Record<string, { label: string; options: Record<string, string> }>;
}

export interface Translation {
  app: Record<string, string>;
  sections: Record<string, string>;
  questions: Record<string, QuestionText>;
}

export type AnswerValue = string | string[] | Record<string, string | string[]>;

export interface Answer {
  type: QuestionType;
  value: AnswerValue;
}

export type Answers = Record<string, Answer>;

export interface AiOutput {
  normalized_answer_en: string;
  add_tags: string[];
  missing_details: string[];
  confidence: number;
  notes: string;
  provider: string;
}

export type AiOutputs = Record<string, AiOutput>;

export interface FactorScore {
  score: number | null;
  applicable_questions: number;
  severity: string;
}

export interface ScoreResult {
  scoring_version: string;
  aggregation: string;
  factors: Record<RiskFactor, FactorScore>;
  grouped_scores: {
    physical: number | null;
    environmental: number | null;
    organizational: number | null;
  };
  composite_score: number | null;
  warnings: string[];
}
