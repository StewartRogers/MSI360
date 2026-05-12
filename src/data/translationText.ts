import { translations } from "./translations";
import type { QuestionText, Translation } from "../types";

export function getQuestionText(t: Translation, questionId: string): QuestionText | undefined {
  const localized = t.questions[questionId];
  const english = translations.en.questions[questionId];

  if (!localized) return english;
  if (!english) return localized;

  return {
    label: localized.label || english.label,
    help_text: localized.help_text || english.help_text,
    options: mergeOptions(english.options, localized.options),
    groups: mergeGroups(english.groups, localized.groups)
  };
}

function mergeOptions(english?: Record<string, string>, localized?: Record<string, string>) {
  if (!english && !localized) return undefined;
  return { ...(english || {}), ...(localized || {}) };
}

function mergeGroups(
  english?: Record<string, { label: string; options: Record<string, string> }>,
  localized?: Record<string, { label: string; options: Record<string, string> }>
) {
  if (!english && !localized) return undefined;
  const groupIds = new Set([...Object.keys(english || {}), ...Object.keys(localized || {})]);

  return Object.fromEntries(
    [...groupIds].map((groupId) => {
      const englishGroup = english?.[groupId];
      const localizedGroup = localized?.[groupId];

      return [
        groupId,
        {
          label: localizedGroup?.label || englishGroup?.label || groupId,
          options: mergeOptions(englishGroup?.options, localizedGroup?.options) || {}
        }
      ];
    })
  );
}
