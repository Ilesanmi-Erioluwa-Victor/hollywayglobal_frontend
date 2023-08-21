import Button from '@mui/material/Button';

import { FieldSet } from '../components/atoms';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className=' paddTop flex'>
      <div className=' w-[55%] bg-red-600'>fgfbnbn</div>

      <div className='padd w-[45%] py-[1rem] paddTop self-center place-self-center content-center'>
        <form className='flex flex-col gap-[1rem]'>
          <h3 className='font-[500] text-[36px] tracking-[1.44px]'>
            Create an account
          </h3>
          <p className='font-[400] text-[0.8rem]'>Enter your details below</p>
          <div className='flex flex-col gap-[1rem]'>
            <FieldSet
              name='firstName'
              label='firstName'
              value='firstName'
              onChange={''}
              id='firstName'
              type='text'
            />

            <FieldSet
              name='lastName'
              label='lastName'
              value='lastName'
              onChange={''}
              id='lastName'
              type='text'
            />

            <FieldSet
              name='password'
              label='password'
              value='password'
              onChange={''}
              id='password'
              type='password'
            />

            <FieldSet
              name='email'
              label='email'
              value='email'
              onChange={''}
              id='email'
              type='email'
            />

            <FieldSet
              name='mobile'
              label='mobile'
              value='mobile'
              onChange={''}
              id='mobile'
              type='text'
            />
          </div>
          <Button
            variant='contained'
            type='submit'
          >
            Create Account
          </Button>
        </form>
        <p>
          Already have account? <Link to={'/login'}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
