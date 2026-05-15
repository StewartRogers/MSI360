import test from "node:test";
import assert from "node:assert/strict";
import { questions } from "../../src/data/catalog";
import {
  buildInterpretTextPrompt,
  buildPreAnswerPrompt,
  buildReportAnalysisPrompt,
  filterAllowedAddTags,
  interpretTextAnswer,
  preAnswerQuestions,
  validatePreAnswers,
  validateReportAnalysisOutput
} from "../../src/logic/ai";

test("interpretTextAnswer uses the local fallback and returns allowed routing tags when Gemini is not configured", async () => {
  const question = questions.find((item) => item.question_id === "question-3");
  assert.ok(question);

  const output = await interpretTextAnswer(question, "I repeatedly lift heavy boxes and use a drill.");

  assert.equal(output.provider, "client-keyword-fallback");
  assert.ok(output.add_tags.includes("manual_handling"));
  assert.ok(output.add_tags.includes("lifting_lowering"));
  assert.ok(output.add_tags.includes("carrying"));
  assert.ok(output.add_tags.includes("heavy_loads"));
  assert.ok(output.add_tags.includes("tool_use"));
  assert.ok(output.add_tags.includes("repetitive_movements"));
  assert.ok(output.missing_details.includes("Approximate object weight"));
  assert.ok(output.missing_details.includes("Frequency or duration"));
});

test("equivalent English and translated task descriptions return the same routing tags", async () => {
  const question = getQuestion("question-3");
  const english = await interpretTextAnswer(question, "I repeatedly lift heavy boxes and use a drill.");
  const spanish = await interpretTextAnswer(question, "Levanto repetidamente cajas pesadas y uso un taladro.");

  assert.deepEqual(sortTags(spanish.add_tags), sortTags(english.add_tags));
});

test("translated task descriptions with Spanish units and frequency do not request missing details", async () => {
  const question = getQuestion("question-3");
  const output = await interpretTextAnswer(question, "Levanto repetidamente cajas pesadas de 20 kilos cada hora y uso un taladro.");

  assert.ok(output.add_tags.includes("lifting_lowering"));
  assert.ok(output.add_tags.includes("repetitive_movements"));
  assert.equal(output.missing_details.includes("Approximate object weight"), false);
  assert.equal(output.missing_details.includes("Frequency or duration"), false);
});

test("buildInterpretTextPrompt instructs Gemini to handle multilingual text and canonical tags", () => {
  const question = getQuestion("question-3");
  const prompt = buildInterpretTextPrompt(question, "Levanto cajas pesadas todos los dias.");

  assert.ok(/If the worker response is in English, interpret it directly/i.test(prompt));
  assert.ok(/preserve concrete routing clues/i.test(prompt));
  assert.ok(/not English or mixes languages/i.test(prompt));
  assert.ok(/apply the same tag-selection behavior used for English responses/i.test(prompt));
  assert.ok(/Use only tags listed in allowed_add_tags/i.test(prompt));
  assert.ok(/Return exact tag IDs from allowed_add_tags/i.test(prompt));
  assert.ok(/allowed_add_tags:/.test(prompt));
  assert.ok(/manual_handling/.test(prompt));
});

test("buildPreAnswerPrompt instructs Gemini to handle multilingual text and canonical answer ids", () => {
  const question = getQuestion("question-6");
  const prompt = buildPreAnswerPrompt([question], "Sentado en un escritorio todo el dia.");

  assert.ok(/may be written in any language/i.test(prompt));
  assert.ok(/candidate question labels and option labels are provided in English/i.test(prompt));
  assert.ok(/exact canonical question_id, group ids, and option ids/i.test(prompt));
  assert.ok(/Do not invent, translate, localize, rename, or paraphrase question IDs/i.test(prompt));
  assert.ok(/Evidence must be an exact phrase from the original worker response/i.test(prompt));
  assert.ok(/mostly_sit/.test(prompt));
});

test("buildReportAnalysisPrompt limits Gemini analysis to first four questions and required sources", () => {
  const prompt = buildReportAnalysisPrompt(
    {
      "question-1": { type: "multi_choice", value: "worker" },
      "question-2": { type: "multi_choice", value: "less_than_year" },
      "question-3": { type: "text", value: "I lift boxes at a low shelf all day." },
      "question-4": { type: "multi_choice", value: "under_5_4" },
      "question-17": { type: "multi_choice", value: "more_than_18_lb" }
    },
    {
      "question-3": {
        normalized_answer_en: "I lift boxes at a low shelf all day.",
        add_tags: ["manual_handling"],
        missing_details: [],
        confidence: 0.9,
        notes: "test",
        provider: "test"
      }
    }
  );

  assert.ok(/Use only the onboarding_context JSON/i.test(prompt));
  assert.ok(/question-1, question-2, question-3, and question-4/i.test(prompt));
  assert.ok(/Do not mention category scores/i.test(prompt));
  assert.ok(/Created by AI/i.test(prompt) === false);
  assert.ok(/Institute for Work & Health/i.test(prompt));
  assert.ok(/WorkSafeBC OHS Regulation Part 4/i.test(prompt));
  assert.ok(/height_far_from_average":true/.test(prompt));
  assert.ok(!/question-17/.test(prompt));
});

test("validateReportAnalysisOutput accepts a clean paragraph and rejects invalid output", () => {
  const output = validateReportAnalysisOutput({ paragraph: "  Review the task context and training needs.  " });

  assert.ok(output);
  assert.equal(output.paragraph, "Review the task context and training needs.");
  assert.equal(output.provider, "gemini");
  assert.equal(validateReportAnalysisOutput({ paragraph: "" }), null);
  assert.equal(validateReportAnalysisOutput({ message: "missing paragraph" }), null);
});

test("filterAllowedAddTags removes unknown or translated tags and keeps canonical tags", () => {
  const question = getQuestion("question-3");
  const output = filterAllowedAddTags(question, ["manual_handling", "levantamiento", "tool_use", "unknown_tag"]);

  assert.deepEqual(output, ["manual_handling", "tool_use"]);
});

test("validatePreAnswers accepts high-confidence answers grounded in the worker text", () => {
  const question = getQuestion("question-6");
  const output = validatePreAnswers(
    {
      auto_answers: [
        {
          question_id: "question-6",
          value: "mostly_sit",
          confidence: 0.94,
          evidence: "Sitting at a desk",
          notes: "Worker explicitly describes sitting at a desk."
        }
      ]
    },
    [question],
    "Sitting at a desk, programming all day",
    {}
  );

  assert.equal(output.length, 1);
  assert.equal(output[0].question_id, "question-6");
  assert.equal(output[0].value, "mostly_sit");
});

test("validatePreAnswers accepts multilingual evidence when answer values are canonical ids", () => {
  const question = getQuestion("question-6");
  const output = validatePreAnswers(
    {
      auto_answers: [
        {
          question_id: "question-6",
          value: "mostly_sit",
          confidence: 0.95,
          evidence: "Sentado en un escritorio",
          notes: "Worker explicitly describes sitting at a desk."
        }
      ]
    },
    [question],
    "Sentado en un escritorio, programando todo el dia.",
    {}
  );

  assert.equal(output.length, 1);
  assert.equal(output[0].question_id, "question-6");
  assert.equal(output[0].value, "mostly_sit");
});

test("validatePreAnswers rejects low confidence, unknown ids, invalid values, and overwritten answers", () => {
  const question = getQuestion("question-6");
  const output = validatePreAnswers(
    {
      auto_answers: [
        { question_id: "question-6", value: "mostly_sit", confidence: 0.89, evidence: "Sitting at a desk" },
        { question_id: "question-999", value: "mostly_sit", confidence: 0.99, evidence: "Sitting at a desk" },
        { question_id: "question-6", value: "invalid_option", confidence: 0.99, evidence: "Sitting at a desk" },
        { question_id: "question-6", value: "mostly_sit", confidence: 0.99, evidence: "Sitting at a desk" }
      ]
    },
    [question],
    "Sitting at a desk, programming all day",
    { "question-6": { type: "multi_choice", value: "sit_and_stand" } }
  );

  assert.deepEqual(output, []);
});

test("validatePreAnswers rejects ungrounded evidence", () => {
  const bodyAsToolQuestion = getQuestion("question-14");
  const output = validatePreAnswers(
    {
      auto_answers: [
        { question_id: "question-14", value: "less_than_one_hour", confidence: 0.99, evidence: "uses their palm" }
      ]
    },
    [bodyAsToolQuestion],
    "The worker is using a drill for cabinet installation.",
    {}
  );

  assert.deepEqual(output, []);
});

test("validatePreAnswers rejects translated option labels instead of canonical option ids", () => {
  const question = getQuestion("question-6");
  const output = validatePreAnswers(
    {
      auto_answers: [{ question_id: "question-6", value: "mayormente sentado", confidence: 0.99, evidence: "Sentado en un escritorio" }]
    },
    [question],
    "Sentado en un escritorio, programando todo el dia.",
    {}
  );

  assert.deepEqual(output, []);
});

test("validatePreAnswers rejects incomplete grouped answers, invalid group ids, and exclusive conflicts", () => {
  const postureQuestion = getQuestion("question-20");
  const gripQuestion = getQuestion("question-13");
  const output = validatePreAnswers(
    {
      auto_answers: [
        { question_id: "question-20", value: { forward_backward: "some" }, confidence: 0.99, evidence: "leaning forward" },
        { question_id: "question-20", value: { forward_backward: "some", sideways: "sometimes" }, confidence: 0.99, evidence: "leaning forward" },
        { question_id: "question-13", value: ["none", "slippery"], confidence: 0.99, evidence: "no slippery tools" }
      ]
    },
    [postureQuestion, gripQuestion],
    "The work involves leaning forward with no slippery tools.",
    {}
  );

  assert.deepEqual(output, []);
});

test("validatePreAnswers accepts symptom answers with canonical ids and grounded evidence", () => {
  const symptomQuestion = getQuestion("question-9");
  const output = validatePreAnswers(
    {
      auto_answers: [{ question_id: "question-9", value: "yes", confidence: 0.99, evidence: "dolor relacionado con el trabajo" }]
    },
    [symptomQuestion],
    "Tuve dolor relacionado con el trabajo durante el turno de ayer.",
    {}
  );

  assert.equal(output.length, 1);
  assert.equal(output[0].value, "yes");
});

test("preAnswerQuestions returns no hidden answers when Gemini is not configured", async () => {
  const question = getQuestion("question-6");
  const output = await preAnswerQuestions([question], "Sitting at a desk, programming all day", {});

  assert.equal(output.provider, "client-no-preanswer");
  assert.deepEqual(output.auto_answers, []);
});

function getQuestion(questionId: string) {
  const question = questions.find((item) => item.question_id === questionId);
  assert.ok(question);
  return question;
}

function sortTags(tags: string[]) {
  return [...tags].sort((a, b) => a.localeCompare(b));
}
