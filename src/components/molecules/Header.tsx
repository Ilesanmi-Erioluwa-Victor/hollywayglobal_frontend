import { UserAuth } from 'src/components/auth/User';
import MenuNav from './Navigation/Menu';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
const Header = (): JSX.Element => {
  const { userInfo } = UserAuth();
  const user = useAppSelector((state) => state.user.user);
  return (
    <>
      <header className='py-[1rem] w-[100%] bg-white'>
        {!user?.data && user?.status !== 'success' ? (
          <MenuNav />
        ) : (
          <MenuNav user={userInfo} />
        )}
      </header>
    </>
  );
};

export default Header;
