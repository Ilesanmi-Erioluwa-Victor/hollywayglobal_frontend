

interface FormRowType {
  labelText?: string;
  name: string;
  onChange?: any;
  type: string;
  value?: string;
}

const FormRow = ({ type, name, labelText, onChange, value }: FormRowType) => {
  return (
    <div className='form-row'>
      <label
        htmlFor={name}
        className='form-label'
      >
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className='form-input'
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default FormRow;
