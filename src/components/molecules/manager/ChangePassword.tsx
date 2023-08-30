import { FieldSet } from '../../../components/atoms';

const ChangePassword = () => {
  return (
    <div className='p-6'>
      <h2>Password Settings</h2>
      <FieldSet
        label={'password'}
        id={'password'}
        name='password'
        onChange={() => console.log()}
        value=''
        type='password'
      />
    </div>
  );
};

export default ChangePassword;
