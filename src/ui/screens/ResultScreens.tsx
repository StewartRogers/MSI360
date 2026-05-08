import { AppHeader, WrapHeader } from "../components/AppHeader";
import { ActionButtons } from "../components/ActionButtons";
import { RadioRow } from "../components/AnswerControls";
import { toggleSingleOption } from "../../logic/answerSelection";
import { describeRisk, formatScore, formatScoreValue, getFactorSummaries, scorePercent } from "../../logic/scorePresentation";
import type { ScoreResult } from "../../types";

export function ScoreScreen({ result, progressStep, totalSteps, onBack, onContinue }: { result: ScoreResult; progressStep: number; totalSteps: number; onBack: () => void; onContinue: () => void }) {
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

export function EmailScreen({ value, onChange, onBack, onContinue }: { value: string; onChange: (value: string) => void; onBack: () => void; onContinue: () => void }) {
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

export function ReportReadyScreen({
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

export function SubmitScreen({ value, onChange, onBack, onSubmit }: { value: string; onChange: (value: string) => void; onBack: () => void; onSubmit: () => void }) {
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

export function CompleteScreen({ onStartNew }: { onStartNew: () => void }) {
  return (
    <>
      <AppHeader tone="blue" />
      <section className="page complete-page">
        <div className="checkmark" aria-hidden="true">
          &#10003;
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
