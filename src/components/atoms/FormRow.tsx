interface FormRowType {
  labelText?: string;
  name?: string;
  onChange?: any;
  type: string;
  value?: string;
  className?: string;
  disabled?: boolean;
  inputClass?: string;
}

const FormRow = ({
  type,
  name,
  labelText,
  onChange,
  value,
  className,
  disabled,
  inputClass,
}: FormRowType) => {
  return (
    <div className={`${className} form-row`}>
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className={`${inputClass} form-input`}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default FormRow;
