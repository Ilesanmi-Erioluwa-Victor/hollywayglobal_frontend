import { Link, Form, redirect } from 'react-router-dom';

import { FormRow, SubmitBtn } from '../components/atoms';

import Wrapper from 'src/assets/wrappers/RegisterAndLoginWrapper';

const Register = () => {
  return (
    <Wrapper>
      <Form
        method='post'
        className='form'
      >
        {/* <Logo /> */}
        <h4>Register</h4>
        <FormRow
          type={'text'}
          name={'firstName'}
          labelText={'first name'}
        />

        <FormRow
          type={'text'}
          name={'lastName'}
          labelText={'last name'}
        />

        <FormRow
          type={'text'}
          name={'email'}
        />

        <FormRow
          type={'password'}
          name={'password'}
        />

        <FormRow
          type={'text'}
          name={'mobile'}
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
      </Form>
    </Wrapper>
  );
};

export default Register;
