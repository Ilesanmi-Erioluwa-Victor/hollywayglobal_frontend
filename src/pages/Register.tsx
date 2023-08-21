import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Register = () => {
  return (
    <div className='bg-red-900 paddTop flex'>
      <div className='h-[10rem] bg-yellow-700 w-[50%]'>fgfbnbn</div>

      <div className='padd'>
        <form>
          <h3 className='font-[500] text-[2rem]'>Create an account</h3>
          <p className='font-[400] text-[0.8rem]'>Enter your details below</p>

          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField
              fullWidth
              label='fullWidth'
              id='fullWidth'
            />
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Register;
