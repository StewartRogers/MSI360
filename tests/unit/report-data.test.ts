import test from "node:test";
import assert from "node:assert/strict";
import { buildReportData, getRiskBearingSelectionsMissingGuidance, reportCategoryOrder } from "../../src/report/reportData";
import { scoreAssessment } from "../../src/logic/scoring";
import type { AiOutputs, Answers } from "../../src/types";

test("report data always returns the five MSI categories in order with guidance coverage", () => {
  const report = buildReportData({}, {}, scoreAssessment({}), { now: new Date("2026-05-02T12:00:00Z") });
  const expectedOrder = ["contact_stress", "force", "awkward_posture", "repetition", "environmental"];

  assert.deepEqual(reportCategoryOrder, expectedOrder);
  assert.deepEqual(report.categories.map((category) => category.key), expectedOrder);
  assert.equal(new Set(report.categories.map((category) => category.key)).size, 5);
  assert.deepEqual(getRiskBearingSelectionsMissingGuidance(), []);
});

test("report data maps task, worker height, symptoms, and job-specific notes", () => {
  const answers: Answers = {
    "question-3": { type: "text", value: "Office work" },
    "question-4": { type: "multi_choice", value: "5_10_to_6_2" },
    "question-9": { type: "multi_choice", value: "yes" },
    "question-10": {
      type: "grouped_select_all",
      value: {
        neck: ["one_side"],
        lower_back: ["both_sides", "lasted_two_days"]
      }
    }
  };
  const aiOutputs: AiOutputs = {
    "question-3": {
      normalized_answer_en: "Office work",
      add_tags: ["office_computer"],
      missing_details: [],
      confidence: 0.9,
      notes: "test",
      provider: "test"
    }
  };

  const report = buildReportData(answers, aiOutputs, scoreAssessment(answers), { now: new Date("2026-05-02T12:00:00Z") });

  assert.equal(report.generatedDate, "2 May 2026");
  assert.equal(report.taskSummary, "Office work");
  assert.equal(report.workerHeight, "5'10\" - 6'2\" (1.76 m - 1.88 m)");
  assert.equal(report.symptoms.reported, true);
  assert.deepEqual(report.symptoms.oneSide, ["Neck"]);
  assert.deepEqual(report.symptoms.bothSides, ["Lower back"]);
  assert.deepEqual(report.symptoms.lastedTwoDays, ["Lower back"]);
  assert.ok(report.jobSpecificNote.body.includes("office"));
});

test("report data computes category priority counts from selected answer scores", () => {
  const answers: Answers = {
    "question-11": { type: "multi_choice", value: "30_min_to_1_hour" },
    "question-12": { type: "multi_choice", value: "30_min_to_1_hour" },
    "question-14": { type: "multi_choice", value: "more_than_one_hour" }
  };

  const report = buildReportData(answers, {}, scoreAssessment(answers));
  const contactStress = report.categories.find((category) => category.key === "contact_stress");

  assert.ok(contactStress);
  assert.equal(contactStress.hazardCount, 3);
  assert.deepEqual(contactStress.priorityCounts, { high: 1, medium: 1, review: 1 });
  assert.equal(contactStress.reviewPriority, "high");
  assert.equal(report.priorityTotals.high, 1);
  assert.equal(report.priorityTotals.medium, 1);
  assert.equal(report.priorityTotals.review, 1);
});

test("report data uses answer-driven actions and clean fallback text", () => {
  const answers: Answers = {
    "question-17": { type: "multi_choice", value: "more_than_18_lb" }
  };

  const report = buildReportData(answers, {}, scoreAssessment(answers));
  const force = report.categories.find((category) => category.key === "force");
  const repetition = report.categories.find((category) => category.key === "repetition");

  assert.ok(force);
  assert.ok(repetition);
  assert.equal(force.hazardCount, 1);
  assert.ok(force.explanation.includes("heavier tools or objects"));
  assert.ok(force.suggestedActions.includes("Reduce object weight or split loads where possible."));
  assert.equal(repetition.hazardCount, 0);
  assert.equal(repetition.scoreDisplay, "0");
  assert.ok(repetition.suggestedActions.includes("Keep monitoring this category if the task changes."));
});
