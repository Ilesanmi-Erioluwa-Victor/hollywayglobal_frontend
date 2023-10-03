import { UserAuth } from '../auth/User';
import MenuNav from './Navigation/Menu';
import { useAppSelector } from 'src/redux/hooks';
const Header = (): JSX.Element => {
  UserAuth().userInfo;
  const user = useAppSelector((state) => state.user.user);

  return (
    <>
      <header className='py-[1rem] w-[100%] bg-white'>
        {!user?.data && user?.status !== 'success' ? (
          <MenuNav />
        ) : (
          <MenuNav user={user?.data} />
        )}
      </header>
    </>
  );
};

export default Header;
