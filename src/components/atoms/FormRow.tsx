/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface FormRowType {
  labelText?: string;
  name: string;
  onChange?: any;
  type: string;
}

const FormRow = ({ type, name, labelText, onChange }: FormRowType) => {
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
        required
      />
    </div>
  );
};

export default FormRow;
