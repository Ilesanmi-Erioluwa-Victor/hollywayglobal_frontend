import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Field = ({label, id, value,onChage, name}) => {
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
        onChange={onChage}
      />
    </Box>
  );
};

export default Field;
