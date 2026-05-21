import { tagTaxonomy } from "../../data/catalog";
import type { AiOutput, Question } from "../../types";
import { getGeminiApiUrl, parseGeminiJson, postGeminiPrompt } from "../ai/geminiClient";
import { clamp, stringOrFallback } from "../ai/valueUtils";
import { interpretTaskDescriptionFallback } from "./taskFallbackRules";

const allowedTags = new Set(tagTaxonomy);
const interpretTextPromptGuidance = [
  "If the worker response is in English, interpret it directly using the same tag-selection behavior as an English task description.",
  "For English responses, preserve concrete routing clues from the text such as desk, computer, keyboard, mouse, screen, lift, carry, tool, reach, bend, twist, kneel, cold, glare, or noise.",
  "If the worker response is not English or mixes languages, internally translate or interpret it to English, then apply the same tag-selection behavior used for English responses."
];

/**
 * Interprets the worker's free-text task description into routing metadata.
 *
 * Gemini is used when configured. If Gemini is missing, times out, or returns
 * invalid output, this function falls back to local English rule matching and
 * still filters all tags against the question's allowed tag list.
 */
export async function interpretTextAnswer(question: Question, response: string): Promise<AiOutput> {
  const output = await interpretWithGemini(question, response).catch((error) => ({
    ...interpretTaskDescriptionFallback(response),
    provider: "client-keyword-fallback",
    notes: `Gemini unavailable, used local fallback. ${error instanceof Error ? error.message : ""}`.trim()
  }));

  return {
    ...output,
    add_tags: filterAllowedAddTags(question, output.add_tags)
  };
}

async function interpretWithGemini(question: Question, response: string): Promise<AiOutput> {
  const apiUrl = getGeminiApiUrl();
  if (!apiUrl) {
    return {
      ...interpretTaskDescriptionFallback(response),
      provider: "client-keyword-fallback",
      notes: "No Gemini API key configured; used local fallback."
    };
  }

  const prompt = buildInterpretTextPrompt(question, response);
  const result = await postGeminiPrompt(apiUrl, prompt, 0.1, "Gemini task analysis response timed out");

  if (!result.ok) {
    throw new Error(`Gemini request failed with ${result.status}`);
  }

  const data = await result.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (typeof text !== "string" || !text.trim()) {
    throw new Error("Gemini returned no JSON text");
  }

  const parsed = parseGeminiJson(text);
  return {
    normalized_answer_en: stringOrFallback(parsed.normalized_answer_en, response),
    add_tags: Array.isArray(parsed.add_tags) ? parsed.add_tags.filter((tag: unknown): tag is string => typeof tag === "string") : [],
    missing_details: Array.isArray(parsed.missing_details)
      ? parsed.missing_details.filter((detail: unknown): detail is string => typeof detail === "string")
      : [],
    confidence: typeof parsed.confidence === "number" ? clamp(parsed.confidence, 0, 1) : 0.5,
    notes: stringOrFallback(parsed.notes, "Gemini interpreted the text answer."),
    provider: "gemini"
  };
}

/**
 * Builds the Gemini prompt for task-description routing.
 *
 * The prompt requires strict JSON and canonical tag IDs so output can be parsed,
 * filtered, and merged into the same routing system used by manual answers.
 */
export function buildInterpretTextPrompt(question: Question, response: string): string {
  const instruction = question.ai_instructions;
  const allowedAddTags = instruction?.allowed_add_tags ?? [];

  return [
    "You support MSI360, a prototype musculoskeletal injury risk survey.",
    "Analyze the worker's text answer and return strict JSON only. Do not include markdown or commentary.",
    ...interpretTextPromptGuidance,
    "Return normalized_answer_en as a concise English interpretation of the original response.",
    "Use only tags listed in allowed_add_tags. If no tag clearly applies, return an empty add_tags array.",
    "Do not invent, translate, localize, rename, or paraphrase tag IDs. Return exact tag IDs from allowed_add_tags.",
    "Do not invent scoring values. Only extract tags and missing details that help route follow-up MSI questions.",
    `Question id: ${question.question_id}`,
    `Purpose: ${instruction?.purpose ?? "interpret_text_answer"}`,
    `Instruction: ${instruction?.prompt ?? ""}`,
    `Expected fields to consider: ${(instruction?.expected_fields ?? []).join(", ")}`,
    `allowed_add_tags: ${allowedAddTags.join(", ")}`,
    'Required JSON shape: {"normalized_answer_en":"string","add_tags":["tag"],"missing_details":["string"],"confidence":0.0,"notes":"string"}',
    `Worker response: ${response}`
  ].join("\n");
}

/**
 * Filters model-suggested tags to globally known tags allowed for the question.
 */
export function filterAllowedAddTags(question: Question, tags: string[]): string[] {
  return tags.filter((tag) => allowedTags.has(tag) && question.ai_instructions?.allowed_add_tags.includes(tag));
}
