import { Link, useNavigate, Form } from 'react-router-dom';

import Wrapper from 'src/assets/wrappers/RegisterAndLoginWrapper';

import { FormRow, SubmitBtn } from 'src/components/atoms';

import { RedirectModal } from 'src/components/atoms';

const Login = () => {
  return (
    <Wrapper>
      <Form
        method='post'
        className='form'
      >
        {/* <Logo /> */}
        <h4>login</h4>

        <FormRow
          type={'email'}
          name={'email'}
        />

        <FormRow
          type={'password'}
          name={'password'}
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
      </Form>
    </Wrapper>
  );
};

export default Login;
