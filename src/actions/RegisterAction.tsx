import { Link, Form, redirect } from 'react-router-dom';
import { apiClient } from 'src/services/apiService';
import { useSnackbar } from 'notistack';

const RegisterAction = async ({ request }: any) => {
  const { enqueueSnackbar } = useSnackbar();

  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  try {
    await apiClient.post('user/signup', data);
    enqueueSnackbar('registration successful');
    return redirect('/login');
  } catch (error: any) {
    enqueueSnackbar(error?.response?.data?.message, { variant: 'error' });
    return error;
  }
};

export default RegisterAction;
