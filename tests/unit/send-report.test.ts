/**
 * Unit coverage for api/send-report.ts's pure validation helpers (email
 * format, PDF size cap, HTML escaping, rate limiting). The handler itself
 * needs a real VercelRequest/VercelResponse and a live Resend call, so it is
 * exercised manually per docs/MSI360_Sprint_Test_Cases.md instead.
 */
import test from "node:test";
import assert from "node:assert/strict";
import { escapeHtml, isRateLimited, isValidEmail, isWithinPdfSizeCap, MAX_PDF_BASE64_LENGTH } from "../../api/send-report";

test("isValidEmail accepts well-formed addresses and rejects malformed ones", () => {
  assert.equal(isValidEmail("worker@example.com"), true);
  assert.equal(isValidEmail("not-an-email"), false);
  assert.equal(isValidEmail(""), false);
});

test("isWithinPdfSizeCap enforces the base64 length ceiling", () => {
  assert.equal(isWithinPdfSizeCap("a".repeat(100)), true);
  assert.equal(isWithinPdfSizeCap(""), false);
  assert.equal(isWithinPdfSizeCap("a".repeat(MAX_PDF_BASE64_LENGTH + 1)), false);
});

test("escapeHtml neutralizes markup-significant characters", () => {
  assert.equal(escapeHtml(`<b>"quote" & 'tick'</b>`), "&lt;b&gt;&quot;quote&quot; &amp; &#39;tick&#39;&lt;/b&gt;");
});

test("isRateLimited allows requests under the limit and blocks beyond it", () => {
  const clientId = `test-client-${Date.now()}`;
  for (let i = 0; i < 5; i++) assert.equal(isRateLimited(clientId), false);
  assert.equal(isRateLimited(clientId), true);
});
