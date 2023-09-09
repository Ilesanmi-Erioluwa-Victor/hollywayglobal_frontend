import LoggedNav from './LoggedNav';

import PublicNav from './PublicNav';

import { loginUserStore } from 'src/store/user/userStore';

const Navigation = () => {
  const { user } = loginUserStore();
  console.log(user);

  return <>{<PublicNav />}</>;
};

export default Navigation;
