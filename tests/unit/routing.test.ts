import test from "node:test";
import assert from "node:assert/strict";
import { questions } from "../../src/data/catalog";
import { getSelectedOptions, getVisibleQuestions, recomputeTags } from "../../src/logic/routing";
import type { AiOutputs, Answers } from "../../src/types";

test("base routing shows always-visible questions and hides conditional follow-ups", () => {
  const visibleIds = getVisibleQuestions(["start"]).map((question) => question.question_id);

  assert.ok(visibleIds.includes("question-1"));
  assert.ok(visibleIds.includes("question-3"));
  assert.ok(visibleIds.includes("question-9"));
  assert.ok(!visibleIds.includes("question-10"));
  assert.ok(!visibleIds.includes("question-17"));
});

test("recomputeTags combines selected option tags and allowed AI tags", () => {
  const answers: Answers = {
    "question-1": { type: "multi_choice", value: "supervisor" },
    "question-3": { type: "text", value: "I lift boxes and use a drill." }
  };
  const aiOutputs: AiOutputs = {
    "question-3": {
      normalized_answer_en: "I lift boxes and use a drill.",
      add_tags: ["manual_handling", "tool_use", "not_a_real_tag"],
      missing_details: [],
      confidence: 0.8,
      notes: "Test output",
      provider: "test"
    }
  };

  const tags = recomputeTags(answers, aiOutputs);

  assert.ok(tags.includes("start"));
  assert.ok(tags.includes("organizational_context"));
  assert.ok(tags.includes("manual_handling"));
  assert.ok(tags.includes("tool_use"));
  assert.ok(!tags.includes("not_a_real_tag"));
});

test("office computer AI tags preserve the full desk-work routing path", () => {
  const answers: Answers = {
    "question-3": { type: "text", value: "Sitting at a desk and writing code all day" }
  };
  const tags = recomputeTags(
    answers,
    createTaskAiOutputs(["seated_work", "static_postures", "office_computer", "mouse_intensive", "repetitive_movements"])
  );
  const visibleIds = getVisibleQuestions(tags).map((question) => question.question_id);

  assert.ok(tags.includes("office_computer"));
  assert.ok(tags.includes("seated_work"));
  assert.ok(tags.includes("static_postures"));
  assert.ok(tags.includes("mouse_intensive"));
  assert.ok(tags.includes("repetitive_movements"));
  assert.equal(visibleIds.length, 22);
  assert.ok(visibleIds.includes("question-7"));
  assert.ok(visibleIds.includes("question-11"));
  assert.ok(visibleIds.includes("question-23"));
  assert.ok(visibleIds.includes("question-37"));
  assert.ok(visibleIds.includes("question-38"));
  assert.ok(visibleIds.includes("question-39"));
});

test("manual-handling AI tags route lifting, carrying, force, and repetition follow-ups", () => {
  const tags = recomputeTags(
    {
      "question-3": { type: "text", value: "Lifting and carrying heavy boxes throughout the shift" }
    },
    createTaskAiOutputs(["manual_handling", "lifting_lowering", "carrying", "heavy_loads"])
  );
  const visibleIds = getVisibleQuestions(tags).map((question) => question.question_id);

  assert.ok(tags.includes("manual_handling"));
  assert.ok(tags.includes("lifting_lowering"));
  assert.ok(tags.includes("carrying"));
  assert.ok(tags.includes("heavy_loads"));
  assert.ok(visibleIds.includes("question-13"));
  assert.ok(visibleIds.includes("question-17"));
  assert.ok(visibleIds.includes("question-28"));
  assert.ok(visibleIds.includes("question-32"));
});

test("tool-use AI tags route grip, start-force, vibration, and posture follow-ups", () => {
  const tags = recomputeTags(
    {
      "question-3": { type: "text", value: "Using a vibrating powered hand tool with a power grip" }
    },
    createTaskAiOutputs(["tool_use", "vibrating_tools", "power_grip"])
  );
  const visibleIds = getVisibleQuestions(tags).map((question) => question.question_id);

  assert.ok(tags.includes("tool_use"));
  assert.ok(tags.includes("vibrating_tools"));
  assert.ok(tags.includes("power_grip"));
  assert.ok(visibleIds.includes("question-13"));
  assert.ok(visibleIds.includes("question-18"));
  assert.ok(visibleIds.includes("question-26"));
  assert.ok(visibleIds.includes("question-34"));
  assert.ok(visibleIds.includes("question-35"));
});

test("environment AI tags route noise, glare, and cold follow-ups", () => {
  const tags = recomputeTags(
    {
      "question-3": { type: "text", value: "Working outside in cold weather with glare and loud noise" }
    },
    createTaskAiOutputs(["outdoor_work", "cold_environment", "glare_exposure", "noise_exposure"])
  );
  const visibleIds = getVisibleQuestions(tags).map((question) => question.question_id);

  assert.ok(tags.includes("outdoor_work"));
  assert.ok(tags.includes("cold_environment"));
  assert.ok(tags.includes("glare_exposure"));
  assert.ok(tags.includes("noise_exposure"));
  assert.ok(visibleIds.includes("question-37"));
  assert.ok(visibleIds.includes("question-38"));
  assert.ok(visibleIds.includes("question-40"));
});

test("getSelectedOptions reads grouped question answers", () => {
  const question = questions.find((item) => item.question_id === "question-20");
  assert.ok(question);

  const selected = getSelectedOptions(question, {
    type: "grouped_multi_choice",
    value: { forward_backward: "some", sideways: "most" }
  });

  assert.equal(selected.length, 2);
  assert.deepEqual(
    selected.map((option) => option.risk_scores.awkward_posture),
    [2, 3]
  );
});

function createTaskAiOutputs(addTags: string[]): AiOutputs {
  return {
    "question-3": {
      normalized_answer_en: "Task description",
      add_tags: addTags,
      missing_details: [],
      confidence: 0.95,
      notes: "Test output",
      provider: "test"
    }
  };
}
