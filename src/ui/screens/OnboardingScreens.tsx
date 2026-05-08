import { useState } from "react";
import type { HeaderTone } from "../../app/types";
import { AppHeader } from "../components/AppHeader";
import { ActionButtons } from "../components/ActionButtons";
import { RadioRow } from "../components/AnswerControls";
import { questions } from "../../data/catalog";
import { translations } from "../../data/translations";
import { toggleSingleOption } from "../../logic/answerSelection";
import type { Answer, Language } from "../../types";

export function IntroScreen({ onContinue }: { onContinue: () => void }) {
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

export function LanguageScreen(props: {
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

export function ChoiceScreen(props: {
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

export function DescriptionScreen(props: { progressStep: number; totalSteps: number; onBack: () => void; onContinue: () => void }) {
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

export function TextScreen(props: {
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
