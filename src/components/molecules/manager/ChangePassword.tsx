import { FieldSet } from '../../../components/atoms';

const ChangePassword = () => {
  return (
    <div className='p-6 flex flex-col gap-4'>
      <h2 className='text-[1.4rem] font-[400] mb-3'>Password Settings</h2>
      <hr className='mb-4' />

      <FieldSet
        label={'Current Password'}
        id={'currentPassword'}
        name='currentPassword'
        onChange={() => console.log()}
        value=''
        type='password'
      />

      <FieldSet
        label={'New Password'}
        id={'newPassword'}
        name='newPassword'
        onChange={() => console.log()}
        value=''
        type='password'
      />
      <button
        type='submit'
        className='flex items-center justify-end bg-[#DB4444] ml-auto mt-4 p-3 rounded-md text-white'
      >
        Save Changes
      </button>
    </div>
  );
};

export default ChangePassword;
