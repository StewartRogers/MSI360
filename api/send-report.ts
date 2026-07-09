import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// api/ is outside tsconfig.json's `include` (Vercel bundles these functions with
// its own build, not `tsc`), so `process` normally has no ambient type here --
// same as api/gemini.ts. This file needs one because tests/unit/send-report.test.ts
// imports its pure helpers directly, pulling it into the `npm run typecheck` graph.
declare const process: { env: Record<string, string | undefined> };

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS?.split(",").map((s: string) => s.trim()).filter(Boolean);

export const MAX_PDF_BASE64_LENGTH = 4_000_000;
const MAX_TEXT_FIELD_LENGTH = 300;
const MAX_SUBJECT_LENGTH = 200;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort per-instance limiter (state resets on cold start and isn't
// shared across regions/instances), but it still blocks the common case of a
// single client hammering a warm function and costs nothing to run.
// Stricter than api/gemini.ts's limit since sending mail is costlier and more
// abusable (spam-relay risk) than a text prompt.
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;
const requestLog = new Map<string, number[]>();

export function isRateLimited(clientId: string): boolean {
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

export function isValidEmail(email: string): boolean {
  return typeof email === "string" && email.length <= 254 && EMAIL_PATTERN.test(email);
}

export function isWithinPdfSizeCap(pdfBase64: string): boolean {
  return typeof pdfBase64 === "string" && pdfBase64.length > 0 && pdfBase64.length <= MAX_PDF_BASE64_LENGTH;
}

export function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] as string);
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

  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL) {
    res.status(500).json({ error: "Resend environment variables not configured" });
    return;
  }

  const { to, subject, pdfBase64, taskSummary, overallScoreDisplay, generatedDate } = req.body ?? {};

  if (typeof to !== "string" || !isValidEmail(to)) {
    res.status(400).json({ error: "Missing or invalid recipient email" });
    return;
  }

  if (typeof pdfBase64 !== "string" || !pdfBase64) {
    res.status(400).json({ error: "Missing report attachment" });
    return;
  }

  if (!isWithinPdfSizeCap(pdfBase64)) {
    res.status(413).json({ error: "Report attachment too large" });
    return;
  }

  if (typeof subject !== "string" || !subject || subject.length > MAX_SUBJECT_LENGTH) {
    res.status(400).json({ error: "Missing or invalid subject" });
    return;
  }

  const safeTaskSummary = escapeHtml(typeof taskSummary === "string" ? taskSummary.slice(0, MAX_TEXT_FIELD_LENGTH) : "");
  const safeOverallScoreDisplay = escapeHtml(typeof overallScoreDisplay === "string" ? overallScoreDisplay.slice(0, MAX_TEXT_FIELD_LENGTH) : "");
  const safeGeneratedDate = escapeHtml(typeof generatedDate === "string" ? generatedDate.slice(0, MAX_TEXT_FIELD_LENGTH) : "");

  const html = `
    <div>
      <p>Your MSI 360 risk report is attached as a PDF.</p>
      <ul>
        <li><strong>Date:</strong> ${safeGeneratedDate}</li>
        <li><strong>Job/task analyzed:</strong> ${safeTaskSummary}</li>
        <li><strong>Overall score:</strong> ${safeOverallScoreDisplay}</li>
      </ul>
    </div>
  `;

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: [to],
      subject,
      html,
      attachments: [{ filename: "MSI360-Risk-Score-Report.pdf", content: pdfBase64 }]
    });

    if (error) {
      res.status(502).json({ error: "Failed to send email" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch {
    res.status(502).json({ error: "Failed to reach Resend API" });
  }
}
