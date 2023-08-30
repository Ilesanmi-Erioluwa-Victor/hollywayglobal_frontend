import { FieldSet } from 'src/components/atoms';

const ChangePassword = () => {
  return (
    <div className='p-6'>
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
