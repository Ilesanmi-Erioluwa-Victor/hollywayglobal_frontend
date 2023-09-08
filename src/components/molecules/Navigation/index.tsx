import LoggedNav from './LoggedNav';

import PublicNav from './PublicNav';

import { loginUserStore } from 'src/store/user/userStore';

const Navigation = () => {
  const { user, isAuthenticated } = loginUserStore();
  console.log(isAuthenticated);

  return <>{user ? <LoggedNav /> : <PublicNav />}</>;
};

export default Navigation;
