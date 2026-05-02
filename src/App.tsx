import { useMemo, useState } from "react";
import { languages, questions, sectionOrder } from "./data/catalog";
import { translations } from "./data/translations";
import { interpretTextAnswer } from "./logic/ai";
import { downloadReport } from "./logic/report";
import { getVisibleQuestions, recomputeTags } from "./logic/routing";
import { scoreAssessment } from "./logic/scoring";
import type { AiOutputs, Answer, Answers, AnswerValue, Language, Question, QuestionType, ScoreResult } from "./types";

type StepId = "intro" | "language" | "role" | "time_in_role" | "task_description" | "height" | "assessment" | "review" | "results";

const firstFlow: StepId[] = ["intro", "language", "role", "time_in_role", "task_description", "height"];

export default function App() {
  const [step, setStep] = useState<StepId>("intro");
  const [language, setLanguage] = useState("en");
  const [languageSearch, setLanguageSearch] = useState("");
  const [answers, setAnswers] = useState<Answers>({});
  const [aiOutputs, setAiOutputs] = useState<AiOutputs>({});
  const [activeTags, setActiveTags] = useState<string[]>(["start"]);
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  const [status, setStatus] = useState("");

  const t = translations[language] || translations.en;
  const selectedLanguage = languages.find((item) => item.code === language) || languages[0];
  const visibleQuestions = useMemo(() => {
    const visible = getVisibleQuestions(activeTags);
    return visible.sort((a, b) => sectionOrder.indexOf(a.section) - sectionOrder.indexOf(b.section));
  }, [activeTags]);

  function updateAnswer(questionId: string, type: QuestionType, value: AnswerValue) {
    const nextAnswers = { ...answers, [questionId]: { type, value } };
    const nextTags = recomputeTags(nextAnswers, aiOutputs);
    setAnswers(nextAnswers);
    setActiveTags(nextTags);
  }

  async function continueFromStep() {
    setStatus("");
    if (step === "intro") return setStep("language");
    if (step === "language") return setStep("role");
    if (step === "role") return setStep("time_in_role");
    if (step === "time_in_role") return setStep("task_description");
    if (step === "task_description") {
      const taskQuestion = questions.find((question) => question.question_id === "task_description");
      const response = answers.task_description?.value;
      if (taskQuestion && typeof response === "string" && response.trim()) {
        const output = await interpretTextAnswer(taskQuestion, response);
        const nextAiOutputs = { ...aiOutputs, task_description: output };
        setAiOutputs(nextAiOutputs);
        setActiveTags(recomputeTags(answers, nextAiOutputs));
        if (output.missing_details.length) setStatus(`MSI360 may ask about: ${output.missing_details.join(", ")}.`);
      }
      return setStep("height");
    }
    if (step === "height") return setStep("assessment");
    if (step === "assessment") return setStep("review");
    if (step === "review") {
      const result = scoreAssessment(answers);
      setScoreResult(result);
      return setStep("results");
    }
  }

  function setAssessmentAnswer(question: Question, value: AnswerValue) {
    updateAnswer(question.question_id, question.type, value);
  }

  async function handleDownloadReport() {
    const result = scoreResult || scoreAssessment(answers);
    setScoreResult(result);
    await downloadReport(answers, aiOutputs, result);
  }

  return (
    <main className="mobile-shell">
      <img className="logo" src="/worksafebc-logo.png" alt="WorkSafeBC" />

      {step === "intro" ? (
        <IntroScreen onContinue={continueFromStep} />
      ) : (
        <>
          {firstFlow.includes(step) && <Progress step={firstFlow.indexOf(step)} total={5} />}

          {step === "language" && (
            <LanguageScreen
              languages={languages}
              selectedLanguage={selectedLanguage}
              search={languageSearch}
              onSearch={setLanguageSearch}
              onSelect={(nextLanguage) => nextLanguage.ready && setLanguage(nextLanguage.code)}
              onContinue={continueFromStep}
            />
          )}

          {step === "role" && (
            <ChoiceScreen
              questionId="role"
              answer={answers.role}
              onAnswer={(value) => updateAnswer("role", "multi_choice", value)}
              onContinue={continueFromStep}
            />
          )}

          {step === "time_in_role" && (
            <ChoiceScreen
              questionId="time_in_role"
              answer={answers.time_in_role}
              onAnswer={(value) => updateAnswer("time_in_role", "multi_choice", value)}
              onContinue={continueFromStep}
            />
          )}

          {step === "task_description" && (
            <TextScreen
              questionId="task_description"
              value={typeof answers.task_description?.value === "string" ? answers.task_description.value : ""}
              status={status}
              onAnswer={(value) => updateAnswer("task_description", "text", value)}
              onContinue={continueFromStep}
            />
          )}

          {step === "height" && (
            <ChoiceScreen
              questionId="height"
              answer={answers.height}
              onAnswer={(value) => updateAnswer("height", "multi_choice", value)}
              onContinue={continueFromStep}
            />
          )}
        </>
      )}

      {step === "assessment" && (
        <AssessmentScreen
          questions={visibleQuestions.filter((question) => !["role", "time_in_role", "task_description", "height"].includes(question.question_id))}
          answers={answers}
          activeTags={activeTags}
          onAnswer={setAssessmentAnswer}
          onContinue={continueFromStep}
        />
      )}

      {step === "review" && <ReviewScreen answers={answers} aiOutputs={aiOutputs} onBack={() => setStep("assessment")} onContinue={continueFromStep} />}

      {step === "results" && scoreResult && <ResultsScreen result={scoreResult} onBack={() => setStep("review")} onDownload={handleDownloadReport} />}
    </main>
  );
}

function IntroScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <section className="intro-screen">
      <h1>Check Your Muscle And Strain Injury Risk</h1>
      <p className="intro-copy">Answer simple questions about your work task. Get a risk summary you can save, print, or share with your.</p>
      <div className="feature-list" aria-label="MSI360 features">
        <div>⏱️ About 10 minutes</div>
        <div>🔒 No login required</div>
        <div>🛡️ You choose what to share</div>
      </div>
      <button className="primary-button intro-button" onClick={onContinue}>
        Start
      </button>
      <a className="msi-link" href="https://www.worksafebc.com/en/health-safety/hazards-exposures/ergonomics" target="_blank" rel="noreferrer">
        What is MSI?
      </a>
    </section>
  );
}

function Progress({ step, total }: { step: number; total: number }) {
  return (
    <div className="progress-track" aria-label={`Step ${step} of ${total}`}>
      {Array.from({ length: total }).map((_, index) => (
        <span key={index} className={index < step ? "active" : ""} />
      ))}
    </div>
  );
}

function LanguageScreen(props: {
  languages: Language[];
  selectedLanguage: Language;
  search: string;
  onSearch: (value: string) => void;
  onSelect: (language: Language) => void;
  onContinue: () => void;
}) {
  const filtered = props.languages.filter((language) => language.name.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <section className="screen-content">
      <h2>Choose Your Language</h2>
      <p className="subcopy">Questions can be shown in your preferred language. The report is generated in English.</p>
      <div className="search-row">
        <input value={props.search} onChange={(event) => props.onSearch(event.target.value)} placeholder="Search languages..." />
        <button>Search</button>
      </div>
      <div className="language-grid">
        {filtered.map((language) => (
          <button
            key={language.code}
            className={`language-card ${props.selectedLanguage.code === language.code ? "selected" : ""}`}
            disabled={!language.ready}
            onClick={() => props.onSelect(language)}
          >
            <span className="flag">{language.flag}</span>
            <span>{language.name}</span>
          </button>
        ))}
      </div>
      <button className="primary-button fixed-continue" onClick={props.onContinue}>
        Continue
      </button>
    </section>
  );
}

function ChoiceScreen({
  questionId,
  answer,
  onAnswer,
  onContinue
}: {
  questionId: string;
  answer?: Answer;
  onAnswer: (value: string) => void;
  onContinue: () => void;
}) {
  const question = questions.find((item) => item.question_id === questionId);
  const text = translations.en.questions[questionId];
  const selected = typeof answer?.value === "string" ? answer.value : "";

  if (!question || !question.options || !text.options) return null;

  return (
    <section className="screen-content">
      <h2>{text.label}</h2>
      <div className="radio-list">
        {question.options.map((option) => (
          <label key={option.option_id} className="radio-row">
            <input type="radio" name={questionId} checked={selected === option.option_id} onChange={() => onAnswer(option.option_id)} />
            <span>{text.options?.[option.option_id]}</span>
          </label>
        ))}
      </div>
      <button className="primary-button fixed-continue" onClick={onContinue}>
        Continue
      </button>
    </section>
  );
}

function TextScreen(props: { questionId: string; value: string; status: string; onAnswer: (value: string) => void; onContinue: () => void }) {
  const text = translations.en.questions[props.questionId];
  return (
    <section className="screen-content">
      <h2>{text.label}</h2>
      <input className="single-input" value={props.value} onChange={(event) => props.onAnswer(event.target.value)} aria-label={text.label} />
      {props.status && <p className="small-status">{props.status}</p>}
      <button className="primary-button fixed-continue" onClick={props.onContinue}>
        Continue
      </button>
    </section>
  );
}

function AssessmentScreen(props: {
  questions: Question[];
  answers: Answers;
  activeTags: string[];
  onAnswer: (question: Question, value: AnswerValue) => void;
  onContinue: () => void;
}) {
  return (
    <section className="secondary-screen">
      <h2>Additional Questions</h2>
      <p className="subcopy">These pages are functional placeholders until the team finishes the remaining designs.</p>
      <div className="tag-list">Tags: {props.activeTags.join(", ")}</div>
      {props.questions.map((question) => (
        <QuestionRenderer key={question.question_id} question={question} answer={props.answers[question.question_id]} onAnswer={(value) => props.onAnswer(question, value)} />
      ))}
      <button className="primary-button" onClick={props.onContinue}>
        Review answers
      </button>
    </section>
  );
}

function QuestionRenderer({ question, answer, onAnswer }: { question: Question; answer?: Answer; onAnswer: (value: AnswerValue) => void }) {
  const text = translations.en.questions[question.question_id];
  if (!text) return null;

  if (question.type === "multi_choice" && question.options && text.options) {
    const selected = typeof answer?.value === "string" ? answer.value : "";
    return (
      <section className="placeholder-card">
        <h3>{text.label}</h3>
        {question.options.map((option) => (
          <label key={option.option_id} className="radio-row compact">
            <input type="radio" checked={selected === option.option_id} onChange={() => onAnswer(option.option_id)} />
            <span>{text.options?.[option.option_id]}</span>
          </label>
        ))}
      </section>
    );
  }

  if (question.type === "grouped_multi_choice" && question.groups && text.groups) {
    const value = isRecord(answer?.value) ? answer.value : {};
    return (
      <section className="placeholder-card">
        <h3>{text.label}</h3>
        {question.groups.map((group) => (
          <fieldset key={group.group_id}>
            <legend>{text.groups?.[group.group_id]?.label}</legend>
            {group.options.map((option) => (
              <label key={option.option_id} className="radio-row compact">
                <input
                  type="radio"
                  name={`${question.question_id}-${group.group_id}`}
                  checked={value[group.group_id] === option.option_id}
                  onChange={() => onAnswer({ ...value, [group.group_id]: option.option_id })}
                />
                <span>{text.groups?.[group.group_id]?.options[option.option_id]}</span>
              </label>
            ))}
          </fieldset>
        ))}
      </section>
    );
  }

  return null;
}

function ReviewScreen({ answers, aiOutputs, onBack, onContinue }: { answers: Answers; aiOutputs: AiOutputs; onBack: () => void; onContinue: () => void }) {
  return (
    <section className="secondary-screen">
      <h2>Review Answers</h2>
      {Object.entries(answers).map(([questionId, answer]) => (
        <div key={questionId} className="review-item">
          <strong>{translations.en.questions[questionId]?.label || questionId}</strong>
          <p>{formatAnswer(questionId, answer)}</p>
          {aiOutputs[questionId] && <p className="muted">AI tags: {aiOutputs[questionId].add_tags.join(", ") || "none"}</p>}
        </div>
      ))}
      <div className="button-row">
        <button className="secondary-button" onClick={onBack}>
          Back
        </button>
        <button className="primary-button" onClick={onContinue}>
          Score
        </button>
      </div>
    </section>
  );
}

function ResultsScreen({ result, onBack, onDownload }: { result: ScoreResult; onBack: () => void; onDownload: () => void }) {
  return (
    <section className="secondary-screen">
      <h2>Results</h2>
      <div className="result-score">{formatScore(result.composite_score)}</div>
      <p className="subcopy">Composite MSI360 prototype risk score</p>
      <div className="result-grid">
        <div>Physical: {formatScore(result.grouped_scores.physical)}</div>
        <div>Environmental: {formatScore(result.grouped_scores.environmental)}</div>
        <div>Organizational: N/A</div>
      </div>
      <div className="button-row">
        <button className="secondary-button" onClick={onBack}>
          Back
        </button>
        <button className="primary-button" onClick={onDownload}>
          Download PDF
        </button>
      </div>
    </section>
  );
}

function formatAnswer(questionId: string, answer: Answer) {
  const text = translations.en.questions[questionId];
  if (typeof answer.value === "string") return text?.options?.[answer.value] || answer.value;
  if (Array.isArray(answer.value)) return answer.value.map((value) => text?.options?.[value] || value).join(", ");
  if (isRecord(answer.value)) {
    return Object.entries(answer.value)
      .map(([groupId, value]) => {
        const values = Array.isArray(value) ? value : [value];
        return `${text?.groups?.[groupId]?.label || groupId}: ${values.map((item) => text?.groups?.[groupId]?.options[item] || item).join(", ")}`;
      })
      .join(" | ");
  }
  return "No answer";
}

function formatScore(score: number | null) {
  return typeof score === "number" ? `${score}/4` : "N/A";
}

function isRecord(value: unknown): value is Record<string, string | string[]> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
