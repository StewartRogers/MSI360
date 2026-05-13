import { pdf } from "@react-pdf/renderer";
import { createElement } from "react";
import { ReportDocument } from "../report/ReportDocument";
import { buildReportData } from "../report/reportData";
import type { AiOutputs, Answers, ScoreResult } from "../types";

export async function downloadReport(answers: Answers, aiOutputs: AiOutputs, scoreResult: ScoreResult) {
  const report = buildReportData(answers, aiOutputs, scoreResult);
  const pdfDocument = createElement(ReportDocument, { report }) as unknown as Parameters<typeof pdf>[0];
  const blob = await pdf(pdfDocument).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "MSI360-risk-report.pdf";
  link.click();
  URL.revokeObjectURL(url);
}
