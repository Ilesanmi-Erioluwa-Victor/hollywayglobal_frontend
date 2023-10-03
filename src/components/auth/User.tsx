import { useEffect, useState } from 'react';
import { useNavigate, redirect } from 'react-router-dom';
import { User } from 'src/store/user/types';
import { useUserStore } from 'src/store/user/userStore';

export const UserAuth = () => {
  const navigate = useNavigate();
  const { fetchedUser} = useUserStore();
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userInfo') as string);
    if (storedData) {
      (async () => {
        try {
          const user = await fetchedUser(storedData.id, storedData.token);
          setUserInfo(user.data as User);
        } catch (error: any) {
          throw error;
        }
      })();
    }
  }, []);

  return { userInfo };
};
