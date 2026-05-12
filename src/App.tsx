import { useEffect, useMemo, useRef, useState } from "react";
import { onboardingQuestionIds, questionIds } from "./app/questionAssets";
import type { StepId } from "./app/types";
import { languages, questions } from "./data/catalog";
import { translations } from "./data/translations";
import { interpretTextAnswer, preAnswerQuestions } from "./logic/ai";
import { applyAnswer, applyDraftAnswer, findNextAssessmentIndexAfterCommit, getAssessmentQuestions, getDisplayedAssessmentAnswer, isQuestionAnswered } from "./logic/assessmentFlow";
import { getPreAnswerCandidateQuestions, getProgressStep, getQuestionById, getSortedVisibleQuestions, getTaskSummary, toAnswers, withoutKeys } from "./logic/appFlow";
import { downloadReport } from "./logic/report";
import { recomputeTags } from "./logic/routing";
import { scoreAssessment } from "./logic/scoring";
import { AssessmentQuestionScreen } from "./ui/screens/AssessmentScreen";
import { ChoiceScreen, DescriptionScreen, IntroScreen, LanguageScreen, TextScreen } from "./ui/screens/OnboardingScreens";
import { CompleteScreen, EmailScreen, ReportReadyScreen, ScoreScreen, SubmitScreen } from "./ui/screens/ResultScreens";
import type { AiOutput, AiOutputs, AiPreAnswerOutput, Answers, AnswerValue, Question, QuestionType, ScoreResult } from "./types";

export { getActionButtonState } from "./ui/components/ActionButtons";

type AiFallbackToastKind = "task-analysis" | "question-pruning";

interface AiFallbackToast {
  id: number;
  message: string;
}

const aiFallbackToastMessages: Record<AiFallbackToastKind, string> = {
  "task-analysis": "AI task analysis response timed out. Local fallback is being used instead.",
  "question-pruning": "AI question pruning response timed out. Fallback follow-up questions are being used instead."
};

export function getAiFallbackToastKinds(taskOutput: Pick<AiOutput, "provider" | "notes">, preAnswerOutput: Pick<AiPreAnswerOutput, "provider" | "notes">): AiFallbackToastKind[] {
  const fallbackToastKinds: AiFallbackToastKind[] = [];
  if (taskOutput.provider === "client-keyword-fallback" && taskOutput.notes.startsWith("Gemini unavailable")) {
    fallbackToastKinds.push("task-analysis");
  }
  if (preAnswerOutput.provider === "client-no-preanswer" && preAnswerOutput.notes.startsWith("Gemini pre-answering unavailable")) {
    fallbackToastKinds.push("question-pruning");
  }
  return fallbackToastKinds;
}

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
  const [toastQueue, setToastQueue] = useState<AiFallbackToast[]>([]);
  const [activeToast, setActiveToast] = useState<AiFallbackToast | null>(null);
  const nextToastId = useRef(1);

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

  function updateAnswer(questionId: string, type: QuestionType, value: AnswerValue) {
    const isTaskDescriptionUpdate = questionId === questionIds.taskDescription;
    const nextAiOutputs = isTaskDescriptionUpdate ? withoutKeys(aiOutputs, [questionIds.taskDescription]) : aiOutputs;
    const nextAutoAnsweredQuestionIds = isTaskDescriptionUpdate ? [] : autoAnsweredQuestionIds.filter((id) => id !== questionId);
    const baseAnswers = isTaskDescriptionUpdate ? withoutKeys(answers, autoAnsweredQuestionIds) : answers;
    const nextAnswers = applyAnswer(baseAnswers, questionId, type, value);

    const nextTags = recomputeTags(nextAnswers, nextAiOutputs);
    setAnswers(nextAnswers);
    setAiOutputs(nextAiOutputs);
    setAutoAnsweredQuestionIds(nextAutoAnsweredQuestionIds);
    if (isTaskDescriptionUpdate) setDraftAssessmentAnswers({});
    setActiveTags(nextTags);
    setScoreResult(null);
  }

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
          const candidateQuestions = getPreAnswerCandidateQuestions(routedTags, answersWithoutPreviousAutoAnswers);
          const preAnswerOutput = await preAnswerQuestions(candidateQuestions, response, answersWithoutPreviousAutoAnswers);
          const autoAnswers = toAnswers(preAnswerOutput.auto_answers);
          const nextAutoAnsweredQuestionIds = preAnswerOutput.auto_answers.map((answer) => answer.question_id);
          const nextAnswers = { ...answersWithoutPreviousAutoAnswers, ...autoAnswers };
          const fallbackToastKinds = getAiFallbackToastKinds(output, preAnswerOutput);
          if (fallbackToastKinds.length) queueAiFallbackToasts(fallbackToastKinds);

          setAnswers(nextAnswers);
          setAiOutputs(nextAiOutputs);
          setAutoAnsweredQuestionIds(nextAutoAnsweredQuestionIds);
          setActiveTags(recomputeTags(nextAnswers, nextAiOutputs));
          if (output.missing_details.length) setStatus(`ErgoCheck may ask about: ${output.missing_details.join(", ")}.`);
        } finally {
          setIsInterpretingTaskDescription(false);
        }
      }
      return setStep("height");
    }
    if (step === "height") {
      setAssessmentIndex(0);
      return setStep("assessment");
    }
  }

  function queueAiFallbackToasts(kinds: AiFallbackToastKind[]) {
    setToastQueue((queuedToasts) => [
      ...queuedToasts,
      ...kinds.map((kind) => ({
        id: nextToastId.current++,
        message: aiFallbackToastMessages[kind]
      }))
    ]);
  }

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

  function setAssessmentAnswer(question: Question, value: AnswerValue) {
    setDraftAssessmentAnswers((draftAnswers) => applyDraftAnswer(draftAnswers, question.question_id, question.type, value));
  }

  async function handleDownloadReport() {
    const nextResult = scoreResult || scoreAssessment(answers);
    setScoreResult(nextResult);
    await downloadReport(answers, aiOutputs, nextResult);
  }

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
          onAnswer={(value) => updateAnswer(questionIds.timeInRole, "multi_choice", value)}
          onBack={goBack}
          canContinue={canContinueTimeInRole}
          onContinue={continueFromStep}
        />
      )}

      {step === "description" && <DescriptionScreen progressStep={progressStep} totalSteps={totalQuestionSteps} onBack={goBack} onContinue={continueFromStep} />}

      {step === "task_description" && (
        <TextScreen
          questionId={questionIds.taskDescription}
          value={typeof taskDescriptionValue === "string" ? taskDescriptionValue : ""}
          status={status}
          isLoading={isInterpretingTaskDescription}
          progressStep={progressStep}
          totalSteps={totalQuestionSteps}
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
          onAnswer={(value) => currentAssessmentQuestion && setAssessmentAnswer(currentAssessmentQuestion, value)}
          onBack={goBack}
          canContinue={canContinueAssessmentQuestion}
          onContinue={continueAssessment}
        />
      )}

      {step === "score" && <ScoreScreen result={result} progressStep={totalQuestionSteps} totalSteps={totalQuestionSteps} onBack={goBack} onContinue={() => setStep("email")} />}

      {step === "email" && <EmailScreen value={email} onChange={setEmail} onBack={goBack} onContinue={() => setStep("report")} />}

      {step === "report" && (
        <ReportReadyScreen
          result={result}
          email={email}
          taskSummary={getTaskSummary(answers)}
          progressStep={totalQuestionSteps}
          totalSteps={totalQuestionSteps}
          onDownload={() => void handleDownloadReport()}
          onEmail={() => setStep("email")}
          onDone={() => setStep("submit")}
        />
      )}

      {step === "submit" && (
        <SubmitScreen value={nextAssessmentChoice} onChange={setNextAssessmentChoice} onBack={goBack} onSubmit={() => setStep("complete")} />
      )}

      {step === "complete" && <CompleteScreen onStartNew={startNewAssessment} />}

      <AiFallbackToast toast={activeToast} onDismiss={() => setActiveToast(null)} />
    </main>
  );
}

function AiFallbackToast({ toast, onDismiss }: { toast: AiFallbackToast | null; onDismiss: () => void }) {
  if (!toast) return null;

  return (
    <div className="ai-fallback-toast" role="status" aria-live="polite">
      <span>{toast.message}</span>
      <button type="button" className="ai-fallback-toast-close" aria-label="Dismiss AI fallback notice" onClick={onDismiss}>
        X
      </button>
    </div>
  );
}
