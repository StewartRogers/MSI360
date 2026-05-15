import { pdf } from "@react-pdf/renderer";
import { createElement } from "react";
import { ReportDocument } from "./ReportDocument";
import { buildReportData } from "./reportData";
import type { AiOutputs, AiReportAnalysis, Answers, ScoreResult } from "../types";

/**
 * Builds and downloads the client-side PDF report.
 *
 * This prototype has no backend report service. The report data model is built
 * in the browser, rendered with React PDF, converted to a Blob, and downloaded
 * through a temporary anchor element.
 */
export async function downloadReport(answers: Answers, aiOutputs: AiOutputs, scoreResult: ScoreResult, reportAnalysis: AiReportAnalysis | null = null) {
  const report = buildReportData(answers, aiOutputs, scoreResult, { reportAnalysis });
  const pdfDocument = createElement(ReportDocument, { report }) as unknown as Parameters<typeof pdf>[0];
  const blob = await pdf(pdfDocument).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "MSI360-Risk-Score-Report.pdf";
  link.click();
  URL.revokeObjectURL(url);
}
