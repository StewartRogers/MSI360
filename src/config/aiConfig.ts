declare const __MSI360_TEST_GEMINI_TIMEOUT_MS__: number | undefined;

/**
 * Central knobs for Gemini requests and local AI fallbacks.
 *
 * Keep user-visible survey behavior in feature modules, but put timing,
 * confidence, and response-shaping values here so prototype tuning does not
 * require hunting through the app.
 */
export const defaultGeminiModel = "gemini-2.5-flash";
export const geminiRequestTimeoutMs = typeof __MSI360_TEST_GEMINI_TIMEOUT_MS__ === "number" ? __MSI360_TEST_GEMINI_TIMEOUT_MS__ : 10000;
export const taskInterpretationTemperature = 0.1;
export const preAnswerTemperature = 0;
export const preAnswerConfidenceThreshold = 0.9;
export const reportAnalysisTemperature = 0.2;
export const reportAnalysisRequestTimeoutMs = 60000;
export const reportAnalysisMaxCharacters = 750;
export const reportAnalysisWordRange = {
  minimum: 80,
  maximum: 115
};

export const taskFallbackProvider = "client-keyword-fallback";
export const noPreAnswerProvider = "client-no-preanswer";

export const taskFallbackConfidence = {
  none: 0.35,
  occupationOnly: 0.55,
  taskCue: 0.65
};

export const taskFallbackMissingDetails = {
  objectWeight: "Approximate object weight",
  frequencyOrDuration: "Frequency or duration",
  taskSpecifics: "Task details that affect posture, force, tools, and work pace"
};
