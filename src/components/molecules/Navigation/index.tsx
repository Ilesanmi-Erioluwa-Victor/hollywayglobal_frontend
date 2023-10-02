import { useUserStore } from 'src/store/user/userStore';
import LoggedNav from './LoggedNav';
import PublicNav from './PublicNav';
import Menu from './Menu';
import { UserAuth } from 'src/components/auth/User';

const Navigation = () => {
  const { userInfo } = UserAuth();
  return (
    <div className='w-11/12 md:w-10/12 mx-auto space-y-12'>
      {!userInfo?.data && userInfo?.status !== 'success' ? (
        <Menu />
      ) : (
        <Menu user={userInfo} />
      )}
    </div>
  );
};

export default Navigation;
