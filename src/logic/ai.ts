import { tagTaxonomy } from "../data/catalog";
import type { AiOutput, Question } from "../types";

const allowedTags = new Set(tagTaxonomy);

export async function interpretTextAnswer(question: Question, response: string): Promise<AiOutput> {
  const output = fallbackInterpretation(response);
  return {
    ...output,
    add_tags: output.add_tags.filter((tag) => allowedTags.has(tag) && question.ai_instructions?.allowed_add_tags.includes(tag)),
    provider: "client-keyword-fallback"
  };
}

function fallbackInterpretation(text: string): Omit<AiOutput, "provider"> {
  const lower = text.toLowerCase();
  const tags: string[] = [];

  addIf(tags, lower, ["computer", "keyboard", "mouse", "desk", "screen", "office"], ["office_computer", "desk_based", "screen_work", "seated_work"]);
  addIf(tags, lower, ["lift", "carry", "box", "load"], ["manual_handling", "lifting_carrying"]);
  addIf(tags, lower, ["heavy", "80", "pound", "kg"], ["heavy_loads"]);
  addIf(tags, lower, ["push", "pull", "cart", "dolly"], ["pushing_pulling"]);
  addIf(tags, lower, ["tool", "drill", "hammer", "wrench"], ["tool_use", "gripping"]);
  addIf(tags, lower, ["vibration", "vibrating", "jackhammer"], ["vibrating_tools", "tool_use"]);
  addIf(tags, lower, ["kneel", "floor"], ["kneeling_floor_work", "low_work"]);
  addIf(tags, lower, ["overhead", "above shoulder"], ["overhead_work"]);
  addIf(tags, lower, ["bend", "lean", "stoop"], ["bending_trunk"]);
  addIf(tags, lower, ["twist", "rotate"], ["twisting"]);
  addIf(tags, lower, ["repeat", "repetitive", "typing", "assembly"], ["repetitive_work"]);
  addIf(tags, lower, ["wrist", "hand", "grip"], ["wrist_hand_work", "gripping"]);
  addIf(tags, lower, ["cold", "freezer", "outside", "outdoor"], ["cold_environment", "outdoor_work"]);
  addIf(tags, lower, ["noise", "loud"], ["noise_exposure"]);
  addIf(tags, lower, ["deadline", "rush"], ["tight_deadlines"]);
  addIf(tags, lower, ["overtime"], ["overtime"]);

  const missing: string[] = [];
  if (tags.includes("lifting_carrying") && !/\b(lb|pound|kg|kilogram)\b/i.test(text)) missing.push("Approximate object weight");
  if (tags.includes("repetitive_work") && !/\b(hour|minute|daily|shift|day)\b/i.test(text)) missing.push("Frequency or duration");

  return {
    normalized_answer_en: text,
    add_tags: [...new Set(tags)],
    missing_details: missing,
    confidence: tags.length ? 0.65 : 0.35,
    notes: tags.length ? "Local keyword interpretation detected likely MSI tags." : "No clear MSI tags detected."
  };
}

function addIf(tags: string[], text: string, keywords: string[], matches: string[]) {
  if (keywords.some((keyword) => text.includes(keyword))) tags.push(...matches);
}
