import { ChangeEvent, useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Wrapper from 'src/assets/wrappers/RegisterAndLoginWrapper';

import { FormRow, SubmitBtn } from 'src/components/atoms';

import { useSnackbar } from 'notistack';

import { useAppDispatch } from 'src/redux/hooks';

import { loginAction } from 'src/redux/slices/user';

import { userToken } from 'src/hooks/useLocalStorage';

const Login = () => {
  const dispatch = useAppDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState({
    password: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value.trim() });
  };

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = data;

    if (!email || !password)
      return enqueueSnackbar('Please, fill up all inputs ', {
        variant: 'error',
      });

    try {
      // const user = await login(data);
      // if (user && user.status === 'success') {
      //   const token = user?.token;
      //   const id = user?.id;
      //   userToken(token, id);
      //   navigate('/user/account');
      //   return enqueueSnackbar('You have successfully logged in', {
      //     variant: 'success',
      //   });
      // }
      const resultAction = await dispatch(loginAction(data));

      if (loginAction.fulfilled.match(resultAction)) {
        if (resultAction?.payload.status === 'success') {
          const token = resultAction?.payload?.token;
          const id = resultAction?.payload?.id;
          userToken(token, id);
          navigate('/');
          return enqueueSnackbar('you have successfully logged in', {
            variant: 'success',
          });
        }
      } else if (loginAction.rejected.match(resultAction)) {
        const error: any = resultAction.payload;
        return enqueueSnackbar(error.message, {
          variant: 'error',
        });
      }
    } catch (error: any) {
      if (error?.code === 'ERR_NETWORK') {
        return enqueueSnackbar(error?.message, {
          variant: 'error',
        });
      }
      return enqueueSnackbar(error?.response?.data?.message, {
        variant: 'error',
      });
    }
  };

  return (
    <Wrapper>
      <form
        className='form'
        onSubmit={handleInputSubmit}
      >
        {/* <Logo /> */}
        <h4>login</h4>

        <FormRow
          type={'email'}
          name={'email'}
          onChange={handleInputChange}
          value={data.email}
        />

        <FormRow
          type={'password'}
          value={data.password}
          name={'password'}
          onChange={handleInputChange}
        />
        <SubmitBtn text='login' />
        <p>
          Not yet a member ?
          <Link
            to={'/register'}
            className='member-btn'
          >
            register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
