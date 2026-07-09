import type { VercelRequest, VercelResponse } from "@vercel/node";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL;
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS?.split(",").map(s => s.trim()).filter(Boolean);

// Pre-answer prompts (preAnswering.ts) embed full label/option text for every
// eligible follow-up question as JSON, which routinely runs 10-15k characters
// for a normal task description -- comfortably below Vercel's request body
// limit, so the cap here only needs to guard against pathological input.
const MAX_PROMPT_LENGTH = 20000;

// Best-effort per-instance limiter (state resets on cold start and isn't
// shared across regions/instances), but it still blocks the common case of a
// single client hammering a warm function and costs nothing to run.
const RATE_LIMIT_MAX_REQUESTS = 20;
const RATE_LIMIT_WINDOW_MS = 60_000;
const requestLog = new Map<string, number[]>();

function isRateLimited(clientId: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(clientId) ?? []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(clientId, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function getClientId(req: VercelRequest): string {
  const forwardedFor = req.headers["x-forwarded-for"];
  const ip = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor?.split(",")[0].trim();
  return ip || req.socket?.remoteAddress || "unknown";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const origin = req.headers.origin ?? "";
  if (ALLOWED_ORIGINS && ALLOWED_ORIGINS.length > 0) {
    if (!ALLOWED_ORIGINS.includes(origin)) {
      res.status(403).json({ error: "Forbidden" });
      return;
    }
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    // No allowlist configured: fail closed and only accept same-origin
    // requests instead of silently accepting requests from anywhere.
    const host = req.headers["x-forwarded-host"] ?? req.headers.host ?? "";
    const originHost = origin ? origin.replace(/^https?:\/\//, "") : "";
    if (!origin || originHost !== host) {
      res.status(403).json({ error: "Forbidden" });
      return;
    }
  }

  if (isRateLimited(getClientId(req))) {
    res.setHeader("Retry-After", String(RATE_LIMIT_WINDOW_MS / 1000));
    res.status(429).json({ error: "Too many requests" });
    return;
  }

  if (!GEMINI_API_KEY || !GEMINI_MODEL) {
    res.status(500).json({ error: "Gemini environment variables not configured" });
    return;
  }

  const { prompt, temperature } = req.body ?? {};

  if (typeof prompt !== "string" || !prompt) {
    res.status(400).json({ error: "Missing prompt" });
    return;
  }

  if (prompt.length > MAX_PROMPT_LENGTH) {
    res.status(413).json({ error: "Prompt too long" });
    return;
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`;

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: typeof temperature === "number" ? temperature : 0.1,
          responseMimeType: "application/json"
        }
      })
    });

    const data = await upstream.text();
    res.status(upstream.status).setHeader("Content-Type", upstream.headers.get("content-type") || "application/json").send(data);
  } catch {
    res.status(502).json({ error: "Failed to reach Gemini API" });
  }
}
