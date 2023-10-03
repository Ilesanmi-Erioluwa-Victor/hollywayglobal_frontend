import { Link, useNavigate } from 'react-router-dom';

import { FormRow, SubmitBtn } from '../components/atoms';

import Wrapper from 'src/assets/wrappers/RegisterAndLoginWrapper';

import { ChangeEvent, useState } from 'react';

import { useSnackbar } from 'notistack';

import { useAppDispatch, useAppSelector } from 'src/redux/hooks';

import { registerAction } from 'src/redux/slices/user';

const Register = () => {
  const { isLoading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

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
      const resultAction = await dispatch(registerAction(data));

      if (registerAction.fulfilled.match(resultAction)) {
        const user = resultAction.payload === 'success';

        if (resultAction?.payload.status === 'success') {
          navigate('/login');
        }
      } else if (registerAction.rejected.match(resultAction)) {
        const error: any = resultAction.payload;
        return enqueueSnackbar(error.message, {
          variant: 'error',
        });
      }

      setData({
        password: '',
        email: '',
        mobile: '',
        firstName: '',
        lastName: '',
      });
    } catch (err: any) {
      throw err;
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

        {isLoading ? 'loading' : <SubmitBtn text='register' />}

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
