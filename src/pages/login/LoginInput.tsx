interface LoginInputProps {
    id: string;
    label?: string;
    testId?: string;
    type?:string;
    value?:string;
    placeholder?:string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    ref?: React.RefObject<HTMLInputElement | null>;
    endIcon?: React.ReactNode;
}

const LoginInput = ({ id, label, testId, type, value, placeholder, onChange, ref, endIcon = null }: LoginInputProps) => {
    return (
        <div className="form-input">
            <input type={type} id={id} data-testid = {testId} placeholder={placeholder} value={value}  onChange={onChange} ref={ref} required />
            <label htmlFor={id}>{label}</label>
            {endIcon ? endIcon : null}
        </div>

        
    );
};

export default LoginInput;