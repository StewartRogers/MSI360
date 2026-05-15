/**
 * Toggles a radio-style option.
 *
 * The UI allows clicking an already-selected radio option to clear it so workers
 * can back out of a choice before continuing.
 */
export function toggleSingleOption(selected: string, optionId: string) {
  return selected === optionId ? "" : optionId;
}

/**
 * Toggles a checkbox option while enforcing catalog exclusivity rules.
 *
 * The catalog marks mutually exclusive checkbox options with `exclusive=true`.
 * Selecting one clears the rest, and selecting a regular option clears the
 * exclusive "none" style answer.
 */
export function toggleOption(selected: string[], optionId: string, exclusive: boolean) {
  if (exclusive) return selected.includes(optionId) ? [] : [optionId];
  const withoutExclusive = selected.filter((value) => value !== "none");
  if (withoutExclusive.includes(optionId)) return withoutExclusive.filter((value) => value !== optionId);
  return [...withoutExclusive, optionId];
}

/**
 * Updates one group inside a grouped answer object.
 *
 * Empty group values are removed so incomplete grouped answers remain easy to
 * detect during required-question validation.
 */
export function setGroupAnswerValue(value: Record<string, string | string[]>, groupId: string, nextValue: string | string[]) {
  const nextValueIsEmpty = Array.isArray(nextValue) ? nextValue.length === 0 : nextValue.trim().length === 0;
  const next = { ...value };
  if (nextValueIsEmpty) {
    delete next[groupId];
  } else {
    next[groupId] = nextValue;
  }
  return next;
}
