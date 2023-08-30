import { FieldSet } from '../../../components/atoms';

const ChangePassword = () => {
  return (
    <div className='p-6'>
      <h2 className='text-[1.4rem] font-[400] mb-3'>Password Settings</h2>
      <hr className='mb-4' />
      <FieldSet
        label={'currentPassword'}
        id={'currentPassword'}
        name='currentPassword'
        onChange={() => console.log()}
        value=''
        type='password'
      />

      <FieldSet
        label={'newPassword'}
        id={'newPassword'}
        name='newPassword'
        onChange={() => console.log()}
        value=''
        type='password'
      />
    </div>
  );
};

export default ChangePassword;
