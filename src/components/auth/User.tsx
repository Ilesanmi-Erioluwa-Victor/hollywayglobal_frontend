import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIdStore } from 'src/store/user/userStore';

const User = () => {
  const [storedUser, setStoredUser] = useState(null);
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
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [User, navigate]);

  return storedUser;
};

export default User;
