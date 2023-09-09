import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoggedNav from './LoggedNav';

import PublicNav from './PublicNav';

import { UserIdStore } from 'src/store/user/userStore';

const Navigation = () => {
  const [storedUser, setStoreUser] = useState(null);
  const navigate = useNavigate();
  const { User } = UserIdStore();

  useEffect(() => {
    const fetchData = async () => {
      return await User()
        .then((user) => {
          if (!user?.data?.id || !user?.data?.active) {
            navigate('/login');
          } else {
            setStoreUser(user?.data);
          }
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, [User, navigate]);

  return <>{!storedUser ? <PublicNav /> : <LoggedNav user={storedUser} />}</>;
};

export default Navigation;
