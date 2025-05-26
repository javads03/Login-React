import './Input.css'

export default function Input({label, type, placeholder}: { label?: string, type: string, placeholder: string}) {
  return (
    <>
        <div className = "flex_item">
            {label && (
                <>
                <label>{label}</label>
                <br />
                </>
            )}
            <br/>
            <input type={type} placeholder={placeholder}/>
        </div>
    </>
  )
}
