import { translations } from "./translations";
import type { QuestionText, Translation } from "../types";

/**
 * Returns localized question text with English fallback for missing fields.
 *
 * The translation files are expected to be complete for ready languages, but the
 * fallback keeps the app usable while copy is being reviewed or added.
 */
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

/**
 * Builds localized labels for the shared action button component.
 */
export function getActionButtonLabels(t: Translation) {
  return {
    continueLabel: getAppText(t, "continue_button", "Continue"),
    backLabel: getAppText(t, "back_button", "Back"),
    busyLabel: getAppText(t, "processing_button", "Processing")
  };
}

/**
 * Localized busy label shown while Gemini interprets a task description.
 */
export function getAnalyzingButtonLabel(t: Translation) {
  return getAppText(t, "analyzing_button", "Analyzing");
}

/**
 * Localized status text shown beside the spinner during task analysis.
 */
export function getAiLoadingTaskDescriptionLabel(t: Translation) {
  return getAppText(t, "ai_loading_task_description", "Analyzing your task description...");
}

/**
 * Formats the localized question-progress template.
 */
export function getProgressLabel(t: Translation, current: number, total: number) {
  return getAppText(t, "question_progress", "Question {current} of {total}").replaceAll("{current}", String(current)).replaceAll("{total}", String(total));
}

/**
 * Looks up shared application copy with English and caller-provided fallbacks.
 */
export function getAppText(t: Translation, key: string, fallback: string) {
  return t.app[key] || translations.en.app[key] || fallback;
}

/**
 * Merges localized option labels over English labels.
 */
function mergeOptions(english?: Record<string, string>, localized?: Record<string, string>) {
  if (!english && !localized) return undefined;
  return { ...(english || {}), ...(localized || {}) };
}

/**
 * Merges grouped question labels and grouped option labels with English
 * fallback, preserving all group IDs from either source.
 */
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
