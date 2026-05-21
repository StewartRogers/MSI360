/**
 * Unit coverage for Gemini prompt construction, fallback routing, and AI output
 * validation. These tests protect the safety boundary between model output and
 * committed survey state.
 */
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
import { getVisibleQuestions, recomputeTags } from "../../src/logic/questionnaire/questionRouting";
import type { AiOutputs, Answers } from "../../src/types";

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

test("English fallback routes common job and task descriptions to existing tags", async () => {
  await assertFallbackTags("I work from home as a software developer.", [
    "office_computer",
    "seated_work",
    "static_postures",
    "repetitive_movements",
    "mouse_intensive"
  ]);
  await assertFallbackTags("Warehouse worker stocking shelves and moving boxes all shift.", ["manual_handling", "standing_work", "walking_moving", "carrying"]);
  await assertFallbackTags("Nurse transfers patients from beds to wheelchairs.", ["manual_handling", "standing_work", "walking_moving", "lifting_lowering", "pushing_pulling"]);
  await assertFallbackTags("Maintenance mechanic uses an impact wrench and grinder.", ["tool_use", "vibrating_tools", "standing_work", "walking_moving"]);
  await assertFallbackTags("Janitor mops, scrubs floors, and vacuums.", ["standing_work", "walking_moving", "repetitive_movements", "bending_trunk", "tool_use", "low_work"]);
  await assertFallbackTags("Construction installer drills overhead into a ceiling.", ["tool_use", "standing_work", "walking_moving", "overhead_work"]);
  await assertFallbackTags("Landscaper mows outside on uneven ground.", ["outdoor_work", "walking_moving", "tool_use", "manual_handling", "repetitive_movements", "uneven_surfaces"]);
  await assertFallbackTags("Delivery driver uses a truck and forklift.", ["seated_work", "static_postures", "tool_use"]);
  await assertFallbackTags("Manufacturing worker sorts parts on an assembly line.", ["standing_work", "static_postures", "repetitive_movements", "tool_use"]);
  await assertFallbackTags("Retail cashier scans items and reaches across the counter.", ["standing_work", "walking_moving", "repetitive_movements", "reaching_forward"]);
  await assertFallbackTags("Quality control inspector checks small print under poor lighting.", ["fine_visual_work", "poor_lighting"]);
  await assertFallbackTags("Outdoor work in a cold, loud area with sun glare.", ["outdoor_work", "cold_environment", "noise_exposure", "glare_exposure"]);
});

test("English fallback handles combined prompt details across routing categories", async () => {
  const cases: Array<{ description: string; expectedTags: string[] }> = [
    {
      description: "I answer phone calls at a call center using a headset, laptop, mouse, and two monitors all day.",
      expectedTags: ["office_computer", "telephone_intensive", "laptop_tablet_use", "mouse_intensive", "dual_monitors", "static_postures"]
    },
    {
      description: "I lift 30 lb bulky boxes without handles and there is no hoist or lift assist.",
      expectedTags: ["manual_handling", "lifting_lowering", "carrying", "heavy_loads", "awkward_loads", "no_handles", "lack_of_mechanical_aids"]
    },
    {
      description: "I push a cart and pull a pallet jack over gravel and uneven surfaces.",
      expectedTags: ["pushing_pulling", "uneven_surfaces"]
    },
    {
      description: "I use tweezers to pinch small parts during fine assembly.",
      expectedTags: ["pinch_grip", "repetitive_movements"]
    },
    {
      description: "I squeeze a trigger with a power grip while my wrist is bent.",
      expectedTags: ["power_grip", "wrist_bending"]
    },
    {
      description: "I use my palm as a hammer against a hard edge on the counter.",
      expectedTags: ["body_as_tool", "sharp_edges"]
    },
    {
      description: "I bend, twist, reach with extended arms, and work below knee height.",
      expectedTags: ["bending_trunk", "twisting", "reaching_forward", "low_work"]
    },
    {
      description: "I stand all day on my feet doing the same task with quotas, overtime, and not enough breaks.",
      expectedTags: ["standing_work", "walking_moving", "static_postures", "low_task_variability", "fast_work_rate", "overtime", "inadequate_recovery_time"]
    },
    {
      description: "I work in a freezer with dim lighting, loud noise, glare, and rough ground.",
      expectedTags: ["cold_environment", "poor_lighting", "noise_exposure", "glare_exposure", "uneven_surfaces"]
    },
    {
      description: "I solder small parts under a microscope and inspect fine detail.",
      expectedTags: ["fine_visual_work", "pinch_grip"]
    },
    {
      description: "I use a jackhammer, grinder, and chainsaw outside.",
      expectedTags: ["tool_use", "vibrating_tools", "outdoor_work"]
    },
    {
      description: "I crouch and kneel on floors while repairing equipment.",
      expectedTags: ["low_work", "kneeling_squatting", "tool_use"]
    }
  ];

  for (const item of cases) {
    await assertFallbackTags(item.description, item.expectedTags);
  }
});

test("English fallback keeps vague occupations broad and avoids obsolete tags", async () => {
  const output = await interpretTextAnswer(getQuestion("question-3"), "I am a warehouse worker.");

  assert.ok(output.add_tags.includes("manual_handling"));
  assert.ok(output.add_tags.includes("standing_work"));
  assert.ok(output.add_tags.includes("walking_moving"));
  assert.equal(output.add_tags.includes("heavy_loads"), false);
  assert.equal(output.add_tags.includes("desk_based"), false);
  assert.equal(output.add_tags.includes("screen_work"), false);
  assert.equal(output.add_tags.includes("kneeling_floor_work"), false);
  assert.ok(output.missing_details.includes("Task details that affect posture, force, tools, and work pace"));
});

test("English fallback routes software developer task descriptions to office follow-up questions", async () => {
  const question = getQuestion("question-3");
  const answers: Answers = {
    "question-3": { type: "text", value: "I work from home as a software developer." }
  };
  const aiOutput = await interpretTextAnswer(question, String(answers["question-3"].value));
  const aiOutputs: AiOutputs = { "question-3": aiOutput };
  const tags = recomputeTags(answers, aiOutputs);
  const visibleIds = getVisibleQuestions(tags).map((item) => item.question_id);

  assert.ok(visibleIds.includes("question-7"));
  assert.ok(visibleIds.includes("question-11"));
  assert.ok(visibleIds.includes("question-23"));
  assert.ok(visibleIds.includes("question-29"));
});

test("local fallback is English-only while Gemini prompt keeps multilingual guidance", async () => {
  const question = getQuestion("question-3");
  const output = await interpretTextAnswer(question, "Levanto repetidamente cajas pesadas de 20 kilos cada hora y uso un taladro.");
  const prompt = buildInterpretTextPrompt(question, "Levanto cajas pesadas todos los dias.");

  assert.deepEqual(output.add_tags, []);
  assert.ok(/not English or mixes languages/i.test(prompt));
  assert.ok(/apply the same tag-selection behavior used for English responses/i.test(prompt));
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

async function assertFallbackTags(description: string, expectedTags: string[]) {
  const output = await interpretTextAnswer(getQuestion("question-3"), description);

  for (const tag of expectedTags) {
    assert.ok(output.add_tags.includes(tag), `${description} should include ${tag}; received ${output.add_tags.join(", ")}`);
  }
}
