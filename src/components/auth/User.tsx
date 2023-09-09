/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIdStore } from 'src/store/user/userStore';
import { userDetailI } from 'src/types';

const User = () => {
  const [storedUser, setStoredUser] = useState<userDetailI | null>(null);
  const [fetchedName, setFetchedName] = useState({
    firstName: '',
    lastName: '',
  });
  const navigate = useNavigate();
  const { User } = UserIdStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await User();
        if (!user?.data?.id || !user?.data?.active) {
          navigate('/login');
        } else {
          setStoredUser(user?.data);
          setFetchedName({
            firstName: user?.data?.firstName || '',
            lastName: user?.data?.lastName || '',
          });
        }
      } catch (err: any) {
        throw (err);
      }
    };

    fetchData();
  }, [User, navigate]);

  return { storedUser, fetchedName };
};

export default User;
