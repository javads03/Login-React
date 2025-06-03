import "./Select.css";

export default function Select({
  label,
  options,
  optionsId,
  placeholder,
  value,
  onChange
}: {
  label: string;
  options: string[];
  optionsId?:number[];
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
          {options.map((opt, index) => (
            <option key={index} value={optionsId ? optionsId[index] : opt}>{opt}</option>
          ))}
        </select>
      </div>
    </>
  );
}
