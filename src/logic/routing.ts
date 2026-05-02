import { questions, tagTaxonomy } from "../data/catalog";
import type { AiOutputs, Answer, Answers, Option, Question } from "../types";

const allowedTags = new Set(tagTaxonomy);

export function recomputeTags(answers: Answers, aiOutputs: AiOutputs): string[] {
  const tags = new Set<string>(["start"]);

  for (const question of questions) {
    const answer = answers[question.question_id];
    if (!answer) continue;

    question.add_tags?.forEach((tag) => addAllowedTag(tags, tag));

    if (question.type === "text") {
      aiOutputs[question.question_id]?.add_tags.forEach((tag) => addAllowedTag(tags, tag));
      continue;
    }

    getSelectedOptions(question, answer).forEach((option) => {
      option.add_tags?.forEach((tag) => addAllowedTag(tags, tag));
    });
  }

  return [...tags];
}

export function getVisibleQuestions(activeTags: string[]): Question[] {
  const tagSet = new Set(activeTags);
  return questions.filter((question) => {
    if (!question.display_condition_tags.length) return true;
    return question.display_condition_tags.some((tag) => tagSet.has(tag));
  });
}

export function getSelectedOptions(question: Question, answer?: Answer): Option[] {
  if (!answer) return [];
  const value = answer.value;

  if (question.options) {
    const selectedIds = Array.isArray(value) ? value : typeof value === "string" ? [value] : [];
    return question.options.filter((option) => selectedIds.includes(option.option_id));
  }

  if (!isRecord(value)) return [];

  const selected: Option[] = [];
  question.groups?.forEach((group) => {
    const groupValue = value[group.group_id];
    const selectedIds = Array.isArray(groupValue) ? groupValue : typeof groupValue === "string" ? [groupValue] : [];
    selected.push(...group.options.filter((option) => selectedIds.includes(option.option_id)));
  });
  return selected;
}

function addAllowedTag(tags: Set<string>, tag: string) {
  if (allowedTags.has(tag)) tags.add(tag);
}

function isRecord(value: unknown): value is Record<string, string | string[]> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
