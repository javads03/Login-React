import "./Select.css";

export default function Select({
  label,
  options,
  placeholder,
  value,
  onChange
}: {
  label: string;
  options: string[];
  placeholder: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <>
      <div className="flex_item">
        <label>{label}</label>
        <br />
        <select value={value} onChange={onChange}>
          <option value={placeholder} hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </>
  );
}
