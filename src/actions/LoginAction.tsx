import { redirect } from 'react-router-dom';

import { toast } from 'react-toastify';

import { apiClient } from 'src/services/apiService';

const LoginAction = async ({ request }: any) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  try {
    await apiClient.post('/auth/login', data);

    toast.success('Login successful');

    return redirect('/dashboard');
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

export default LoginAction;
