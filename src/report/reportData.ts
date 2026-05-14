import { questionIds } from "../app/questionAssets";
import { questions } from "../data/catalog";
import { translations } from "../data/translations";
import { recomputeTags } from "../logic/routing";
import { describeFactorRisk, formatOverallScore, getPsychosocialInfluenceMessage } from "../logic/scorePresentation";
import type { AiOutputs, Answer, Answers, Option, Question, RiskFactor, ScoreResult } from "../types";
import { categoryIconByFactor } from "./reportAssets";
import { reportGuidanceBySelection, reportGuidanceKey, type ReportGuidance } from "./reportGuidance";

export type ReviewPriority = "high" | "medium" | "review" | "low";

export interface ReportRiskDriver {
  questionId: string;
  questionLabel: string;
  groupLabel?: string;
  optionId: string;
  optionLabel: string;
  factor: RiskFactor;
  score: number;
  priority: Exclude<ReviewPriority, "low">;
  guidance: ReportGuidance;
}

export interface ReportCategorySummary {
  key: RiskFactor;
  label: string;
  description: string;
  icon: string;
  score: number | null;
  scoreDisplay: string;
  severity: string;
  riskSubject: string;
  currentStatus: string;
  reviewPriority: ReviewPriority;
  priorityLabel: string;
  applicableQuestions: number;
  hazardCount: number;
  priorityCounts: {
    high: number;
    medium: number;
    review: number;
  };
  drivers: ReportRiskDriver[];
  explanation: string;
  tips: string[];
  suggestedActions: string[];
}

export interface ReportBodySymptoms {
  reported: boolean;
  oneSide: ReportBodySymptomArea[];
  bothSides: ReportBodySymptomArea[];
  lastedTwoDays: ReportBodySymptomArea[];
}

export interface ReportBodySymptomArea {
  id: string;
  label: string;
}

export interface ReportAnswerRecord {
  questionId: string;
  question: string;
  answers: string[];
}

export interface ReportData {
  generatedAt: Date;
  generatedDate: string;
  taskSummary: string;
  workerHeight: string;
  activeTags: string[];
  jobSpecificNote: {
    title: string;
    body: string;
    linkLabel?: string;
  };
  symptoms: ReportBodySymptoms;
  categories: ReportCategorySummary[];
  totalHazards: number;
  priorityTotals: {
    high: number;
    medium: number;
    review: number;
  };
  overallScore: {
    value: number | null;
    display: string;
    psychosocialMessage: string | null;
  };
  answerRecords: ReportAnswerRecord[];
}

interface BuildReportDataOptions {
  now?: Date;
}

const categoryMeta: Record<RiskFactor, { label: string; description: string; riskSubject: string }> = {
  contact_stress: {
    label: "MSI Risk Score - Contact stress",
    description: "Pressure from hard or sharp surfaces against the body.",
    riskSubject: "contact stress"
  },
  force: {
    label: "MSI Risk Score - Force",
    description: "Muscular effort needed to push, pull, lift, carry, grip, or use tools.",
    riskSubject: "force"
  },
  awkward_posture: {
    label: "MSI Risk Score - Awkward posture",
    description: "Body positions that are bent, twisted, extended, or not neutral.",
    riskSubject: "awkward postures"
  },
  repetition: {
    label: "MSI Risk Score - Repetition",
    description: "Repeated movements performed frequently over time.",
    riskSubject: "repetition"
  },
  environmental: {
    label: "MSI Risk Score - Environmental factors",
    description: "Conditions such as lighting, noise, temperature, or work pace.",
    riskSubject: "environmental factors"
  }
};

const lowRiskActions = [
  "Keep monitoring this category if the task changes.",
  "Review any worker-reported discomfort even when the scored hazard is low.",
  "Maintain controls that are already helping reduce MSI risk."
];

export const reportCategoryOrder: RiskFactor[] = ["contact_stress", "force", "awkward_posture", "repetition", "environmental"];

export function buildReportData(answers: Answers, aiOutputs: AiOutputs, scoreResult: ScoreResult, options: BuildReportDataOptions = {}): ReportData {
  const generatedAt = options.now || new Date();
  const activeTags = recomputeTags(answers, aiOutputs);
  const drivers = getRiskDrivers(answers);
  const categories = reportCategoryOrder.map((factor) => buildCategorySummary(factor, scoreResult, drivers.filter((driver) => driver.factor === factor)));
  const priorityTotals = categories.reduce(
    (totals, category) => ({
      high: totals.high + category.priorityCounts.high,
      medium: totals.medium + category.priorityCounts.medium,
      review: totals.review + category.priorityCounts.review
    }),
    { high: 0, medium: 0, review: 0 }
  );

  return {
    generatedAt,
    generatedDate: formatReportDate(generatedAt),
    taskSummary: getTaskSummary(answers),
    workerHeight: getWorkerHeight(answers),
    activeTags,
    jobSpecificNote: getJobSpecificNote(activeTags),
    symptoms: getBodySymptoms(answers),
    categories,
    totalHazards: categories.reduce((sum, category) => sum + category.hazardCount, 0),
    priorityTotals,
    overallScore: {
      value: scoreResult.composite_score,
      display: formatOverallScore(scoreResult.composite_score),
      psychosocialMessage: getPsychosocialInfluenceMessage(scoreResult)
    },
    answerRecords: getAnswerRecords(answers, aiOutputs)
  };
}

export function getRiskDrivers(answers: Answers): ReportRiskDriver[] {
  return questions.flatMap((question) => {
    const answer = answers[question.question_id];
    if (!answer) return [];
    return getSelectedReportOptions(question, answer).flatMap((selection) => {
      return Object.entries(selection.option.risk_scores).flatMap(([factor, score]) => {
        if (typeof score !== "number" || score < 2) return [];
        const guidance = reportGuidanceBySelection[reportGuidanceKey(question.question_id, selection.option.option_id, selection.groupId)];
        if (!guidance) return [];
        return [
          {
            questionId: question.question_id,
            questionLabel: getQuestionLabel(question),
            groupLabel: selection.groupId ? getGroupLabel(question.question_id, selection.groupId) : undefined,
            optionId: selection.option.option_id,
            optionLabel: getOptionLabel(question.question_id, selection.option.option_id, selection.groupId),
            factor: factor as RiskFactor,
            score,
            priority: getDriverPriority(score),
            guidance
          }
        ];
      });
    });
  });
}

function buildCategorySummary(factor: RiskFactor, scoreResult: ScoreResult, drivers: ReportRiskDriver[]): ReportCategorySummary {
  const meta = categoryMeta[factor];
  const factorScore = scoreResult.factors[factor];
  const priorityCounts = drivers.reduce(
    (counts, driver) => ({ ...counts, [driver.priority]: counts[driver.priority] + 1 }),
    { high: 0, medium: 0, review: 0 }
  );
  const reviewPriority = getCategoryPriority(priorityCounts);
  const hazardCount = drivers.length;
  const explanationParts = unique(
    drivers.length
      ? drivers.map((driver) => driver.guidance.concern)
      : [`No scored MSI hazard was identified for ${meta.riskSubject} based on the worker's recorded answers.`]
  );

  return {
    key: factor,
    label: meta.label,
    description: meta.description,
    icon: categoryIconByFactor[factor],
    score: factorScore.score,
    scoreDisplay: formatReportScore(factorScore.score),
    severity: factorScore.score === null ? "No scored hazard identified" : describeFactorRisk(factorScore.score, meta.riskSubject),
    riskSubject: meta.riskSubject,
    currentStatus: hazardCount ? `${hazardCount} scored ${pluralize("hazard", hazardCount)} identified` : "No scored hazard identified",
    reviewPriority,
    priorityLabel: formatPriorityLabel(reviewPriority),
    applicableQuestions: factorScore.applicable_questions,
    hazardCount,
    priorityCounts,
    drivers,
    explanation: explanationParts.join(" "),
    tips: unique(drivers.map((driver) => driver.guidance.tip).filter((tip): tip is string => Boolean(tip))),
    suggestedActions: unique(drivers.length ? drivers.flatMap((driver) => driver.guidance.actions) : lowRiskActions)
  };
}

function getBodySymptoms(answers: Answers): ReportBodySymptoms {
  const reported = answers[questionIds.bodyDiscomfortAreas] || answers["question-9"]?.value === "yes";
  const symptoms: ReportBodySymptoms = {
    reported: Boolean(reported),
    oneSide: [],
    bothSides: [],
    lastedTwoDays: []
  };
  const answer = answers[questionIds.bodyDiscomfortAreas];
  if (!answer || !answer.value || typeof answer.value !== "object" || Array.isArray(answer.value)) return symptoms;

  Object.entries(answer.value).forEach(([groupId, value]) => {
    const selectedIds = Array.isArray(value) ? value : [value];
    const bodyPart = {
      id: groupId,
      label: cleanBodyPartLabel(getGroupLabel(questionIds.bodyDiscomfortAreas, groupId))
    };
    if (selectedIds.includes("one_side")) symptoms.oneSide.push(bodyPart);
    if (selectedIds.includes("both_sides")) symptoms.bothSides.push(bodyPart);
    if (selectedIds.includes("lasted_two_days")) symptoms.lastedTwoDays.push(bodyPart);
  });

  return symptoms;
}

function getAnswerRecords(answers: Answers, aiOutputs: AiOutputs): ReportAnswerRecord[] {
  return questions.flatMap((question) => {
    const answer = answers[question.question_id];
    if (!answer) return [];
    return [
      {
        questionId: question.question_id,
        question: getQuestionLabel(question),
        answers: formatAnswer(question, answer.value, aiOutputs[question.question_id])
      }
    ];
  });
}

function getSelectedReportOptions(question: Question, answer: Answer): Array<{ option: Option; groupId?: string }> {
  const value = answer.value;
  if (question.options) {
    const selectedIds = Array.isArray(value) ? value : typeof value === "string" ? [value] : [];
    return question.options.filter((option) => selectedIds.includes(option.option_id)).map((option) => ({ option }));
  }

  if (!value || typeof value !== "object" || Array.isArray(value)) return [];

  return (question.groups || []).flatMap((group) => {
    const groupValue = value[group.group_id];
    const selectedIds = Array.isArray(groupValue) ? groupValue : typeof groupValue === "string" ? [groupValue] : [];
    return group.options.filter((option) => selectedIds.includes(option.option_id)).map((option) => ({ option, groupId: group.group_id }));
  });
}

function formatAnswer(question: Question, value: unknown, aiOutput = undefined as AiOutputs[string] | undefined): string[] {
  if (question.type === "text") {
    const lines = [`Answer: ${String(value || "")}`];
    if (aiOutput?.normalized_answer_en && aiOutput.normalized_answer_en !== value) lines.push(`English interpretation: ${aiOutput.normalized_answer_en}`);
    return lines;
  }

  if (question.options) {
    const values = Array.isArray(value) ? value : typeof value === "string" ? [value] : [];
    return [`Answer: ${values.map((optionId) => getOptionLabel(question.question_id, optionId)).join("; ")}`];
  }

  if (!value || typeof value !== "object" || Array.isArray(value)) return ["Answer: No answer"];

  return Object.entries(value as Record<string, string | string[]>).map(([groupId, groupValue]) => {
    const values = Array.isArray(groupValue) ? groupValue : [groupValue];
    return `${getGroupLabel(question.question_id, groupId)}: ${values.map((optionId) => getOptionLabel(question.question_id, optionId, groupId)).join("; ")}`;
  });
}

function getTaskSummary(answers: Answers) {
  const value = answers[questionIds.taskDescription]?.value;
  return typeof value === "string" && value.trim() ? value.trim() : "Work task";
}

function getWorkerHeight(answers: Answers) {
  const value = answers[questionIds.height]?.value;
  return typeof value === "string" ? getOptionLabel(questionIds.height, value) : "Not provided";
}

function getJobSpecificNote(activeTags: string[]): ReportData["jobSpecificNote"] {
  const tags = new Set(activeTags);
  if (tags.has("office_computer") || tags.has("desk_based") || tags.has("seated_work") || tags.has("mouse_intensive")) {
    return {
      title: "Job-specific note",
      body: "The worker reported office or computer-related work. If computer work is part of this job, the workstation setup should be reviewed to support neutral postures and reduce unnecessary strain.",
      linkLabel: "Computer workstation setup guidance"
    };
  }
  if (tags.has("manual_handling") || tags.has("lifting_lowering") || tags.has("carrying") || tags.has("pushing_pulling")) {
    return {
      title: "Job-specific note",
      body: "The worker reported manual handling or material movement. Review load weight, reach distance, travel surfaces, and whether mechanical aids are available at the point of work."
    };
  }
  if (tags.has("tool_use") || tags.has("vibrating_tools")) {
    return {
      title: "Job-specific note",
      body: "The worker reported tool use. Review tool weight, handle fit, contact pressure, start-up force, vibration, and whether the tool lets the worker keep neutral postures."
    };
  }
  if (tags.has("outdoor_work") || tags.has("cold_environment") || tags.has("noise_exposure") || tags.has("glare_exposure")) {
    return {
      title: "Job-specific note",
      body: "The worker reported environmental exposure. Review lighting, glare, noise, temperature, surfaces, and recovery opportunities alongside the physical risk factors."
    };
  }
  return {
    title: "Job-specific note",
    body: "Review the category-specific pages with the worker and focus first on the highest-priority risks identified in this report."
  };
}

function getDriverPriority(score: number): Exclude<ReviewPriority, "low"> {
  if (score >= 4) return "high";
  if (score >= 3) return "medium";
  return "review";
}

function getCategoryPriority(counts: ReportCategorySummary["priorityCounts"]): ReviewPriority {
  if (counts.high) return "high";
  if (counts.medium) return "medium";
  if (counts.review) return "review";
  return "low";
}

function formatPriorityLabel(priority: ReviewPriority) {
  if (priority === "high") return "High";
  if (priority === "medium") return "Medium";
  if (priority === "review") return "Review";
  return "Low";
}

function formatReportDate(date: Date) {
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function formatReportScore(score: number | null) {
  return typeof score === "number" ? score.toFixed(1).replace(/\.0$/, "") : "0";
}

function getQuestionLabel(question: Question) {
  return translations.en.questions[question.question_id]?.label || question.question_id;
}

function getGroupLabel(questionId: string, groupId: string) {
  return translations.en.questions[questionId]?.groups?.[groupId]?.label || groupId;
}

function getOptionLabel(questionId: string, optionId: string, groupId?: string) {
  if (groupId) return translations.en.questions[questionId]?.groups?.[groupId]?.options[optionId] || optionId;
  return translations.en.questions[questionId]?.options?.[optionId] || optionId;
}

function cleanBodyPartLabel(label: string) {
  return label.replace(/^\d+\.\s*/, "");
}

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function pluralize(word: string, count: number) {
  return count === 1 ? word : `${word}s`;
}

export function getRiskBearingSelectionsMissingGuidance() {
  return questions.flatMap((question) => {
    const optionEntries = question.options
      ? question.options.map((option) => ({ option }))
      : (question.groups || []).flatMap((group) => group.options.map((option) => ({ option, groupId: group.group_id })));

    return optionEntries.flatMap(({ option, groupId }: { option: Option; groupId?: string }) => {
      const hasRiskDriver = Object.values(option.risk_scores).some((score) => typeof score === "number" && score >= 2);
      const key = reportGuidanceKey(question.question_id, option.option_id, groupId);
      return hasRiskDriver && !reportGuidanceBySelection[key] ? [key] : [];
    });
  });
}
