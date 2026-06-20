import type { VercelRequest, VercelResponse } from "@vercel/node";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!GEMINI_API_KEY) {
    res.status(500).json({ error: "Gemini API key not configured" });
    return;
  }

  const { prompt, temperature } = req.body ?? {};

  if (typeof prompt !== "string" || !prompt) {
    res.status(400).json({ error: "Missing prompt" });
    return;
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`;

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
  res.status(upstream.status).setHeader("Content-Type", "application/json").send(data);
}
