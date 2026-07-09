import { pdf } from "@react-pdf/renderer";
import { createElement } from "react";
import { emailReportRequestTimeoutMs, emailReportSubject } from "../config/emailConfig";
import { ReportDocument } from "./ReportDocument";
import { buildReportData } from "./reportData";
import type { AiOutputs, AiReportAnalysis, Answers, ScoreResult } from "../types";

const SEND_REPORT_PATH = "/api/send-report";

export interface SendReportEmailResult {
  ok: boolean;
}

/**
 * Renders the same PDF used by downloadReport(), then emails it via the
 * /api/send-report proxy. Never throws -- a failed or timed-out send should
 * not block the user from reaching the report screen, where the PDF can
 * always be downloaded directly instead.
 */
export async function sendReportEmail(
  to: string,
  answers: Answers,
  aiOutputs: AiOutputs,
  scoreResult: ScoreResult,
  reportAnalysis: AiReportAnalysis | null = null
): Promise<SendReportEmailResult> {
  try {
    const report = buildReportData(answers, aiOutputs, scoreResult, { reportAnalysis });
    const pdfDocument = createElement(ReportDocument, { report }) as unknown as Parameters<typeof pdf>[0];
    const blob = await pdf(pdfDocument).toBlob();
    const pdfBase64 = await blobToBase64(blob);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), emailReportRequestTimeoutMs);
    try {
      const response = await fetch(SEND_REPORT_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          to,
          subject: emailReportSubject,
          pdfBase64,
          taskSummary: report.taskSummary,
          overallScoreDisplay: report.overallScore.display,
          generatedDate: report.generatedDate
        })
      });
      return { ok: response.ok };
    } finally {
      clearTimeout(timeoutId);
    }
  } catch {
    return { ok: false };
  }
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      const commaIndex = result.indexOf(",");
      resolve(commaIndex >= 0 ? result.slice(commaIndex + 1) : "");
    };
    reader.readAsDataURL(blob);
  });
}
