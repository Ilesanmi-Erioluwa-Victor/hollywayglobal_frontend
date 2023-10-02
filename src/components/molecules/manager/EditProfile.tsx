import { ChangeEvent, useState } from 'react';
// import { FieldSet } from '../../../components/atoms';
import { BiUserCheck } from 'react-icons/bi';

import { useSnackbar } from 'notistack';

const EditProfile = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value.trim() });
  };

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { firstName, lastName, email } = data;

    if (!firstName || !lastName || !email) {
      return enqueueSnackbar(
        'Please fill up the form, before you change your details',
        {
          variant: 'error',
        }
      );
    }

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
        <BiUserCheck className='text-[2rem]' />

        <h2 className='text-[1.4rem] font-[400]'>Profile Details</h2>
      </div>
      <hr className='mb-4' />

      {/* <FieldSet
        label={'First Name'}
        id={'firstName'}
        name='firstName'
        onChange={handleInputChange}
        value={data.firstName}
        type='text'
      />

      <FieldSet
        label={'last Name'}
        id={'lastName'}
        name='lastName'
        onChange={handleInputChange}
        value={data.lastName}
        type='text'
      />

      <FieldSet
        label={'Email'}
        id={'email'}
        name='email'
        onChange={handleInputChange}
        value={data.email}
        type='email'
      /> */}
      <button
        type='submit'
        className='flex items-center justify-end bg-[#DB4444] ml-auto mt-4 p-3 rounded-md text-white'
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProfile;
