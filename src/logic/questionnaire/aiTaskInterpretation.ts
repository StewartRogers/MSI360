import { tagTaxonomy } from "../../data/catalog";
import type { AiOutput, Question } from "../../types";
import { getGeminiApiUrl, parseGeminiJson, postGeminiPrompt } from "../ai/geminiClient";
import { clamp, stringOrFallback } from "../ai/valueUtils";

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
 * invalid output, this function falls back to local keyword matching and still
 * filters all tags against the question's allowed tag list.
 */
export async function interpretTextAnswer(question: Question, response: string): Promise<AiOutput> {
  const output = await interpretWithGemini(question, response).catch((error) => ({
    ...fallbackInterpretation(response),
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
      ...fallbackInterpretation(response),
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

/**
 * Local, conservative keyword fallback for task-description routing.
 *
 * The fallback is intentionally simple and should remain safe: it can add broad
 * routing tags and missing-detail prompts, but it does not score answers or hide
 * follow-up questions.
 */
function fallbackInterpretation(text: string): Omit<AiOutput, "provider"> {
  const lower = text.toLowerCase();
  const tags: string[] = [];

  addIf(tags, lower, ["computer", "keyboard", "mouse", "desk", "screen", "office", "computadora", "teclado", "raton", "ratón", "escritorio", "pantalla", "oficina"], [
    "office_computer",
    "desk_based",
    "screen_work",
    "seated_work"
  ]);
  addIf(tags, lower, ["lift", "carry", "box", "load", "levanto", "levantar", "llevo", "cargar", "cargo", "caja", "cajas", "carga"], [
    "manual_handling",
    "lifting_lowering",
    "carrying"
  ]);
  addIf(tags, lower, ["heavy", "80", "pound", "kg", "pesado", "pesada", "pesados", "pesadas"], ["heavy_loads"]);
  addIf(tags, lower, ["push", "pull", "cart", "dolly", "wheelbarrow", "rough surface", "soft surface", "empujo", "empujar", "jalo", "jalar", "carro"], [
    "pushing_pulling"
  ]);
  addIf(tags, lower, ["tool", "drill", "hammer", "wrench", "equipment", "machine", "lawnmower", "herramienta", "taladro", "martillo", "llave", "equipo", "maquina", "máquina"], [
    "tool_use"
  ]);
  addIf(tags, lower, ["vehicle", "forklift", "loader", "tractor", "pedal"], ["vehicle_equipment", "tool_use"]);
  addIf(tags, lower, ["vibration", "vibrating", "jackhammer"], ["vibrating_tools", "tool_use"]);
  addIf(tags, lower, ["sharp", "edge"], ["sharp_edges"]);
  addIf(tags, lower, ["kneel", "floor"], ["kneeling_floor_work", "low_work"]);
  addIf(tags, lower, ["overhead", "above shoulder"], ["overhead_work"]);
  addIf(tags, lower, ["reach", "outstretched", "extended"], ["reaching_forward"]);
  addIf(tags, lower, ["bend", "lean", "stoop"], ["bending_trunk"]);
  addIf(tags, lower, ["twist", "rotate"], ["twisting"]);
  addIf(tags, lower, ["repeat", "repetitive", "typing", "assembly", "repetidamente", "repetitivo", "repetitiva", "ensamblaje"], ["repetitive_movements"]);
  addIf(tags, lower, ["wrist", "hand", "grip"], ["wrist_bending"]);
  addIf(tags, lower, ["pinch"], ["pinch_grip"]);
  addIf(tags, lower, ["power grip", "wrap my hand", "wrap hand"], ["power_grip"]);
  addIf(tags, lower, ["fine detail", "small print", "inspect", "inspection"], ["fine_visual_work"]);
  addIf(tags, lower, ["glare", "sun", "reflection"], ["glare_exposure"]);
  addIf(tags, lower, ["cold", "freezer", "outside", "outdoor"], ["cold_environment", "outdoor_work"]);
  addIf(tags, lower, ["noise", "loud"], ["noise_exposure"]);
  addIf(tags, lower, ["deadline", "rush"], ["tight_deadlines"]);
  addIf(tags, lower, ["overtime"], ["overtime"]);

  const missing: string[] = [];
  if (tags.includes("lifting_lowering") && !hasWeightDetail(text)) missing.push("Approximate object weight");
  if (tags.includes("repetitive_movements") && !hasFrequencyOrDurationDetail(text)) missing.push("Frequency or duration");

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

function hasWeightDetail(text: string) {
  return /\b(lb|lbs|pound|pounds|kg|kgs|kilogram|kilograms|kilo|kilos|kilogramo|kilogramos|libra|libras)\b/i.test(text);
}

function hasFrequencyOrDurationDetail(text: string) {
  return /\b(hour|hours|minute|minutes|daily|shift|shifts|day|days|hora|horas|minuto|minutos|diario|diaria|diarios|diarias|turno|turnos|dia|dias|día|días|cada)\b/i.test(text);
}
