import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Register = () => {
  return (
    <div className=' paddTop flex'>
      <div className='h-[10rem] w-[55%]'>fgfbnbn</div>

      <div className='padd w-[45%] bg-green-900'>
        <form className='flex flex-col gap-[1rem]'>
          <h3 className='font-[500] text-[2rem]'>Create an account</h3>
          <p className='font-[400] text-[0.8rem]'>Enter your details below</p>
          <div className='flex flex-col gap-[1rem]'>
            {' '}
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
                name=''
              />
            </Box>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
