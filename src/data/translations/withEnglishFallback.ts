import type { QuestionText, Translation } from "../../types";
import { en } from "./en";

/**
 * Partially translated bundle: any field may be omitted and will show English.
 */
export interface PartialTranslation {
  app?: Record<string, string>;
  sections?: Record<string, string>;
  questions?: Record<string, Partial<QuestionText>>;
}

/**
 * Builds a complete `Translation` by layering partial localized text over the
 * English reference.
 *
 * Used for languages that are still being translated (for example, test
 * entries awaiting a fluent speaker). Every key exists in the result, so the
 * completeness tests pass, and untranslated strings visibly remain English.
 */
export function withEnglishFallback(partial: PartialTranslation): Translation {
  const questions = Object.fromEntries(
    Object.entries(en.questions).map(([questionId, english]) => [questionId, mergeQuestion(english, partial.questions?.[questionId])])
  );

  return {
    app: { ...en.app, ...partial.app },
    sections: { ...en.sections, ...partial.sections },
    questions
  };
}

function mergeQuestion(english: QuestionText, localized?: Partial<QuestionText>): QuestionText {
  if (!localized) return english;

  const merged: QuestionText = { ...english, label: localized.label || english.label };
  if (english.help_text !== undefined) merged.help_text = localized.help_text || english.help_text;
  if (english.options) merged.options = { ...english.options, ...localized.options };
  if (english.groups) {
    merged.groups = Object.fromEntries(
      Object.entries(english.groups).map(([groupId, group]) => {
        const localizedGroup = localized.groups?.[groupId];
        return [groupId, { label: localizedGroup?.label || group.label, options: { ...group.options, ...localizedGroup?.options } }];
      })
    );
  }
  return merged;
}
