import type { VercelRequest, VercelResponse } from "@vercel/node";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL;
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS?.split(",").map(s => s.trim());

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (ALLOWED_ORIGINS && ALLOWED_ORIGINS.length > 0) {
    const origin = req.headers.origin ?? "";
    if (!ALLOWED_ORIGINS.includes(origin)) {
      res.status(403).json({ error: "Forbidden" });
      return;
    }
    res.setHeader("Access-Control-Allow-Origin", origin);
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
