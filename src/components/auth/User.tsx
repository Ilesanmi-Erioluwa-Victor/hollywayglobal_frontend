import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'src/store/user/userStore';

const User = () => {
  const navigate = useNavigate();
  const { fetchedUser, isLoading } = useUserStore();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userInfo') as string);

    if (!storedData) {
      navigate('/login');
      return;
    }

    if (!storedData.id || !storedData.token) {
      navigate('/login');
      return;
    }

    const user = fetchedUser(storedData.id, storedData.token);
    user.then((data) => {
      setUserInfo(data.data as any);
    });
  }, [fetchedUser, navigate]);

  return { userInfo };
};

export default User;
