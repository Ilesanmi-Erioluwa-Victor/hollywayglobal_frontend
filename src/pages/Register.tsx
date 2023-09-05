import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import useUserStore from '../zustand/user/userStore';

import { FieldSet } from '../components/atoms';
import { ImagePage } from '../components';

const Register = () => {
  const { signUp, user } = useUserStore();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    mobile: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value.trim() });
  };

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signUp(data);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='paddTop flex'>
      <ImagePage />

      <div className='padd w-[100%] md:w-[45%] py-[1rem] paddTop self-center place-self-center content-center'>
        <form
          className='flex flex-col gap-[1rem]'
          onSubmit={handleInputSubmit}
        >
          <h3 className='text-[1.8rem] font-[500]  tracking-[1.44px] md:text-[1.6rem] md:tracking-[0px] lg:text-[2rem]'>
            Create an account
          </h3>
          <p className='font-[400] text-[1.3rem]'>Enter your details below</p>
          <div className='flex flex-col gap-[1rem]'>
            <FieldSet
              name='firstName'
              label='firstName'
              value={data.firstName}
              onChange={handleInputChange}
              id='firstName'
              type='text'
            />

            <FieldSet
              name='lastName'
              label='lastName'
              value={data.lastName}
              onChange={handleInputChange}
              id='lastName'
              type='text'
            />

            <FieldSet
              name='password'
              label='password'
              value={data.password}
              onChange={handleInputChange}
              id='password'
              type='password'
            />

            <FieldSet
              name='email'
              label='email'
              value={data.email}
              onChange={handleInputChange}
              id='email'
              type='email'
            />

            <FieldSet
              name='mobile'
              label='mobile'
              value={data.mobile}
              onChange={handleInputChange}
              id='mobile'
              type='text'
            />
          </div>
          <Button
            variant='contained'
            size='large'
            type='submit'
            sx={{
              backgroundColor: '#DB4444',
            }}
          >
            Create Account
          </Button>
        </form>
        <p className='text-[1rem] flex justify-end items-center pt-2 gap-4'>
          Already have account?{' '}
          <Link
            to={'/login'}
            className='text-[#DB4444]'
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
