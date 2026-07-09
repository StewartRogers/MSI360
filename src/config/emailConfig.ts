declare const __MSI360_TEST_EMAIL_TIMEOUT_MS__: number | undefined;

/**
 * Central knobs for the client-side "email PDF report" request.
 */
export const emailReportRequestTimeoutMs = typeof __MSI360_TEST_EMAIL_TIMEOUT_MS__ === "number" ? __MSI360_TEST_EMAIL_TIMEOUT_MS__ : 45000;
export const emailReportSubject = "Your MSI360 Risk Report";
