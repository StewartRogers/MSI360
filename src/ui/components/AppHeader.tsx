import type { HeaderTone, WrapTab } from "../../app/types";

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

export function WrapHeader({ active }: { active: WrapTab }) {
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
