import { ChangeEvent, useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Wrapper from 'src/assets/wrappers/RegisterAndLoginWrapper';

import { FormRow, SubmitBtn } from 'src/components/atoms';

import { useSnackbar } from 'notistack';

import { useUserStore } from 'src/store/user/userStore';

import { userToken } from 'src/hooks/useLocalStorage';

const Login = () => {
  const { login, isLoading } = useUserStore();

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
      const user = await login(data);
      if (user && user.status === 'success') {
        const token = user?.token;
        const id = user?.id;
        userToken(token, id);
        navigate('/user/account');
        return enqueueSnackbar('You have successfully logged in', {
          variant: 'success',
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
