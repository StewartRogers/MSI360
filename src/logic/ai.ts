import { tagTaxonomy } from "../data/catalog";
import type { AiOutput, Question } from "../types";

const allowedTags = new Set(tagTaxonomy);

export async function interpretTextAnswer(question: Question, response: string): Promise<AiOutput> {
  const output = await interpretWithGemini(question, response).catch((error) => ({
    ...fallbackInterpretation(response),
    provider: "client-keyword-fallback",
    notes: `Gemini unavailable, used local fallback. ${error instanceof Error ? error.message : ""}`.trim()
  }));

  return {
    ...output,
    add_tags: output.add_tags.filter((tag) => allowedTags.has(tag) && question.ai_instructions?.allowed_add_tags.includes(tag))
  };
}

async function interpretWithGemini(question: Question, response: string): Promise<AiOutput> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return {
      ...fallbackInterpretation(response),
      provider: "client-keyword-fallback",
      notes: "No Gemini API key configured; used local fallback."
    };
  }

  const model = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.5-flash";
  const instruction = question.ai_instructions;
  const allowedAddTags = instruction?.allowed_add_tags ?? [];

  const prompt = [
    "You support MSI360, a prototype musculoskeletal injury risk survey.",
    "Analyze the worker's text answer and return strict JSON only. Do not include markdown or commentary.",
    "Use only tags listed in allowed_add_tags. If no tag clearly applies, return an empty add_tags array.",
    "Do not invent scoring values. Only extract tags and missing details that help route follow-up MSI questions.",
    `Question id: ${question.question_id}`,
    `Purpose: ${instruction?.purpose ?? "interpret_text_answer"}`,
    `Instruction: ${instruction?.prompt ?? ""}`,
    `Expected fields to consider: ${(instruction?.expected_fields ?? []).join(", ")}`,
    `allowed_add_tags: ${allowedAddTags.join(", ")}`,
    'Required JSON shape: {"normalized_answer_en":"string","add_tags":["tag"],"missing_details":["string"],"confidence":0.0,"notes":"string"}',
    `Worker response: ${response}`
  ].join("\n");

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const result = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: "application/json"
      }
    })
  });

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

function fallbackInterpretation(text: string): Omit<AiOutput, "provider"> {
  const lower = text.toLowerCase();
  const tags: string[] = [];

  addIf(tags, lower, ["computer", "keyboard", "mouse", "desk", "screen", "office"], ["office_computer", "desk_based", "screen_work", "seated_work"]);
  addIf(tags, lower, ["lift", "carry", "box", "load"], ["manual_handling", "lifting_carrying"]);
  addIf(tags, lower, ["heavy", "80", "pound", "kg"], ["heavy_loads"]);
  addIf(tags, lower, ["push", "pull", "cart", "dolly", "wheelbarrow", "rough surface", "soft surface"], ["pushing_pulling"]);
  addIf(tags, lower, ["tool", "drill", "hammer", "wrench", "equipment", "machine", "lawnmower"], ["tool_use", "gripping"]);
  addIf(tags, lower, ["vehicle", "forklift", "loader", "tractor", "pedal"], ["vehicle_equipment", "tool_use"]);
  addIf(tags, lower, ["vibration", "vibrating", "jackhammer"], ["vibrating_tools", "tool_use"]);
  addIf(tags, lower, ["sharp", "edge"], ["sharp_edges"]);
  addIf(tags, lower, ["kneel", "floor"], ["kneeling_floor_work", "low_work"]);
  addIf(tags, lower, ["overhead", "above shoulder"], ["overhead_work"]);
  addIf(tags, lower, ["reach", "outstretched", "extended"], ["reaching_forward"]);
  addIf(tags, lower, ["bend", "lean", "stoop"], ["bending_trunk"]);
  addIf(tags, lower, ["twist", "rotate"], ["twisting"]);
  addIf(tags, lower, ["repeat", "repetitive", "typing", "assembly"], ["repetitive_work"]);
  addIf(tags, lower, ["wrist", "hand", "grip"], ["wrist_hand_work", "gripping"]);
  addIf(tags, lower, ["pinch"], ["pinch_grip", "gripping"]);
  addIf(tags, lower, ["power grip", "wrap my hand", "wrap hand"], ["power_grip", "gripping"]);
  addIf(tags, lower, ["fine detail", "small print", "inspect", "inspection"], ["fine_visual_work"]);
  addIf(tags, lower, ["glare", "sun", "reflection"], ["glare_exposure"]);
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

function parseGeminiJson(text: string): Record<string, unknown> {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("Gemini response was not valid JSON");
    return JSON.parse(match[0]);
  }
}

function stringOrFallback(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
