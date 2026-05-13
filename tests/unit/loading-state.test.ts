import test from "node:test";
import assert from "node:assert/strict";
import { getActionButtonState } from "../../src/ui/components/ActionButtons";
import { getAiFallbackToastKinds } from "../../src/logic/aiFallbackToast";

test("busy action buttons block repeated submits and back navigation", () => {
  assert.deepEqual(getActionButtonState(true, true), {
    continueDisabled: true,
    backDisabled: true
  });
});

test("idle action buttons only disable continue when the current step is incomplete", () => {
  assert.deepEqual(getActionButtonState(true, false), {
    continueDisabled: false,
    backDisabled: false
  });

  assert.deepEqual(getActionButtonState(false, false), {
    continueDisabled: true,
    backDisabled: false
  });
});

test("AI fallback toast trigger reports task-analysis and question-pruning failures independently", () => {
  assert.deepEqual(
    getAiFallbackToastKinds(
      { provider: "client-keyword-fallback", notes: "Gemini unavailable, used local fallback. HTTP 500" },
      { provider: "gemini", notes: "Gemini pre-answering completed." }
    ),
    ["task-analysis"]
  );

  assert.deepEqual(
    getAiFallbackToastKinds(
      { provider: "gemini", notes: "Gemini interpreted the text answer." },
      { provider: "client-no-preanswer", notes: "Gemini pre-answering unavailable; no questions were hidden. HTTP 500" }
    ),
    ["question-pruning"]
  );

  assert.deepEqual(
    getAiFallbackToastKinds(
      { provider: "client-keyword-fallback", notes: "Gemini unavailable, used local fallback. HTTP 500" },
      { provider: "client-no-preanswer", notes: "Gemini pre-answering unavailable; no questions were hidden. HTTP 500" }
    ),
    ["task-analysis", "question-pruning"]
  );
});

test("AI fallback toast trigger ignores configured-off Gemini paths", () => {
  assert.deepEqual(
    getAiFallbackToastKinds(
      { provider: "client-keyword-fallback", notes: "No Gemini API key configured; used local fallback." },
      { provider: "client-no-preanswer", notes: "No Gemini API key configured; no questions were pre-answered." }
    ),
    []
  );
});
