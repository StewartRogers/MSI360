import type { HeaderTone, WrapTab } from "../../app/types";
import { getAppText } from "../../data/translationText";
import type { Translation } from "../../types";

/**
 * Main WorkSafeBC header and optional progress indicator.
 *
 * Progress is clamped to a visible minimum so early screens still show movement
 * in the track when a progress step is provided.
 */
export function AppHeader({ tone, progressStep, totalSteps, progressLabel, compact = false }: { tone: HeaderTone; progressStep?: number; totalSteps?: number; progressLabel?: string; compact?: boolean }) {
  const percent = progressStep && totalSteps ? Math.max(3, Math.min(100, Math.round((progressStep / totalSteps) * 100))) : 0;
  const label = progressLabel || (progressStep && totalSteps ? `Question ${progressStep} of ${totalSteps}` : "");

  return (
    <header className={`app-header ${tone} ${compact ? "compact" : ""}`}>
      <img className="logo" src="/worksafebc-logo.png" alt="WorkSafeBC" />
      {progressStep && totalSteps && (
        <div className="progress-wrap">
          <div className="progress-meta">
            <span>{label}</span>
            <span>{percent}%</span>
          </div>
          <div className="progress-track" aria-label={label}>
            <span style={{ width: `${percent}%` }} />
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * Header for the final report wrap-up screens.
 *
 * This is separate from `AppHeader` because the wrap-up flow uses tab labels
 * rather than question progress.
 */
export function WrapHeader({ active, translations, isRtl = false }: { active: WrapTab; translations?: Translation; isRtl?: boolean }) {
  const tabs: { id: WrapTab; label: string }[] = [
    { id: "email", label: translations ? getAppText(translations, "wrap_email_copy", "Email Copy") : "Email Copy" },
    { id: "review", label: translations ? getAppText(translations, "wrap_review_results", "Review Results") : "Review Results" },
    { id: "submit", label: translations ? getAppText(translations, "wrap_submit_report", "Submit Report") : "Submit Report" }
  ];

  return (
    <header className={`wrap-header ${isRtl ? "rtl-result-content" : ""}`}>
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
