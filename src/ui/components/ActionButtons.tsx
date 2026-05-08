export function ActionButtons({
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
