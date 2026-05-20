import { useEffect, useMemo, useRef, useState } from "react";
import { onboardingQuestionIds, questionIds } from "./app/questionAssets";
import type { StepId } from "./app/types";
import { languages, questions } from "./data/catalog";
import { isRtlLanguage } from "./data/languages";
import { translations } from "./data/translations";
import { getAppText } from "./data/translationText";
import { createPreAnswerSkippedAfterTaskFallback, generateReportAnalysis, interpretTextAnswer, preAnswerQuestions } from "./logic/ai";
import { getAiFallbackToastKinds, getAiFallbackToastMessage, isTaskAnalysisRequestFallback, type AiFallbackToastKind } from "./logic/ai/fallbackToast";
import { applyAnswer, applyDraftAnswer, findNextAssessmentIndexAfterCommit, getAssessmentQuestions, getDisplayedAssessmentAnswer, isQuestionAnswered } from "./logic/questionnaire/assessmentFlow";
import { getPreAnswerCandidateQuestions, getProgressStep, getQuestionById, getSortedVisibleQuestions, getTaskSummary, toAnswers, withoutKeys } from "./logic/questionnaire/flow";
import { recomputeTags } from "./logic/questionnaire/questionRouting";
import { scoreAssessment } from "./logic/scoring/scoreAssessment";
import { AssessmentQuestionScreen } from "./ui/screens/AssessmentScreen";
import { ChoiceScreen, DescriptionScreen, IntroScreen, LanguageScreen, TextScreen } from "./ui/screens/OnboardingScreens";
import { CompleteScreen, EmailScreen, ReportReadyScreen, ScoreScreen, SubmitScreen } from "./ui/screens/ResultScreens";
import type { AiOutputs, AiReportAnalysis, Answers, AnswerValue, Question, QuestionType, ScoreResult, Translation } from "./types";

export { getActionButtonState } from "./ui/components/ActionButtons";

interface AiFallbackToast {
  id: number;
  message: string;
}

/**
 * Root component and state coordinator for the MSI360 prototype.
 *
 * Responsibilities:
 * - render the current screen in the single-page assessment flow
 * - keep committed answers, draft assessment answers, active routing tags, and
 *   AI outputs synchronized
 * - trigger optional Gemini interpretation/pre-answer/report-analysis passes
 * - score the assessment and pass report inputs to the PDF generator
 *
 * There is intentionally no backend state in this prototype. A future team can
 * introduce persistence by replacing these local state updates with a store or
 * API layer while preserving the same `Answers`, `AiOutputs`, and `ScoreResult`
 * contracts.
 */
export default function App() {
  const [step, setStep] = useState<StepId>("intro");
  const [assessmentIndex, setAssessmentIndex] = useState(0);
  const [language, setLanguage] = useState("en");
  const [answers, setAnswers] = useState<Answers>({});
  const [aiOutputs, setAiOutputs] = useState<AiOutputs>({});
  const [activeTags, setActiveTags] = useState<string[]>(["start"]);
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  const [status, setStatus] = useState("");
  const [isInterpretingTaskDescription, setIsInterpretingTaskDescription] = useState(false);
  const [email, setEmail] = useState("");
  const [nextAssessmentChoice, setNextAssessmentChoice] = useState("");
  const [autoAnsweredQuestionIds, setAutoAnsweredQuestionIds] = useState<string[]>([]);
  const [draftAssessmentAnswers, setDraftAssessmentAnswers] = useState<Answers>({});
  const [reportAnalysis, setReportAnalysis] = useState<AiReportAnalysis | null>(null);
  const [toastQueue, setToastQueue] = useState<AiFallbackToast[]>([]);
  const [activeToast, setActiveToast] = useState<AiFallbackToast | null>(null);
  const nextToastId = useRef(1);
  const reportAnalysisRequestId = useRef(0);

  useEffect(() => {
    if (activeToast || !toastQueue.length) return;
    const [nextToast, ...remainingToasts] = toastQueue;
    setActiveToast(nextToast);
    setToastQueue(remainingToasts);
  }, [activeToast, toastQueue]);

  useEffect(() => {
    if (!activeToast) return;
    const timerId = window.setTimeout(() => setActiveToast(null), 4200);
    return () => window.clearTimeout(timerId);
  }, [activeToast]);

  const t = translations[language] || translations.en;
  const isRtl = isRtlLanguage(language);
  const selectedLanguage = languages.find((item) => item.code === language) || null;
  const visibleQuestions = useMemo(() => {
    return getSortedVisibleQuestions(activeTags);
  }, [activeTags]);
  const assessmentQuestions = getAssessmentQuestions(visibleQuestions, onboardingQuestionIds, autoAnsweredQuestionIds);
  const safeAssessmentIndex = Math.min(assessmentIndex, Math.max(assessmentQuestions.length - 1, 0));
  const currentAssessmentQuestion = assessmentQuestions[safeAssessmentIndex];
  const displayedAssessmentAnswer = currentAssessmentQuestion ? getDisplayedAssessmentAnswer(currentAssessmentQuestion.question_id, answers, draftAssessmentAnswers) : undefined;
  const totalQuestionSteps = Math.max(5 + assessmentQuestions.length, 5);
  const progressStep = getProgressStep(step, safeAssessmentIndex, totalQuestionSteps);
  const result = scoreResult || scoreAssessment(answers);
  const taskDescriptionValue = answers[questionIds.taskDescription]?.value;
  const canContinueRole = isQuestionAnswered(getQuestionById(questionIds.role), answers[questionIds.role]);
  const canContinueTimeInRole = isQuestionAnswered(getQuestionById(questionIds.timeInRole), answers[questionIds.timeInRole]);
  const canContinueTaskDescription = isQuestionAnswered(getQuestionById(questionIds.taskDescription), answers[questionIds.taskDescription]);
  const canContinueHeight = isQuestionAnswered(getQuestionById(questionIds.height), answers[questionIds.height]);
  const canContinueAssessmentQuestion = currentAssessmentQuestion ? isQuestionAnswered(currentAssessmentQuestion, displayedAssessmentAnswer) : true;

  /**
   * Commits or clears an onboarding answer and invalidates dependent derived data.
   *
   * The task description drives AI routing and hidden auto-answers. If it
   * changes, dependent AI output and pre-answered assessment answers must be
   * removed so stale routing cannot leak into the next path or PDF report.
   */
  function updateAnswer(questionId: string, type: QuestionType, value: AnswerValue) {
    const isTaskDescriptionUpdate = questionId === questionIds.taskDescription;
    const shouldResetReportAnalysis = onboardingQuestionIds.has(questionId);
    const nextAiOutputs = isTaskDescriptionUpdate ? withoutKeys(aiOutputs, [questionIds.taskDescription]) : aiOutputs;
    const nextAutoAnsweredQuestionIds = isTaskDescriptionUpdate ? [] : autoAnsweredQuestionIds.filter((id) => id !== questionId);
    const baseAnswers = isTaskDescriptionUpdate ? withoutKeys(answers, autoAnsweredQuestionIds) : answers;
    const nextAnswers = applyAnswer(baseAnswers, questionId, type, value);

    const nextTags = recomputeTags(nextAnswers, nextAiOutputs);
    setAnswers(nextAnswers);
    setAiOutputs(nextAiOutputs);
    setAutoAnsweredQuestionIds(nextAutoAnsweredQuestionIds);
    if (isTaskDescriptionUpdate) setDraftAssessmentAnswers({});
    if (shouldResetReportAnalysis) {
      reportAnalysisRequestId.current += 1;
      setReportAnalysis(null);
    }
    setActiveTags(nextTags);
    setScoreResult(null);
  }

  /**
   * Advances the fixed onboarding screens.
   *
   * Continuing past the task-description screen runs AI interpretation and
   * optional pre-answering before moving to height. Continuing past height starts
   * the optional report-analysis request in the background.
   */
  async function continueFromStep() {
    setStatus("");
    if (step === "intro") return setStep("language");
    if (step === "language") return setStep("role");
    if (step === "role") return setStep("time_in_role");
    if (step === "time_in_role") return setStep("description");
    if (step === "description") return setStep("task_description");
    if (step === "task_description") {
      if (isInterpretingTaskDescription) return;
      const taskQuestion = questions.find((question) => question.question_id === questionIds.taskDescription);
      const response = answers[questionIds.taskDescription]?.value;
      if (taskQuestion && typeof response === "string" && response.trim()) {
        setIsInterpretingTaskDescription(true);
        try {
          const output = await interpretTextAnswer(taskQuestion, response);
          const nextAiOutputs = { ...aiOutputs, [questionIds.taskDescription]: output };
          const answersWithoutPreviousAutoAnswers = withoutKeys(answers, autoAnsweredQuestionIds);
          const routedTags = recomputeTags(answersWithoutPreviousAutoAnswers, nextAiOutputs);
          setAiOutputs(nextAiOutputs);
          setActiveTags(routedTags);
          if (output.missing_details.length) setStatus(`ErgoCheck may ask about: ${output.missing_details.join(", ")}.`);

          const candidateQuestions = getPreAnswerCandidateQuestions(routedTags, answersWithoutPreviousAutoAnswers);
          const preAnswerOutput = isTaskAnalysisRequestFallback(output)
            ? createPreAnswerSkippedAfterTaskFallback()
            : await preAnswerQuestions(candidateQuestions, response, answersWithoutPreviousAutoAnswers);
          const autoAnswers = toAnswers(preAnswerOutput.auto_answers);
          const nextAutoAnsweredQuestionIds = preAnswerOutput.auto_answers.map((answer) => answer.question_id);
          const nextAnswers = { ...answersWithoutPreviousAutoAnswers, ...autoAnswers };
          const fallbackToastKinds = getAiFallbackToastKinds(output, preAnswerOutput);
          if (fallbackToastKinds.length) queueAiFallbackToasts(fallbackToastKinds, t);

          setAnswers(nextAnswers);
          setAiOutputs(nextAiOutputs);
          setAutoAnsweredQuestionIds(nextAutoAnsweredQuestionIds);
          setActiveTags(recomputeTags(nextAnswers, nextAiOutputs));
        } finally {
          setIsInterpretingTaskDescription(false);
        }
      }
      return setStep("height");
    }
    if (step === "height") {
      startReportAnalysis(answers, aiOutputs);
      setAssessmentIndex(0);
      return setStep("assessment");
    }
  }

  /**
   * Starts the optional Gemini report-analysis request.
   *
   * The request is fire-and-forget. The report can still be downloaded without
   * it, and the request ID prevents late responses from older onboarding answers
   * from appearing in a newer report.
   */
  function startReportAnalysis(nextAnswers: Answers, nextAiOutputs: AiOutputs) {
    const hasOnboardingAnswers = [questionIds.role, questionIds.timeInRole, questionIds.taskDescription, questionIds.height].every((questionId) =>
      isQuestionAnswered(getQuestionById(questionId), nextAnswers[questionId])
    );
    if (!hasOnboardingAnswers) return;

    const requestId = reportAnalysisRequestId.current + 1;
    reportAnalysisRequestId.current = requestId;
    void generateReportAnalysis(nextAnswers, nextAiOutputs)
      .then((analysis) => {
        if (reportAnalysisRequestId.current === requestId) setReportAnalysis(analysis);
      })
      .catch(() => {
        // Report analysis is optional; PDF generation continues without it.
      });
  }

  /**
   * Adds one or more AI fallback notices to the toast queue.
   */
  function queueAiFallbackToasts(kinds: AiFallbackToastKind[], activeTranslations = t) {
    setToastQueue((queuedToasts) => [
      ...queuedToasts,
      ...kinds.map((kind) => ({
        id: nextToastId.current++,
        message: getAiFallbackToastMessage(activeTranslations, kind)
      }))
    ]);
  }

  /**
   * Moves backward through the current flow while discarding uncommitted drafts
   * for assessment questions.
   */
  function goBack() {
    setStatus("");
    if (step === "language") return setStep("intro");
    if (step === "role") return setStep("language");
    if (step === "time_in_role") return setStep("role");
    if (step === "description") return setStep("time_in_role");
    if (step === "task_description") return setStep("description");
    if (step === "height") return setStep("task_description");
    if (step === "assessment") {
      if (currentAssessmentQuestion) {
        setDraftAssessmentAnswers((draftAnswers) => withoutKeys(draftAnswers, [currentAssessmentQuestion.question_id]));
      }
      if (safeAssessmentIndex <= 0) return setStep("height");
      return setAssessmentIndex((index) => Math.max(index - 1, 0));
    }
    if (step === "score") {
      setAssessmentIndex(Math.max(assessmentQuestions.length - 1, 0));
      return setStep("assessment");
    }
    if (step === "email") return setStep("score");
    if (step === "report") return setStep("email");
    if (step === "submit") return setStep("report");
  }

  /**
   * Commits the current assessment draft, recomputes routing, and chooses the
   * next assessment question.
   *
   * Assessment answers are drafted until Continue is clicked. Committing here
   * avoids rerouting the current question while the worker is still changing a
   * selection.
   */
  function continueAssessment() {
    if (!currentAssessmentQuestion) {
      const nextResult = scoreAssessment(answers);
      setScoreResult(nextResult);
      setStep("score");
      return;
    }

    if (!displayedAssessmentAnswer) return;

    const nextAnswers = applyAnswer(answers, currentAssessmentQuestion.question_id, currentAssessmentQuestion.type, displayedAssessmentAnswer.value);
    const nextDraftAssessmentAnswers = withoutKeys(draftAssessmentAnswers, [currentAssessmentQuestion.question_id]);
    const nextTags = recomputeTags(nextAnswers, aiOutputs);
    const nextVisibleQuestions = getSortedVisibleQuestions(nextTags);
    const nextAssessmentQuestions = getAssessmentQuestions(nextVisibleQuestions, onboardingQuestionIds, autoAnsweredQuestionIds);
    const nextAssessmentIndex = findNextAssessmentIndexAfterCommit(assessmentQuestions, nextAssessmentQuestions, currentAssessmentQuestion.question_id, nextAnswers);

    setAnswers(nextAnswers);
    setDraftAssessmentAnswers(nextDraftAssessmentAnswers);
    setActiveTags(nextTags);
    setScoreResult(null);

    if (nextAssessmentIndex !== null) {
      setAssessmentIndex(nextAssessmentIndex);
      return;
    }

    const nextResult = scoreAssessment(nextAnswers);
    setScoreResult(nextResult);
    setStep("score");
  }

  /**
   * Updates the draft answer for the currently displayed assessment question.
   */
  function setAssessmentAnswer(question: Question, value: AnswerValue) {
    setDraftAssessmentAnswers((draftAnswers) => applyDraftAnswer(draftAnswers, question.question_id, question.type, value));
  }

  /**
   * Reuses the latest score result, builds report data, and downloads the PDF.
   */
  async function handleDownloadReport() {
    const nextResult = scoreResult || scoreAssessment(answers);
    setScoreResult(nextResult);
    const { downloadReport } = await import("./report/reportActions");
    await downloadReport(answers, aiOutputs, nextResult, reportAnalysis);
  }

  /**
   * Clears all local state for a fresh assessment.
   */
  function startNewAssessment() {
    setAnswers({});
    setAiOutputs({});
    setActiveTags(["start"]);
    setScoreResult(null);
    setAssessmentIndex(0);
    setStatus("");
    setIsInterpretingTaskDescription(false);
    setEmail("");
    setNextAssessmentChoice("");
    setAutoAnsweredQuestionIds([]);
    setDraftAssessmentAnswers({});
    setReportAnalysis(null);
    reportAnalysisRequestId.current += 1;
    setToastQueue([]);
    setActiveToast(null);
    setStep("intro");
  }

  return (
    <main className="app-shell">
      {step === "intro" && <IntroScreen onContinue={continueFromStep} />}

      {step === "language" && (
        <LanguageScreen
          languages={languages}
          selectedLanguage={selectedLanguage}
          progressStep={progressStep}
          totalSteps={totalQuestionSteps}
          translations={t}
          onSelect={(nextLanguage) => setLanguage(nextLanguage?.code || "")}
          onBack={goBack}
          onContinue={continueFromStep}
        />
      )}

      {step === "role" && (
        <ChoiceScreen
          questionId={questionIds.role}
          answer={answers[questionIds.role]}
          progressStep={progressStep}
          totalSteps={totalQuestionSteps}
          tone="blue"
          translations={t}
          isRtl={isRtl}
          onAnswer={(value) => updateAnswer(questionIds.role, "multi_choice", value)}
          onBack={goBack}
          canContinue={canContinueRole}
          onContinue={continueFromStep}
        />
      )}

      {step === "time_in_role" && (
        <ChoiceScreen
          questionId={questionIds.timeInRole}
          answer={answers[questionIds.timeInRole]}
          progressStep={progressStep}
          totalSteps={totalQuestionSteps}
          tone="blue"
          translations={t}
          isRtl={isRtl}
          onAnswer={(value) => updateAnswer(questionIds.timeInRole, "multi_choice", value)}
          onBack={goBack}
          canContinue={canContinueTimeInRole}
          onContinue={continueFromStep}
        />
      )}

      {step === "description" && <DescriptionScreen progressStep={progressStep} totalSteps={totalQuestionSteps} translations={t} onBack={goBack} onContinue={continueFromStep} />}

      {step === "task_description" && (
        <TextScreen
          questionId={questionIds.taskDescription}
          value={typeof taskDescriptionValue === "string" ? taskDescriptionValue : ""}
          status={status}
          isLoading={isInterpretingTaskDescription}
          progressStep={progressStep}
          totalSteps={totalQuestionSteps}
          translations={t}
          onAnswer={(value) => updateAnswer(questionIds.taskDescription, "text", value)}
          onBack={goBack}
          canContinue={canContinueTaskDescription}
          onContinue={continueFromStep}
        />
      )}

      {step === "height" && (
        <ChoiceScreen
          questionId={questionIds.height}
          answer={answers[questionIds.height]}
          progressStep={progressStep}
          totalSteps={totalQuestionSteps}
          tone="blue"
          translations={t}
          isRtl={isRtl}
          onAnswer={(value) => updateAnswer(questionIds.height, "multi_choice", value)}
          onBack={goBack}
          canContinue={canContinueHeight}
          onContinue={continueFromStep}
        />
      )}

      {step === "assessment" && (
        <AssessmentQuestionScreen
          question={currentAssessmentQuestion}
          answer={displayedAssessmentAnswer}
          progressStep={progressStep}
          totalSteps={totalQuestionSteps}
          translations={t}
          isRtl={isRtl}
          onAnswer={(value) => currentAssessmentQuestion && setAssessmentAnswer(currentAssessmentQuestion, value)}
          onBack={goBack}
          canContinue={canContinueAssessmentQuestion}
          onContinue={continueAssessment}
        />
      )}

      {step === "score" && <ScoreScreen result={result} progressStep={totalQuestionSteps} totalSteps={totalQuestionSteps} translations={t} onBack={goBack} onContinue={() => setStep("email")} />}

      {step === "email" && <EmailScreen value={email} translations={t} isRtl={isRtl} onChange={setEmail} onBack={goBack} onContinue={() => setStep("report")} />}

      {step === "report" && (
        <ReportReadyScreen
          result={result}
          email={email}
          taskSummary={getTaskSummary(answers)}
          progressStep={totalQuestionSteps}
          totalSteps={totalQuestionSteps}
          translations={t}
          isRtl={isRtl}
          onDownload={() => void handleDownloadReport()}
          onEmail={() => setStep("email")}
          onDone={() => setStep("submit")}
        />
      )}

      {step === "submit" && (
        <SubmitScreen value={nextAssessmentChoice} translations={t} isRtl={isRtl} onChange={setNextAssessmentChoice} onBack={goBack} onSubmit={() => setStep("complete")} />
      )}

      {step === "complete" && <CompleteScreen translations={t} isRtl={isRtl} onStartNew={startNewAssessment} />}

      <AiFallbackToast toast={activeToast} translations={t} onDismiss={() => setActiveToast(null)} />
    </main>
  );
}

/**
 * Small queued toast used when an attempted Gemini path falls back to local or
 * non-pruned behavior.
 */
function AiFallbackToast({ toast, translations: activeTranslations, onDismiss }: { toast: AiFallbackToast | null; translations: Translation; onDismiss: () => void }) {
  if (!toast) return null;

  return (
    <div className="ai-fallback-toast" role="status" aria-live="polite">
      <span>{toast.message}</span>
      <button
        type="button"
        className="ai-fallback-toast-close"
        aria-label={getAppText(activeTranslations, "ai_fallback_toast_dismiss", "Dismiss AI fallback notice")}
        onClick={onDismiss}
      >
        X
      </button>
    </div>
  );
}
