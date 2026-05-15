import { useState } from "react";
import type { HeaderTone } from "../../app/types";
import { AppHeader } from "../components/AppHeader";
import { ActionButtons } from "../components/ActionButtons";
import { RadioRow } from "../components/AnswerControls";
import { questions } from "../../data/catalog";
import { getActionButtonLabels, getAiLoadingTaskDescriptionLabel, getAnalyzingButtonLabel, getProgressLabel, getQuestionText } from "../../data/translationText";
import { toggleSingleOption } from "../../logic/answerSelection";
import type { Answer, Language, Translation } from "../../types";

/**
 * First screen shown to workers before any stateful questionnaire data exists.
 */
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

/**
 * Language selection screen.
 *
 * The selected language controls in-app question text and layout direction. PDF
 * reports remain English-only in this prototype.
 */
export function LanguageScreen(props: {
  languages: Language[];
  selectedLanguage: Language | null;
  progressStep: number;
  totalSteps: number;
  translations: Translation;
  onSelect: (language: Language | null) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCode = props.selectedLanguage?.code || "";
  const actionLabels = getActionButtonLabels(props.translations);

  function handleLanguageSelect(nextLanguage: Language) {
    if (!nextLanguage.ready) return;
    if (selectedCode === nextLanguage.code) {
      props.onSelect(null);
      return;
    }
    props.onSelect(nextLanguage);
    setIsOpen(false);
  }

  function renderLanguageLabel(language: Language) {
    return (
      <span className="language-label">
        <img className="language-flag-icon" src={`https://flagcdn.com/24x18/${language.flagCode}.png`} alt="" aria-hidden="true" loading="lazy" />
        <span className="language-flag-fallback" aria-hidden="true">
          {language.flag}
        </span>
        <span>{language.name}</span>
      </span>
    );
  }

  return (
    <>
      <AppHeader tone="blue" progressStep={props.progressStep} totalSteps={props.totalSteps} progressLabel={getProgressLabel(props.translations, props.progressStep, props.totalSteps)} />
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
              {props.selectedLanguage ? renderLanguageLabel(props.selectedLanguage) : <span>Select a language</span>}
            </button>
            {isOpen && (
              <div className="language-menu" role="listbox" aria-labelledby="language-select">
                {props.languages.map((language) => {
                  const isSelected = selectedCode === language.code;
                  const isUnavailable = !language.ready;
                  return (
                    <button
                      key={language.code}
                      type="button"
                      className={`language-option ${isSelected ? "selected" : ""} ${isUnavailable ? "unavailable" : ""}`}
                      role="option"
                      aria-selected={isSelected}
                      disabled={isUnavailable}
                      onClick={() => handleLanguageSelect(language)}
                    >
                      {renderLanguageLabel(language)}
                      {isUnavailable && <span className="language-unavailable-label">Coming soon</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <ActionButtons {...actionLabels} onBack={props.onBack} canContinue={Boolean(props.selectedLanguage)} onContinue={props.onContinue} />
      </section>
    </>
  );
}

/**
 * Generic single-choice onboarding screen used for role, time in role, and
 * worker height.
 */
export function ChoiceScreen(props: {
  questionId: string;
  answer?: Answer;
  progressStep: number;
  totalSteps: number;
  tone: HeaderTone;
  translations: Translation;
  isRtl?: boolean;
  onAnswer: (value: string) => void;
  onBack: () => void;
  canContinue: boolean;
  onContinue: () => void;
}) {
  const question = questions.find((item) => item.question_id === props.questionId);
  const text = getQuestionText(props.translations, props.questionId);
  const selected = typeof props.answer?.value === "string" ? props.answer.value : "";
  const actionLabels = getActionButtonLabels(props.translations);

  if (!question || !question.options || !text?.options) return null;

  return (
    <>
      <AppHeader tone={props.tone} progressStep={props.progressStep} totalSteps={props.totalSteps} progressLabel={getProgressLabel(props.translations, props.progressStep, props.totalSteps)} />
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
                isRtl={props.isRtl}
                onChange={() => props.onAnswer(toggleSingleOption(selected, option.option_id))}
              />
            ))}
          </div>
        </div>
        <ActionButtons {...actionLabels} onBack={props.onBack} canContinue={props.canContinue} onContinue={props.onContinue} />
      </section>
    </>
  );
}

/**
 * Informational bridge screen before the worker enters a task description.
 */
export function DescriptionScreen(props: { progressStep: number; totalSteps: number; translations: Translation; onBack: () => void; onContinue: () => void }) {
  const title = props.translations.app.description_title || "Description";
  const body =
    props.translations.app.description_body ||
    "The following questions are about the work you do during a typical workday or when you're completing the specific task or activity you'd like to assess today. The intent is for you to tell MSI360 about the actions you perform to get your work done.";
  const actionLabels = getActionButtonLabels(props.translations);

  return (
    <>
      <AppHeader tone="blue" progressStep={props.progressStep} totalSteps={props.totalSteps} progressLabel={getProgressLabel(props.translations, props.progressStep, props.totalSteps)} />
      <section className="page page-with-actions">
        <div className="content-block description-copy">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <ActionButtons {...actionLabels} onBack={props.onBack} onContinue={props.onContinue} />
      </section>
    </>
  );
}

/**
 * Free-text task-description screen.
 *
 * The parent owns AI loading state so the shared action buttons can prevent
 * duplicate submissions while task interpretation is running.
 */
export function TextScreen(props: {
  questionId: string;
  value: string;
  status: string;
  isLoading: boolean;
  progressStep: number;
  totalSteps: number;
  translations: Translation;
  onAnswer: (value: string) => void;
  onBack: () => void;
  canContinue: boolean;
  onContinue: () => void;
}) {
  const text = getQuestionText(props.translations, props.questionId);
  const actionLabels = getActionButtonLabels(props.translations);
  if (!text) return null;

  return (
    <>
      <AppHeader tone="blue" progressStep={props.progressStep} totalSteps={props.totalSteps} progressLabel={getProgressLabel(props.translations, props.progressStep, props.totalSteps)} />
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
              <span>{getAiLoadingTaskDescriptionLabel(props.translations)}</span>
            </div>
          ) : (
            props.status && <p className="small-status">{props.status}</p>
          )}
        </div>
        <ActionButtons
          onBack={props.onBack}
          canContinue={props.canContinue}
          isBusy={props.isLoading}
          {...actionLabels}
          busyLabel={getAnalyzingButtonLabel(props.translations)}
          onContinue={props.onContinue}
        />
      </section>
    </>
  );
}
