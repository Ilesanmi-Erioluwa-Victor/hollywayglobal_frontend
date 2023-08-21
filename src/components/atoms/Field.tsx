/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface FieldsType {
  label: string;
  id: string;
  value: string;
  name: string;
  onChange: any;
}

const Field: React.FC<FieldsType> = ({ label, id, value, onChange, name }) => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
        fullWidth
        label={label}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default Field;
