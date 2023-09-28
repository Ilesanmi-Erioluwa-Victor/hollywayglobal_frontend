import { Link, Form } from 'react-router-dom';

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
          name={'name'}
        />

        <FormRow
          type={'text'}
          name={'lastName'}
          labelText={'last name'}
        />

        <FormRow
          type={'text'}
          name={'location'}
        />

        <FormRow
          type={'email'}
          name={'email'}
        />

        <FormRow
          type={'password'}
          name={'password'}
        />

        <SubmitBtn text='register'/>
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
