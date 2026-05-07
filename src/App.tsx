import { useMemo, useState } from "react";
import { languages, questions, sectionOrder } from "./data/catalog";
import { translations } from "./data/translations";
import { interpretTextAnswer } from "./logic/ai";
import { downloadReport } from "./logic/report";
import { getVisibleQuestions, recomputeTags } from "./logic/routing";
import { scoreAssessment } from "./logic/scoring";
import type { AiOutputs, Answer, Answers, AnswerValue, Language, Question, QuestionText, QuestionType, ScoreResult } from "./types";

type StepId =
  | "intro"
  | "language"
  | "role"
  | "time_in_role"
  | "description"
  | "task_description"
  | "height"
  | "assessment"
  | "score"
  | "email"
  | "report"
  | "submit"
  | "complete";

type HeaderTone = "blue" | "white";
type WrapTab = "email" | "review" | "submit";

const questionIds = {
  role: "question-1",
  timeInRole: "question-2",
  taskDescription: "question-3",
  height: "question-4",
  bodyDiscomfortAreas: "question-10",
  handheldToolContact: "question-13",
  bodyMakeshiftTool: "question-14",
  upperBodyPosture: "question-20",
  headPosition: "question-25"
} as const;

const onboardingQuestionIds = new Set<string>([questionIds.role, questionIds.timeInRole, questionIds.taskDescription, questionIds.height]);
const promptUsesSectionTitle = new Set<string>([questionIds.bodyMakeshiftTool, questionIds.handheldToolContact, questionIds.upperBodyPosture, questionIds.headPosition]);

const standaloneImages: Record<string, string> = {
  // Job context
  "question-5": "/images/indooroutdoor.png",

  // Organizational
  "question-7": "/images/input2.png",
  "question-8": "/images/input2.png",

  // Contact stress
  "question-11": "/images/lean.png",
  "question-12": "/images/kneel.jpg",
  "question-13": "/images/handletool30.jpg",
  "question-14": "/images/makeshift.png",

  // Force
  "question-15": "/images/trolley.jpg",
  "question-16": "/images/dolly.png",
  "question-17": "/images/avg_weight.png",
  "question-18": "/images/thumb.png",
  "question-19": "/images/assist.png",

  // Awkward postures
  "question-20": "/images/neutralleaning.png",
  "question-21": "/images/twisting.png",
  "question-22": "/images/bodyUpdated.png",
  "question-23": "/images/armstretch.jpg",
  "question-24": "/images/armsoutstretched.png",
  "question-25": "/images/headPics.png",
  "question-26": "/images/figure.png",
  "question-27": "/images/hand.png",
  "question-28": "/images/objectClose.png",

  // Repetition
  "question-29": "/images/similar.jpg",
  "question-30": "/images/figure.png",
  "question-31": "/images/morethan15.png",
  "question-32": "/images/muscularforce.jpg",
  "question-33": "/images/pinch2lb.png",
  "question-34": "/images/powerGrip.png",
  "question-35": "/images/hand_body.png",
  "question-36": "/images/surface.png",

  // Environmental
  "question-37": "/images/hearing.jpg",
  "question-38": "/images/sunglare.jpg",
  "question-39": "/images/detail.jpg",
  "question-40": "/images/cold.jpeg"
};

const groupImages: Record<string, Record<string, string>> = {
  [questionIds.upperBodyPosture]: {
    forward_backward: "/images/lean-forward.png",
    sideways: "/images/lean-sideways.png"
  }
};

const optionImages: Record<string, Record<string, string>> = {
  [questionIds.headPosition]: {
    neutral: "/images/head-neutral.png",
    slight_tilt: "/images/head-slight-tilt.png",
    deep_tilt: "/images/head-deep-tilt.png"
  }
};

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

  const t = translations[language] || translations.en;
  const selectedLanguage = languages.find((item) => item.code === language) || null;
  const visibleQuestions = useMemo(() => {
    const visible = getVisibleQuestions(activeTags);
    return visible.sort((a, b) => sectionOrder.indexOf(a.section) - sectionOrder.indexOf(b.section));
  }, [activeTags]);
  const assessmentQuestions = visibleQuestions.filter((question) => !onboardingQuestionIds.has(question.question_id));
  const safeAssessmentIndex = Math.min(assessmentIndex, Math.max(assessmentQuestions.length - 1, 0));
  const currentAssessmentQuestion = assessmentQuestions[safeAssessmentIndex];
  const totalQuestionSteps = Math.max(5 + assessmentQuestions.length, 5);
  const progressStep = getProgressStep(step, safeAssessmentIndex, totalQuestionSteps);
  const result = scoreResult || scoreAssessment(answers);
  const taskDescriptionValue = answers[questionIds.taskDescription]?.value;
  const canContinueRole = isQuestionAnswered(getQuestionById(questionIds.role), answers[questionIds.role]);
  const canContinueTimeInRole = isQuestionAnswered(getQuestionById(questionIds.timeInRole), answers[questionIds.timeInRole]);
  const canContinueTaskDescription = isQuestionAnswered(getQuestionById(questionIds.taskDescription), answers[questionIds.taskDescription]);
  const canContinueHeight = isQuestionAnswered(getQuestionById(questionIds.height), answers[questionIds.height]);
  const canContinueAssessmentQuestion = currentAssessmentQuestion ? isQuestionAnswered(currentAssessmentQuestion, answers[currentAssessmentQuestion.question_id]) : true;

  function updateAnswer(questionId: string, type: QuestionType, value: AnswerValue) {
    const nextAnswers = { ...answers };
    if (isEmptyAnswerValue(value)) {
      delete nextAnswers[questionId];
    } else {
      nextAnswers[questionId] = { type, value };
    }
    const nextTags = recomputeTags(nextAnswers, aiOutputs);
    setAnswers(nextAnswers);
    setActiveTags(nextTags);
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
          setAiOutputs(nextAiOutputs);
          setActiveTags(recomputeTags(answers, nextAiOutputs));
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

  function goBack() {
    setStatus("");
    if (step === "language") return setStep("intro");
    if (step === "role") return setStep("language");
    if (step === "time_in_role") return setStep("role");
    if (step === "description") return setStep("time_in_role");
    if (step === "task_description") return setStep("description");
    if (step === "height") return setStep("task_description");
    if (step === "assessment") {
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

    if (safeAssessmentIndex < assessmentQuestions.length - 1) {
      setAssessmentIndex(safeAssessmentIndex + 1);
      return;
    }

    const nextResult = scoreAssessment(answers);
    setScoreResult(nextResult);
    setStep("score");
  }

  function setAssessmentAnswer(question: Question, value: AnswerValue) {
    updateAnswer(question.question_id, question.type, value);
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
          answer={currentAssessmentQuestion ? answers[currentAssessmentQuestion.question_id] : undefined}
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
    </main>
  );
}

function IntroScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <>
      <AppHeader tone="blue" />
      <section className="page page-intro">
        <h1>Check Your Muscle And Strain Injury Risk</h1>
        <p>Answer simple questions about your work task. Get a risk summary you can save, print, or share.</p>
        <div className="feature-list" aria-label="MSI360 features">
          <div>About 10 minutes</div>
          <div>No login required</div>
          <div>You choose what to share</div>
        </div>
        <div className="intro-actions">
          <button className="primary-button" onClick={onContinue}>
            Start
          </button>
          <a className="msi-link" href="https://www.worksafebc.com/en/health-safety/hazards-exposures/ergonomics" target="_blank" rel="noreferrer">
            What is an MSI?
          </a>
        </div>
      </section>
    </>
  );
}

function LanguageScreen(props: {
  languages: Language[];
  selectedLanguage: Language | null;
  progressStep: number;
  totalSteps: number;
  onSelect: (language: Language | null) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCode = props.selectedLanguage?.code || "";

  function handleLanguageSelect(nextLanguage: Language) {
    if (selectedCode === nextLanguage.code) {
      props.onSelect(null);
      return;
    }
    props.onSelect(nextLanguage);
    setIsOpen(false);
  }

  return (
    <>
      <AppHeader tone="blue" progressStep={props.progressStep} totalSteps={props.totalSteps} />
      <section className="page page-with-actions language-page">
        <div className="content-block">
          <h2>Choose Your Language</h2>
          <p className="body-copy">Questions can be shown in your preferred language. The report is generated in English.</p>
          <div className="language-select-block">
            <label className="field-label" htmlFor="language-select">
              Language
            </label>
            <button
              id="language-select"
              type="button"
              className={`language-select-button ${isOpen ? "open" : ""} ${props.selectedLanguage ? "" : "placeholder"}`}
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span>{props.selectedLanguage ? `${props.selectedLanguage.flag} ${props.selectedLanguage.name}` : "Select a language"}</span>
            </button>
            {isOpen && (
              <div className="language-menu" role="listbox" aria-labelledby="language-select">
                {props.languages.map((language) => {
                  const isSelected = selectedCode === language.code;
                  return (
                    <button
                      key={language.code}
                      type="button"
                      className={`language-option ${isSelected ? "selected" : ""}`}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleLanguageSelect(language)}
                    >
                      <span>{language.flag} {language.name}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <ActionButtons onBack={props.onBack} canContinue={Boolean(props.selectedLanguage)} onContinue={props.onContinue} />
      </section>
    </>
  );
}

function ChoiceScreen(props: {
  questionId: string;
  answer?: Answer;
  progressStep: number;
  totalSteps: number;
  tone: HeaderTone;
  onAnswer: (value: string) => void;
  onBack: () => void;
  canContinue: boolean;
  onContinue: () => void;
}) {
  const question = questions.find((item) => item.question_id === props.questionId);
  const text = translations.en.questions[props.questionId];
  const selected = typeof props.answer?.value === "string" ? props.answer.value : "";

  if (!question || !question.options || !text.options) return null;

  return (
    <>
      <AppHeader tone={props.tone} progressStep={props.progressStep} totalSteps={props.totalSteps} />
      <section className="page page-with-actions">
        <div className="content-block">
          <h2>{text.label}</h2>
          <div className="answer-list">
            {question.options.map((option) => (
              <RadioRow
                key={option.option_id}
                name={props.questionId}
                checked={selected === option.option_id}
                label={text.options?.[option.option_id] || option.option_id}
                onChange={() => props.onAnswer(toggleSingleOption(selected, option.option_id))}
              />
            ))}
          </div>
        </div>
        <ActionButtons onBack={props.onBack} canContinue={props.canContinue} onContinue={props.onContinue} />
      </section>
    </>
  );
}

function DescriptionScreen(props: { progressStep: number; totalSteps: number; onBack: () => void; onContinue: () => void }) {
  return (
    <>
      <AppHeader tone="blue" progressStep={props.progressStep} totalSteps={props.totalSteps} />
      <section className="page page-with-actions">
        <div className="content-block description-copy">
          <h2>Description</h2>
          <p>
            The following questions are about the work you do during a typical workday or when you're completing the specific task or activity you'd like to assess today. The intent is for you to tell MSI360 about the actions you perform to get your work done.
          </p>
        </div>
        <ActionButtons onBack={props.onBack} onContinue={props.onContinue} />
      </section>
    </>
  );
}

function TextScreen(props: {
  questionId: string;
  value: string;
  status: string;
  isLoading: boolean;
  progressStep: number;
  totalSteps: number;
  onAnswer: (value: string) => void;
  onBack: () => void;
  canContinue: boolean;
  onContinue: () => void;
}) {
  const text = translations.en.questions[props.questionId];
  return (
    <>
      <AppHeader tone="blue" progressStep={props.progressStep} totalSteps={props.totalSteps} />
      <section className="page page-with-actions">
        <div className="content-block">
          <h2>{text.label}</h2>
          {text.help_text && <p className="question-help">{text.help_text}</p>}
          <input
            className="single-input"
            value={props.value}
            onChange={(event) => props.onAnswer(event.target.value)}
            aria-label={text.label}
            disabled={props.isLoading}
          />
          {props.isLoading ? (
            <div className="loading-status" role="status" aria-live="polite">
              <span className="loading-spinner" aria-hidden="true" />
              <span>Analyzing your task description...</span>
            </div>
          ) : (
            props.status && <p className="small-status">{props.status}</p>
          )}
        </div>
        <ActionButtons
          onBack={props.onBack}
          canContinue={props.canContinue}
          isBusy={props.isLoading}
          busyLabel="Analyzing"
          onContinue={props.onContinue}
        />
      </section>
    </>
  );
}

function AssessmentQuestionScreen(props: {
  question?: Question;
  answer?: Answer;
  progressStep: number;
  totalSteps: number;
  translations: typeof translations.en;
  onAnswer: (value: AnswerValue) => void;
  onBack: () => void;
  canContinue: boolean;
  onContinue: () => void;
}) {
  if (!props.question) {
    return (
      <>
        <AppHeader tone="blue" progressStep={props.progressStep} totalSteps={props.totalSteps} compact />
        <section className="page page-with-actions">
          <div className="content-block">
            <h2>No additional questions are needed.</h2>
          </div>
          <ActionButtons onBack={props.onBack} canContinue={props.canContinue} onContinue={props.onContinue} />
        </section>
      </>
    );
  }

  return (
    <>
      <AppHeader tone="blue" progressStep={props.progressStep} totalSteps={props.totalSteps} compact />
      <section className={`page page-with-actions question-page question-${props.question.question_id}`}>
        <QuestionContent question={props.question} answer={props.answer} translations={props.translations} onAnswer={props.onAnswer} />
        <ActionButtons onBack={props.onBack} canContinue={props.canContinue} onContinue={props.onContinue} />
      </section>
    </>
  );
}

function QuestionContent({ question, answer, translations: t, onAnswer }: { question: Question; answer?: Answer; translations: typeof translations.en; onAnswer: (value: AnswerValue) => void }) {
  const text = t.questions[question.question_id] || translations.en.questions[question.question_id];
  if (!text) return null;

  return (
    <div className="content-block">
      <QuestionPrompt question={question} text={text} sectionTitle={t.sections[question.section] || question.section} />
      {standaloneImages[question.question_id] && <img className="question-illustration" src={standaloneImages[question.question_id]} alt="" />}
      <QuestionAnswer question={question} text={text} answer={answer} onAnswer={onAnswer} />
    </div>
  );
}

function QuestionPrompt({ question, text, sectionTitle }: { question: Question; text: QuestionText; sectionTitle: string }) {
  const paragraphs = splitParagraphs(text.label);

  if (promptUsesSectionTitle.has(question.question_id) || (question.section !== "intro" && paragraphs[0]?.length > 130)) {
    return (
      <div className="prompt-block">
        <h2>{sectionTitle}</h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="question-copy">
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  if (question.question_id === questionIds.bodyDiscomfortAreas) {
    return (
      <div className="prompt-block prompt-as-title">
        {paragraphs.map((paragraph) => (
          <h2 key={paragraph}>{paragraph}</h2>
        ))}
      </div>
    );
  }

  return (
    <div className="prompt-block">
      <h2>{paragraphs[0]}</h2>
      {paragraphs.slice(1).map((paragraph) => (
        <p key={paragraph} className="question-copy">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function QuestionAnswer({ question, text, answer, onAnswer }: { question: Question; text: QuestionText; answer?: Answer; onAnswer: (value: AnswerValue) => void }) {
  if (question.type === "multi_choice" && question.options && text.options) {
    const selected = typeof answer?.value === "string" ? answer.value : "";
    const images = optionImages[question.question_id];

    if (images) {
      return (
        <div className="image-radio-list">
          {question.options.map((option) => (
            <ImageRadioCard
              key={option.option_id}
              name={question.question_id}
              checked={selected === option.option_id}
              label={text.options?.[option.option_id] || option.option_id}
              image={images[option.option_id]}
              onChange={() => onAnswer(toggleSingleOption(selected, option.option_id))}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="answer-list">
        {question.options.map((option) => (
          <RadioRow
            key={option.option_id}
            name={question.question_id}
            checked={selected === option.option_id}
            label={text.options?.[option.option_id] || option.option_id}
            onChange={() => onAnswer(toggleSingleOption(selected, option.option_id))}
          />
        ))}
      </div>
    );
  }

  if (question.type === "select_all" && question.options && text.options) {
    const selected = Array.isArray(answer?.value) ? answer.value : [];
    const hasExclusive = question.options.some((option) => option.exclusive && selected.includes(option.option_id));
    const hasNonExclusive = question.options.some((option) => !option.exclusive && selected.includes(option.option_id));

    return (
      <div className="answer-list">
        {question.options.map((option) => (
          <CheckboxRow
            key={option.option_id}
            checked={selected.includes(option.option_id)}
            disabled={(Boolean(option.exclusive) && hasNonExclusive) || (!option.exclusive && hasExclusive)}
            label={text.options?.[option.option_id] || option.option_id}
            onChange={() => onAnswer(toggleOption(selected, option.option_id, Boolean(option.exclusive)))}
          />
        ))}
      </div>
    );
  }

  if (question.type === "grouped_multi_choice" && question.groups && text.groups) {
    const value = isRecord(answer?.value) ? answer.value : {};
    const images = groupImages[question.question_id] || {};

    return (
      <div className="group-card-list">
        {question.groups.map((group) => {
          const groupAnswer = value[group.group_id];
          const selected = typeof groupAnswer === "string" ? groupAnswer : "";
          return (
            <section key={group.group_id} className="question-card">
              <h3>{text.groups?.[group.group_id]?.label || group.group_id}</h3>
              {images[group.group_id] && <img className="card-image" src={images[group.group_id]} alt="" />}
              <div className="answer-list compact">
                {group.options.map((option) => (
                  <RadioRow
                    key={option.option_id}
                    name={`${question.question_id}-${group.group_id}`}
                    checked={selected === option.option_id}
                    label={text.groups?.[group.group_id]?.options[option.option_id] || option.option_id}
                    onChange={() => onAnswer(setGroupAnswerValue(value, group.group_id, toggleSingleOption(selected, option.option_id)))}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    );
  }

  if (question.type === "grouped_select_all" && question.groups && text.groups) {
    const value = isRecord(answer?.value) ? answer.value : {};

    return (
      <div className="group-card-list">
        {question.groups.map((group) => {
          const groupValue = Array.isArray(value[group.group_id]) ? (value[group.group_id] as string[]) : [];
          return (
            <section key={group.group_id} className="question-card body-part-card">
              <h3>{text.groups?.[group.group_id]?.label || group.group_id}</h3>
              <div className="answer-list compact">
                {group.options.map((option) => (
                  <CheckboxRow
                    key={option.option_id}
                    checked={groupValue.includes(option.option_id)}
                    label={text.groups?.[group.group_id]?.options[option.option_id] || option.option_id}
                    onChange={() => onAnswer(setGroupAnswerValue(value, group.group_id, toggleOption(groupValue, option.option_id, Boolean(option.exclusive))))}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    );
  }

  return null;
}

function ScoreScreen({ result, progressStep, totalSteps, onBack, onContinue }: { result: ScoreResult; progressStep: number; totalSteps: number; onBack: () => void; onContinue: () => void }) {
  const factors = getFactorSummaries(result);
  return (
    <>
      <AppHeader tone="blue" progressStep={progressStep} totalSteps={totalSteps} />
      <section className="page score-page">
        <h2>Your MSI risk summary</h2>
        <div className="overall-score-card">
          <p>Overall MSI Risk</p>
          <strong>{formatScoreValue(result.composite_score)}/4</strong>
          <span>{describeRisk(result.composite_score)}</span>
        </div>
        <div className="factor-list">
          {factors.map((factor) => (
            <div key={factor.key} className="factor-row">
              <div>
                <strong>{factor.label}</strong>
                <span>{formatScore(result.factors[factor.key].score)}</span>
              </div>
              <div className="factor-track">
                <span style={{ width: `${scorePercent(result.factors[factor.key].score)}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="score-actions">
          <button className="primary-button" onClick={onContinue}>
            Download Report
          </button>
          <button className="secondary-button" onClick={onBack}>
            Back
          </button>
        </div>
      </section>
    </>
  );
}

function EmailScreen({ value, onChange, onBack, onContinue }: { value: string; onChange: (value: string) => void; onBack: () => void; onContinue: () => void }) {
  return (
    <>
      <WrapHeader active="email" />
      <section className="page page-with-actions wrap-page">
        <div className="content-block">
          <h2>Get Your Report by Email</h2>
          <p className="question-copy">
            Enter your email address if you'd like to receive a copy of this report. This may take up to 15 minutes. Please check your junk or spam folder if you don't see the email in your inbox.
          </p>
          <p className="question-copy">You will see the final report on the next screen.</p>
          <label className="field-label" htmlFor="email-address">
            Email address
          </label>
          <input id="email-address" className="single-input" value={value} onChange={(event) => onChange(event.target.value)} inputMode="email" />
        </div>
        <ActionButtons onBack={onBack} onContinue={onContinue} />
      </section>
    </>
  );
}

function ReportReadyScreen({
  result,
  email,
  taskSummary,
  progressStep,
  totalSteps,
  onDownload,
  onEmail,
  onDone
}: {
  result: ScoreResult;
  email: string;
  taskSummary: string;
  progressStep: number;
  totalSteps: number;
  onDownload: () => void;
  onEmail: () => void;
  onDone: () => void;
}) {
  const highest = getFactorSummaries(result)
    .filter((factor) => typeof result.factors[factor.key].score === "number")
    .sort((a, b) => (result.factors[b.key].score || 0) - (result.factors[a.key].score || 0))
    .slice(0, 2);

  return (
    <>
      <AppHeader tone="blue" progressStep={progressStep} totalSteps={totalSteps} />
      <section className="page report-page">
        <h2>Your Report Is Ready</h2>
        <div className="report-card">
          <div className="report-icon">PDF</div>
          <h3>MSI Risk Report</h3>
          <dl>
            <div>
              <dt>Date</dt>
              <dd>{new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</dd>
            </div>
            <div>
              <dt>Job/task analyzed:</dt>
              <dd>{taskSummary}</dd>
            </div>
            <div>
              <dt>Overall score:</dt>
              <dd className="orange">{formatScore(result.composite_score)}</dd>
            </div>
          </dl>
          <div className="report-divider" />
          <strong>Highest risk categories:</strong>
          <ul>
            {highest.length ? highest.map((factor) => <li key={factor.key}>{factor.label}</li>) : <li>No scored risk categories yet</li>}
          </ul>
          {email && <p className="email-note">Email copy requested for {email}.</p>}
        </div>
        <div className="report-actions">
          <button className="primary-button" onClick={onDownload}>
            Download PDF
          </button>
          <button className="outline-button orange-outline" onClick={onEmail}>
            Email Report
          </button>
          <button className="outline-button neutral-outline" onClick={onDone}>
            Done
          </button>
        </div>
      </section>
    </>
  );
}

function SubmitScreen({ value, onChange, onBack, onSubmit }: { value: string; onChange: (value: string) => void; onBack: () => void; onSubmit: () => void }) {
  const options = [
    ["reuse", "Yes, and I'd like to complete another report using the same information I provided initially allowing me to edit as needed."],
    ["restart", "Yes, and I'd like to start over with new information"],
    ["no", "No, not right now"]
  ];

  return (
    <>
      <WrapHeader active="submit" />
      <section className="page page-with-actions wrap-page submit-page">
        <div className="content-block">
          <h2>Would you like to complete another ErgoCheck assessment?</h2>
          <div className="answer-list">
            {options.map(([id, label]) => (
              <RadioRow key={id} name="next-assessment" checked={value === id} label={label} onChange={() => onChange(toggleSingleOption(value, id))} />
            ))}
          </div>
          <p className="question-copy submit-copy">Thank you, please press the button below to finish the survey.</p>
        </div>
        <div className="actions">
          <button className="primary-button" onClick={onSubmit}>
            Submit
          </button>
          <button className="secondary-button" onClick={onBack}>
            Back
          </button>
        </div>
      </section>
    </>
  );
}

function CompleteScreen({ onStartNew }: { onStartNew: () => void }) {
  return (
    <>
      <AppHeader tone="blue" />
      <section className="page complete-page">
        <div className="checkmark" aria-hidden="true">
          ✓
        </div>
        <h1>Thank You For Completing The MSI 360 Survey</h1>
        <p>Your responses help identify MSI-related hazards in your workplace and contribute to a safer work environment for everyone.</p>
        <div className="next-steps">
          <h2>Next Steps:</h2>
          <ul>
            <li>Review your report and recommendations</li>
            <li>Share findings with your supervisor if appropriate</li>
            <li>Visit worksafebc.com for additional resources</li>
          </ul>
        </div>
        <button className="primary-button" onClick={onStartNew}>
          Start New Assessment
        </button>
      </section>
    </>
  );
}

function AppHeader({ tone, progressStep, totalSteps, compact = false }: { tone: HeaderTone; progressStep?: number; totalSteps?: number; compact?: boolean }) {
  const percent = progressStep && totalSteps ? Math.max(3, Math.min(100, Math.round((progressStep / totalSteps) * 100))) : 0;

  return (
    <header className={`app-header ${tone} ${compact ? "compact" : ""}`}>
      <img className="logo" src="/worksafebc-logo.png" alt="WorkSafeBC" />
      {progressStep && totalSteps && (
        <div className="progress-wrap">
          <div className="progress-meta">
            <span>Question {progressStep} of {totalSteps}</span>
            <span>{percent}%</span>
          </div>
          <div className="progress-track" aria-label={`Question ${progressStep} of ${totalSteps}`}>
            <span style={{ width: `${percent}%` }} />
          </div>
        </div>
      )}
    </header>
  );
}

function WrapHeader({ active }: { active: WrapTab }) {
  const tabs: { id: WrapTab; label: string }[] = [
    { id: "email", label: "Email Copy" },
    { id: "review", label: "Review Results" },
    { id: "submit", label: "Submit Report" }
  ];

  return (
    <header className="wrap-header">
      <img className="logo" src="/worksafebc-logo.png" alt="WorkSafeBC" />
      <div className="tab-bar">
        {tabs.map((tab) => (
          <span key={tab.id} className={tab.id === active ? "active" : ""}>
            {tab.label}
          </span>
        ))}
      </div>
    </header>
  );
}

function ActionButtons({
  onBack,
  onContinue,
  canContinue = true,
  isBusy = false,
  continueLabel = "Continue",
  busyLabel = "Processing",
  backLabel = "Back"
}: {
  onBack?: () => void;
  onContinue: () => void;
  canContinue?: boolean;
  isBusy?: boolean;
  continueLabel?: string;
  busyLabel?: string;
  backLabel?: string;
}) {
  const buttonState = getActionButtonState(canContinue, isBusy);

  return (
    <div className="actions">
      <button className="primary-button" disabled={buttonState.continueDisabled} aria-busy={isBusy} onClick={onContinue}>
        {isBusy && <span className="button-spinner" aria-hidden="true" />}
        <span>{isBusy ? busyLabel : continueLabel}</span>
      </button>
      {onBack && (
        <button className="secondary-button" disabled={buttonState.backDisabled} onClick={onBack}>
          {backLabel}
        </button>
      )}
    </div>
  );
}

export function getActionButtonState(canContinue: boolean, isBusy: boolean) {
  return {
    continueDisabled: !canContinue || isBusy,
    backDisabled: isBusy
  };
}

function RadioRow({ name, checked, label, onChange }: { name: string; checked: boolean; label: string; onChange: () => void }) {
  return (
    <button className={`answer-row ${checked ? "selected" : ""}`} type="button" role="radio" aria-checked={checked} data-name={name} onClick={onChange}>
      <span className={`answer-control radio ${checked ? "checked" : ""}`} aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}

function CheckboxRow({ checked, disabled = false, label, onChange }: { checked: boolean; disabled?: boolean; label: string; onChange: () => void }) {
  return (
    <label className={`answer-row checkbox-row ${checked ? "selected" : ""} ${disabled ? "disabled" : ""}`}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}

function ImageRadioCard({ name, checked, label, image, onChange }: { name: string; checked: boolean; label: string; image?: string; onChange: () => void }) {
  return (
    <button className={`image-radio-card ${checked ? "selected" : ""}`} type="button" role="radio" aria-checked={checked} data-name={name} onClick={onChange}>
      <span className={`answer-control radio ${checked ? "checked" : ""}`} aria-hidden="true" />
      <span>{label}</span>
      {image && <img src={image} alt="" />}
    </button>
  );
}

function toggleSingleOption(selected: string, optionId: string) {
  return selected === optionId ? "" : optionId;
}

function toggleOption(selected: string[], optionId: string, exclusive: boolean) {
  if (exclusive) return selected.includes(optionId) ? [] : [optionId];
  const withoutExclusive = selected.filter((value) => value !== "none");
  if (withoutExclusive.includes(optionId)) return withoutExclusive.filter((value) => value !== optionId);
  return [...withoutExclusive, optionId];
}

function setGroupAnswerValue(value: Record<string, string | string[]>, groupId: string, nextValue: string | string[]) {
  const nextValueIsEmpty = Array.isArray(nextValue) ? nextValue.length === 0 : nextValue.trim().length === 0;
  const next = { ...value };
  if (nextValueIsEmpty) {
    delete next[groupId];
  } else {
    next[groupId] = nextValue;
  }
  return next;
}

function getProgressStep(step: StepId, assessmentIndex: number, total: number) {
  if (step === "language") return 1;
  if (step === "role") return 2;
  if (step === "time_in_role") return 3;
  if (step === "description" || step === "task_description") return 4;
  if (step === "height") return 5;
  if (step === "assessment") return Math.min(6 + assessmentIndex, total);
  return total;
}

function splitParagraphs(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function isRecord(value: unknown): value is Record<string, string | string[]> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function isEmptyAnswerValue(value: AnswerValue | undefined) {
  if (value === undefined) return true;
  if (typeof value === "string") return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (isRecord(value)) {
    return Object.values(value).every((entry) => (Array.isArray(entry) ? entry.length === 0 : entry.trim().length === 0));
  }
  return false;
}

function formatScore(score: number | null) {
  return typeof score === "number" ? `${score.toFixed(1)} / 4` : "N/A";
}

function formatScoreValue(score: number | null) {
  return typeof score === "number" ? score.toFixed(1) : "N/A";
}

function scorePercent(score: number | null) {
  return typeof score === "number" ? Math.min(100, Math.max(0, (score / 4) * 100)) : 0;
}

function describeRisk(score: number | null) {
  if (score === null) return "Not enough data";
  if (score < 1.5) return "Low risk";
  if (score < 2.5) return "Possible risk";
  if (score < 3.5) return "Likely risk";
  return "High risk";
}

function getFactorSummaries(result: ScoreResult) {
  const labels: Record<keyof ScoreResult["factors"], string> = {
    contact_stress: "Contact stress",
    force: "Force",
    awkward_posture: "Awkward postures",
    repetition: "Repetition",
    environmental: "Environmental factors",
    symptoms: "Symptoms"
  };

  return (Object.keys(result.factors) as Array<keyof ScoreResult["factors"]>).map((key) => ({ key, label: labels[key] }));
}

function getTaskSummary(answers: Answers) {
  const value = answers[questionIds.taskDescription]?.value;
  if (typeof value === "string" && value.trim()) return value.trim();
  return "Work task";
}

function getQuestionById(questionId: string) {
  return questions.find((question) => question.question_id === questionId);
}

function isQuestionAnswered(question: Question | undefined, answer: Answer | undefined) {
  if (!question?.required) return true;
  if (!answer) return false;

  if (question.type === "text") {
    return typeof answer.value === "string" && answer.value.trim().length > 0;
  }

  if (question.type === "multi_choice") {
    return typeof answer.value === "string" && answer.value.length > 0;
  }

  if (question.type === "select_all") {
    return Array.isArray(answer.value) && answer.value.length > 0;
  }

  if (question.type === "grouped_multi_choice") {
    if (!question.groups?.length || !isRecord(answer.value)) return false;
    const value = answer.value;
    return question.groups.every((group) => {
      const groupValue = value[group.group_id];
      return typeof groupValue === "string" && groupValue.length > 0;
    });
  }

  if (question.type === "grouped_select_all") {
    if (!isRecord(answer.value)) return false;
    return Object.values(answer.value).some((value) => Array.isArray(value) && value.length > 0);
  }

  return false;
}
