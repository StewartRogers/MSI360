export function RadioRow({ name, checked, label, onChange }: { name: string; checked: boolean; label: string; onChange: () => void }) {
  return (
    <button className={`answer-row ${checked ? "selected" : ""}`} type="button" role="radio" aria-checked={checked} data-name={name} onClick={onChange}>
      <span className={`answer-control radio ${checked ? "checked" : ""}`} aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}

export function CheckboxRow({ checked, disabled = false, label, onChange }: { checked: boolean; disabled?: boolean; label: string; onChange: () => void }) {
  return (
    <label className={`answer-row checkbox-row ${checked ? "selected" : ""} ${disabled ? "disabled" : ""}`}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}

export function ImageRadioCard({ name, checked, label, image, onChange }: { name: string; checked: boolean; label: string; image?: string; onChange: () => void }) {
  return (
    <button className={`image-radio-card ${checked ? "selected" : ""}`} type="button" role="radio" aria-checked={checked} data-name={name} onClick={onChange}>
      <span className={`answer-control radio ${checked ? "checked" : ""}`} aria-hidden="true" />
      <span>{label}</span>
      {image && <img src={image} alt="" />}
    </button>
  );
}
