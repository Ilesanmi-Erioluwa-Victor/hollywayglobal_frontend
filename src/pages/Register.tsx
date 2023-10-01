import { Link, useNavigate } from 'react-router-dom';

import { FormRow, SubmitBtn } from '../components/atoms';

import Wrapper from 'src/assets/wrappers/RegisterAndLoginWrapper';

import { ChangeEvent, useState } from 'react';

import { useSnackbar } from 'notistack';

import { useUserStore } from 'src/store/user/userStore';

const Register = () => {
  const { register } = useUserStore();

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

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
    const { password, email, firstName, lastName, mobile } = data;

    if (!password || !email || !firstName || !lastName || !mobile) {
      return enqueueSnackbar('Please, fill up all inputs ', {
        variant: 'error',
      });
    }

    try {
      const user = await register(data);
      console.log(user);
      if (user?.status === 'success') {
        navigate('/login');
        return enqueueSnackbar('login into your account', {
          variant: 'success',
        });
      }
      setData({
        password: '',
        email: '',
        mobile: '',
        firstName: '',
        lastName: '',
      });
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
        <h4>Register</h4>
        <FormRow
          type={'text'}
          name={'firstName'}
          labelText={'first name'}
          onChange={handleInputChange}
          value={data.firstName}
        />

        <FormRow
          type={'text'}
          name={'lastName'}
          labelText={'last name'}
          onChange={handleInputChange}
          value={data.lastName}
        />

        <FormRow
          type={'text'}
          name={'email'}
          onChange={handleInputChange}
          value={data.email}
        />

        <FormRow
          type={'password'}
          name={'password'}
          onChange={handleInputChange}
          value={data.password}
        />

        <FormRow
          type={'text'}
          name={'mobile'}
          onChange={handleInputChange}
          value={data.mobile}
        />

        <SubmitBtn text='register' />
        <p>
          Already a member ?
          <Link
            to={'/login'}
            className='member-btn'
          >
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
