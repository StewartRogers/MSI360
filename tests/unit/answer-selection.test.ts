/**
 * Unit coverage for low-level answer toggling helpers used by radio, checkbox,
 * and grouped answer controls.
 */
import test from "node:test";
import assert from "node:assert/strict";
import { setGroupAnswerValue, toggleOption, toggleSingleOption } from "../../src/logic/answerSelection";

test("single-choice answers toggle on and off", () => {
  assert.equal(toggleSingleOption("", "yes"), "yes");
  assert.equal(toggleSingleOption("yes", "yes"), "");
});

test("select-all answers respect exclusive options", () => {
  assert.deepEqual(toggleOption(["lift", "push"], "none", true), ["none"]);
  assert.deepEqual(toggleOption(["none"], "lift", false), ["lift"]);
  assert.deepEqual(toggleOption(["lift", "push"], "push", false), ["lift"]);
});

test("group answer updates remove empty group values", () => {
  assert.deepEqual(setGroupAnswerValue({ posture: "some" }, "posture", ""), {});
  assert.deepEqual(setGroupAnswerValue({}, "posture", ["some"]), { posture: ["some"] });
});
