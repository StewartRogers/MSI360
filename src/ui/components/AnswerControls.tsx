/**
 * Button-based radio row.
 *
 * The parent owns selection state and passes `checked`; this component only
 * renders accessible radio semantics and forwards clicks.
 */
export function RadioRow({ name, checked, label, isRtl = false, onChange }: { name: string; checked: boolean; label: string; isRtl?: boolean; onChange: () => void }) {
  return (
    <button className={`answer-row ${checked ? "selected" : ""} ${isRtl ? "rtl-answer-row" : ""}`} type="button" role="radio" aria-checked={checked} data-name={name} onClick={onChange}>
      <span className={`answer-control radio ${checked ? "checked" : ""}`} aria-hidden="true" />
      <span className="answer-label">{label}</span>
    </button>
  );
}

/**
 * Checkbox answer row used for select-all and grouped select-all questions.
 */
export function CheckboxRow({ checked, disabled = false, label, isRtl = false, onChange }: { checked: boolean; disabled?: boolean; label: string; isRtl?: boolean; onChange: () => void }) {
  return (
    <label className={`answer-row checkbox-row ${checked ? "selected" : ""} ${disabled ? "disabled" : ""} ${isRtl ? "rtl-answer-row" : ""}`}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
      <span className="answer-label">{label}</span>
    </label>
  );
}

/**
 * Image-backed radio option used for questions where the visual example is part
 * of the worker's decision.
 */
export function ImageRadioCard({ name, checked, label, image, isRtl = false, onChange }: { name: string; checked: boolean; label: string; image?: string; isRtl?: boolean; onChange: () => void }) {
  return (
    <button className={`image-radio-card ${checked ? "selected" : ""} ${isRtl ? "rtl-answer-row" : ""}`} type="button" role="radio" aria-checked={checked} data-name={name} onClick={onChange}>
      <span className={`answer-control radio ${checked ? "checked" : ""}`} aria-hidden="true" />
      <span className="answer-label">{label}</span>
      {image && <img src={image} alt="" />}
    </button>
  );
}
