import { FieldSet } from '../../../components/atoms';

const ChangePassword = () => {
  return (
    <div className='p-6'>
      <h2 className='text-[1rem] font-[400] mb-3'>Password Settings</h2>
      <hr />
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
