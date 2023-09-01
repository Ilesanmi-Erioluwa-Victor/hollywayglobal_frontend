import { ChangeEvent, useState } from 'react';
import { FieldSet } from '../../../components/atoms';
import { MdPassword } from 'react-icons/md';

const ChangePassword = () => {
  const [data, setData] = useState({
    newPassword: '',
    currentPassword: '',
    confirmNewPassword: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value.trim() });
  };

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const { confirmNewPassword, newPassword, currentPassword } = data;
    event.preventDefault();
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className='p-6 flex flex-col gap-4'
      onSubmit={handleInputSubmit}
    >
      <div className='flex items-center gap-4'>
        <MdPassword className='text-[2rem]' />

        <h2 className='text-[1.4rem] font-[400]'>Password Settings</h2>
      </div>
      <hr className='mb-4' />

      <FieldSet
        label={'Current Password'}
        id={'currentPassword'}
        name='currentPassword'
        onChange={handleInputChange}
        value={data.currentPassword}
        type='password'
      />

      <FieldSet
        label={'New Password'}
        id={'newPassword'}
        name='newPassword'
        onChange={handleInputChange}
        value={data.newPassword}
        type='password'
      />

      <FieldSet
        label={'confirm New Password'}
        id={'confirmNewPassword'}
        name='confirmNewPassword'
        onChange={handleInputChange}
        value={data.confirmNewPassword}
        type='password'
      />
      <button
        type='submit'
        className='flex items-center justify-end bg-[#DB4444] ml-auto mt-4 p-3 rounded-md text-white'
      >
        Save Changes
      </button>
    </form>
  );
};

export default ChangePassword;
