export function toggleSingleOption(selected: string, optionId: string) {
  return selected === optionId ? "" : optionId;
}

export function toggleOption(selected: string[], optionId: string, exclusive: boolean) {
  if (exclusive) return selected.includes(optionId) ? [] : [optionId];
  const withoutExclusive = selected.filter((value) => value !== "none");
  if (withoutExclusive.includes(optionId)) return withoutExclusive.filter((value) => value !== optionId);
  return [...withoutExclusive, optionId];
}

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
