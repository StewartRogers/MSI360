import { AppHeader, WrapHeader } from "../components/AppHeader";
import { ActionButtons } from "../components/ActionButtons";
import { RadioRow } from "../components/AnswerControls";
import { Fragment } from "react";
import { getActionButtonLabels, getAppText, getProgressLabel } from "../../data/translationText";
import { toggleSingleOption } from "../../logic/questionnaire/answerSelection";
import { describeFactorRisk, describeRisk, formatOverallScoreTokens, formatScore, getFactorSummaries, getPsychosocialInfluenceMessage, scorePercent } from "../../logic/scoring/scorePresentation";
import type { ScoreResult, Translation } from "../../types";

/**
 * Displays the final on-screen MSI score summary before report collection.
 *
 * This screen uses the same `ScoreResult` object as the PDF report, so changes
 * to scoring should appear consistently in both places.
 */
export function ScoreScreen({ result, progressStep, totalSteps, translations, onBack, onContinue }: { result: ScoreResult; progressStep: number; totalSteps: number; translations: Translation; onBack: () => void; onContinue: () => void }) {
  const factors = getFactorSummaries(result, translations);
  const psychosocialMessage = getPsychosocialInfluenceMessage(result, translations);
  const { backLabel } = getActionButtonLabels(translations);
  return (
    <>
      <AppHeader tone="blue" progressStep={progressStep} totalSteps={totalSteps} progressLabel={getProgressLabel(translations, progressStep, totalSteps)} />
      <section className="page score-page">
        <h2>{getAppText(translations, "score_summary_title", "Your MSI risk summary")}</h2>
        <div className="overall-score-card">
          <p>{getAppText(translations, "score_overall_risk", "Overall MSI Risk")}</p>
          <strong>
            {formatOverallScoreTokens(result.composite_score, translations).map((token, index) =>
              token.isScore ? (
                <Fragment key={`${token.text}-${index}`}>{token.text}</Fragment>
              ) : (
                <small key={`${token.text}-${index}`} className="score-out-of">
                  {token.text}
                </small>
              )
            )}
          </strong>
          <span>{describeRisk(result.composite_score, translations)}</span>
          {psychosocialMessage && <em className="psychosocial-note">{psychosocialMessage}</em>}
        </div>
        <div className="factor-list">
          {factors.map((factor) => (
            <div key={factor.key} className="factor-row">
              <div className="factor-row-header">
                <strong>{factor.label}</strong>
                <span>{formatScore(result.factors[factor.key].score, translations)}</span>
              </div>
              <p className="factor-interpretation">{describeFactorRisk(result.factors[factor.key].score, factor.riskSubject, translations)}</p>
              <div className="factor-track">
                <span style={{ width: `${scorePercent(result.factors[factor.key].score)}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="score-actions">
          <button className="primary-button" onClick={onContinue}>
            {getAppText(translations, "score_download_report", "Download Report")}
          </button>
          <button className="secondary-button" onClick={onBack}>
            {backLabel}
          </button>
        </div>
      </section>
    </>
  );
}

/**
 * Optional email collection screen.
 *
 * The current prototype records the email only in local state and displays it on
 * the next screen. It does not send email without a future backend integration.
 */
export function EmailScreen({ value, translations, isRtl = false, onChange, onBack, onContinue }: { value: string; translations: Translation; isRtl?: boolean; onChange: (value: string) => void; onBack: () => void; onContinue: () => void }) {
  const actionLabels = getActionButtonLabels(translations);

  return (
    <>
      <WrapHeader active="email" translations={translations} isRtl={isRtl} />
      <section className={`page page-with-actions wrap-page ${isRtl ? "rtl-result-content" : ""}`}>
        <div className="content-block">
          <h2>{getAppText(translations, "email_title", "Get Your Report by Email")}</h2>
          <p className="question-copy">
            {getAppText(
              translations,
              "email_body",
              "Enter your email address if you'd like to receive a copy of this report. This may take up to 15 minutes. Please check your junk or spam folder if you don't see the email in your inbox."
            )}
          </p>
          <p className="question-copy">{getAppText(translations, "email_next_body", "You will see the final report on the next screen.")}</p>
          <label className="field-label" htmlFor="email-address">
            {getAppText(translations, "email_address_label", "Email address")}
          </label>
          <input id="email-address" className="single-input" value={value} onChange={(event) => onChange(event.target.value)} inputMode="email" />
        </div>
        <ActionButtons {...actionLabels} onBack={onBack} onContinue={onContinue} />
      </section>
    </>
  );
}

/**
 * Final report download screen.
 *
 * Summarizes the completed assessment and exposes PDF download, email-edit, and
 * done actions. The report domain module handles the actual PDF generation.
 */
export function ReportReadyScreen({
  result,
  email,
  taskSummary,
  progressStep,
  totalSteps,
  translations,
  isRtl = false,
  onDownload,
  onEmail,
  onDone
}: {
  result: ScoreResult;
  email: string;
  taskSummary: string;
  progressStep: number;
  totalSteps: number;
  translations: Translation;
  isRtl?: boolean;
  onDownload: () => void;
  onEmail: () => void;
  onDone: () => void;
}) {
  const psychosocialMessage = getPsychosocialInfluenceMessage(result, translations);
  const highest = getFactorSummaries(result, translations)
    .filter((factor) => typeof result.factors[factor.key].score === "number")
    .sort((a, b) => (result.factors[b.key].score || 0) - (result.factors[a.key].score || 0))
    .slice(0, 2);

  return (
    <>
      <AppHeader tone="blue" progressStep={progressStep} totalSteps={totalSteps} progressLabel={getProgressLabel(translations, progressStep, totalSteps)} />
      <section className={`page report-page ${isRtl ? "rtl-result-content" : ""}`}>
        <h2>{getAppText(translations, "report_ready_title", "Your Report Is Ready")}</h2>
        <div className="report-card">
          <div className="report-icon">PDF</div>
          <h3>{getAppText(translations, "report_card_title", "MSI Risk Report")}</h3>
          <dl>
            <div>
              <dt>{getAppText(translations, "report_date_label", "Date")}</dt>
              <dd>{new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</dd>
            </div>
            <div>
              <dt>{getAppText(translations, "report_task_label", "Job/task analyzed:")}</dt>
              <dd>{taskSummary}</dd>
            </div>
            <div>
              <dt>{getAppText(translations, "report_overall_score_label", "Overall score:")}</dt>
              <dd className="orange">{formatScore(result.composite_score, translations)}</dd>
            </div>
          </dl>
          {psychosocialMessage && <p className="psychosocial-note report-psychosocial-note">{psychosocialMessage}</p>}
          <div className="report-divider" />
          <strong>{getAppText(translations, "report_highest_risk", "Highest risk categories:")}</strong>
          <ul>
            {highest.length ? highest.map((factor) => <li key={factor.key}>{factor.label}</li>) : <li>{getAppText(translations, "report_no_scored_categories", "No scored risk categories yet")}</li>}
          </ul>
          {email && <p className="email-note">{getAppText(translations, "report_email_copy_requested", "Email copy requested for {email}.").replaceAll("{email}", email)}</p>}
        </div>
        <div className="report-actions">
          <button className="primary-button" onClick={onDownload}>
            {getAppText(translations, "report_download_pdf", "Download PDF")}
          </button>
          <button className="outline-button orange-outline" onClick={onEmail}>
            {getAppText(translations, "report_email_report", "Email Report")}
          </button>
          <button className="outline-button neutral-outline" onClick={onDone}>
            {getAppText(translations, "report_done", "Done")}
          </button>
        </div>
      </section>
    </>
  );
}

/**
 * Wrap-up question asking whether the user wants another assessment.
 *
 * Only the "start new" behavior is currently implemented by the parent
 * completion screen; reuse/restart responses are captured for prototype flow.
 */
export function SubmitScreen({ value, translations, isRtl = false, onChange, onBack, onSubmit }: { value: string; translations: Translation; isRtl?: boolean; onChange: (value: string) => void; onBack: () => void; onSubmit: () => void }) {
  const { backLabel } = getActionButtonLabels(translations);
  const options = [
    ["reuse", getAppText(translations, "submit_option_reuse", "Yes, and I'd like to complete another report using the same information I provided initially allowing me to edit as needed.")],
    ["restart", getAppText(translations, "submit_option_restart", "Yes, and I'd like to start over with new information")],
    ["no", getAppText(translations, "submit_option_no", "No, not right now")]
  ];

  return (
    <>
      <WrapHeader active="submit" translations={translations} isRtl={isRtl} />
      <section className={`page page-with-actions wrap-page submit-page ${isRtl ? "rtl-result-content" : ""}`}>
        <div className="content-block">
          <h2>{getAppText(translations, "submit_title", "Would you like to complete another ErgoCheck assessment?")}</h2>
          <div className="answer-list">
            {options.map(([id, label]) => (
              <RadioRow key={id} name="next-assessment" checked={value === id} label={label} isRtl={isRtl} onChange={() => onChange(toggleSingleOption(value, id))} />
            ))}
          </div>
          <p className="question-copy submit-copy">{getAppText(translations, "submit_copy", "Thank you, please press the button below to finish the survey.")}</p>
        </div>
        <div className="actions">
          <button className="primary-button" onClick={onSubmit}>
            {getAppText(translations, "submit_button", "Submit")}
          </button>
          <button className="secondary-button" onClick={onBack}>
            {backLabel}
          </button>
        </div>
      </section>
    </>
  );
}

/**
 * Completion screen and reset entry point for a fresh assessment.
 */
export function CompleteScreen({ translations, isRtl = false, onStartNew }: { translations: Translation; isRtl?: boolean; onStartNew: () => void }) {
  return (
    <>
      <AppHeader tone="blue" />
      <section className={`page complete-page ${isRtl ? "rtl-result-content" : ""}`}>
        <div className="checkmark" aria-hidden="true">
          &#10003;
        </div>
        <h1>{getAppText(translations, "complete_title", "Thank You For Completing The MSI 360 Survey")}</h1>
        <p>{getAppText(translations, "complete_body", "Your responses help identify MSI-related hazards in your workplace and contribute to a safer work environment for everyone.")}</p>
        <div className="next-steps">
          <h2>{getAppText(translations, "complete_next_steps_title", "Next Steps:")}</h2>
          <ul>
            <li>{getAppText(translations, "complete_next_step_review", "Review your report and recommendations")}</li>
            <li>{getAppText(translations, "complete_next_step_share", "Share findings with your supervisor if appropriate")}</li>
            <li>{getAppText(translations, "complete_next_step_visit", "Visit worksafebc.com for additional resources")}</li>
          </ul>
        </div>
        <button className="primary-button" onClick={onStartNew}>
          {getAppText(translations, "complete_start_new", "Start New Assessment")}
        </button>
      </section>
    </>
  );
}
