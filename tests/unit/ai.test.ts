import test from "node:test";
import assert from "node:assert/strict";
import { questions } from "../../src/data/catalog";
import { interpretTextAnswer } from "../../src/logic/ai";

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
