import test from "node:test";
import assert from "node:assert/strict";
import { questions } from "../../src/data/catalog";
import { interpretTextAnswer, preAnswerQuestions, validatePreAnswers } from "../../src/logic/ai";

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

test("validatePreAnswers rejects ungrounded evidence and unsupported negative inference", () => {
  const bodyAsToolQuestion = getQuestion("question-14");
  const output = validatePreAnswers(
    {
      auto_answers: [
        { question_id: "question-14", value: "no", confidence: 0.99, evidence: "using a drill" },
        { question_id: "question-14", value: "less_than_one_hour", confidence: 0.99, evidence: "uses their palm" }
      ]
    },
    [bodyAsToolQuestion],
    "The worker is using a drill for cabinet installation.",
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

test("validatePreAnswers rejects symptom answers without explicit symptom and time context", () => {
  const symptomQuestion = getQuestion("question-9");
  const output = validatePreAnswers(
    {
      auto_answers: [{ question_id: "question-9", value: "yes", confidence: 0.99, evidence: "work-related pain" }]
    },
    [symptomQuestion],
    "The task may involve work-related pain if the workstation is poor.",
    {}
  );

  assert.deepEqual(output, []);
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
