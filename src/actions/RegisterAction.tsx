import { redirect } from 'react-router-dom';

import { apiClient } from 'src/services/apiService';

import { toast } from 'react-toastify';

import { useUserStore } from 'src/store/user/userStore';


export const RegisterAction = async ({ request }: any) => {
  const setUser = useUserStore((state) => state.setUser);
  
  
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const { firstName, lastName, email, password, mobile } = data;

  if (!firstName || !lastName || !email || !password || !mobile)
    return toast.error('all fields are required');

  try {
    await apiClient.post('auth/register', data);

    console.log('hiiii', setUser);
    toast.success('registration successful');

    return redirect('/login');
  } catch (error: any) {
    toast.error(error?.response?.data?.message);

    return error;
  }
};

export default RegisterAction;
