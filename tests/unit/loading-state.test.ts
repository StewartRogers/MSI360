import test from "node:test";
import assert from "node:assert/strict";
import { getActionButtonState } from "../../src/App";

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
