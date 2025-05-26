

export default function Select({label, options, placeholder}: { label: string, options: string[], placeholder: string}) {
  return (
    <>
        <div className = "flex_item">
            <label>{label}</label><br/>
            <select>
                <option value={placeholder} hidden>{placeholder}</option>
                <option value={placeholder} hidden>{placeholder}</option>
                {options.map((opt) => (
                <option value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    </>
  )
}


