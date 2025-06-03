import "./Input.css";

export default function Input({
  label,
  type,
  placeholder,
  disabled,
  value,
  onChange,
}: {
  label?: string;
  type: string;
  placeholder?: string;
  disabled?: string;
  value?: string | number | null;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <>
      <div className="flex_item">
        {label && (
          <>
            <label className="label">{label}</label>
          </>
        )}

        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled == "true"}
          value={value? value : ""}
          onChange={onChange}
        />
      </div>
    </>
  );
}
