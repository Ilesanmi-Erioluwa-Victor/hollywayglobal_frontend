import { ChangeEvent, useState, useEffect } from 'react';

import Button from '@mui/material/Button';

import { Link, useNavigate } from 'react-router-dom';

import { ImagePage } from '../components';

import { FieldSet } from '../components/atoms';

import { useSnackbar } from 'notistack';

import { loginUserStore } from '../store/user/userStore';

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState({
    password: '',
    email: '',
  });

  const { Login, user, isLoading, message, status } = loginUserStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (message || status === 'success') {
      enqueueSnackbar(message, {
        variant: 'success',
      });
    }
  }, [message, enqueueSnackbar, status]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value.trim() });
  };

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {} = data;
    try {
      console.log(data);
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
          <h3 className='text-[1.8rem] font-[500]  md:text-[1.4rem] tracking-[1.44px] md:tracking-[0px] lg:text-[2rem]'>
            Log in to Exclusive
          </h3>
          <p className='font-[400] text-[1.1rem] md:text-[1rem] lg:text-[1.3rem]'>
            Enter your details below
          </p>
          <div className='flex flex-col gap-[1rem]'>
            <FieldSet
              name='email'
              label='email'
              value={data.email}
              onChange={handleInputChange}
              id='email'
              type='email'
            />

            <FieldSet
              name='password'
              label='password'
              value={data.password}
              onChange={handleInputChange}
              id='password'
              type='password'
            />

            <div className='flex justify-between items-center flex-col gap-4'>
              <Button
                variant='contained'
                size='large'
                type='submit'
                sx={{
                  backgroundColor: '#DB4444',
                  width: '100%',
                  // [theme.breakpoints.down('md')]: {
                  //   width: '100%',
                  // },
                }}
              >
                Login
              </Button>

              <p>
                <Link
                  to={'/forgotten-password'}
                  className='text-[16px] font-[400] text-[#DB4444]'
                >
                  Forget Password?
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
