/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState, useEffect } from 'react';

import Button from '@mui/material/Button';

import { Link, useNavigate } from 'react-router-dom';

import { ImagePage } from '../components';

import { FieldSet } from '../components/atoms';

import { RedirectModal } from 'src/components/atoms';

import { useSnackbar } from 'notistack';

import { loginUserStore } from '../store/user/userStore';
import { userToken } from 'src/hooks/useLocalStorage';

// import { setBearerToken } from 'src/services/apiService';

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { Login } = loginUserStore();

  const [countdown, setCountdown] = useState<null | number>(null);
  const [redirecting, setRedirecting] = useState(false);

  const [data, setData] = useState({
    password: '',
    email: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(timer);
            setRedirecting(true); // Set a flag to indicate redirection
          }
          return (prevCountdown as number) - 1;
        });
      }, 1000);
    }
  }, [countdown]);

  useEffect(() => {
    if (redirecting) {
      navigate('/');
    }
  }, [redirecting, navigate]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value.trim() });
  };

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = data;

    if (!email || !password) {
      return enqueueSnackbar('Please, fill up all inputs ', {
        variant: 'error',
      });
    }

    try {
      const user = await Login(data);
      if (user) {
        const token = user?.data.token;
        const id = user?.data.id;
        userToken(token, id);
        // setBearerToken(token);
        if (
          user.status === 'success' &&
          user.message === 'login successfully'
        ) {
          setCountdown(5);
          return enqueueSnackbar('You have successfully logged in', {
            variant: 'success',
          });
        }
      }
    } catch (error: any) {
      if (error.message === 'Network Error') {
        return enqueueSnackbar(error.message, {
          variant: 'error',
        });
      } else {
        return enqueueSnackbar(error.response.data.message, {
          variant: 'error',
        });
      }
    }
  };

  return (
    <div className='paddTop flex'>
      {countdown !== null ? (
        <RedirectModal countdown={countdown} />
      ) : (
        <>
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
                      height: '3rem',
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
        </>
      )}
    </div>
  );
};

export default Login;
