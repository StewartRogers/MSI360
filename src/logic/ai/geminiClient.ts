import { geminiRequestTimeoutMs } from "../../config/aiConfig";

const GEMINI_PROXY_PATH = "/api/gemini";

export function getGeminiApiUrl(): string | null {
  if (import.meta.env.VITE_GEMINI_ENABLED) return GEMINI_PROXY_PATH;
  return null;
}

export async function postGeminiPrompt(apiUrl: string, prompt: string, temperature: number, timeoutMessage: string, timeoutMs = geminiRequestTimeoutMs): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({ prompt, temperature })
    });
  } catch (error) {
    if (isAbortError(error)) throw new Error(timeoutMessage);
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Parses a Gemini JSON response, tolerating small amounts of surrounding text.
 */
export function parseGeminiJson(text: string): Record<string, unknown> {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("Gemini response was not valid JSON");
    return JSON.parse(match[0]);
  }
}

function isAbortError(error: unknown) {
  return error instanceof DOMException && error.name === "AbortError";
}
