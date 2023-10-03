import { UserAuth } from 'src/components/auth/User';
import MenuNav from './Navigation/Menu';

const Header = (): JSX.Element => {
  const { userInfo } = UserAuth();

  return (
    <>
      <header className='py-[1rem] w-[100%] bg-white'>
        {!userInfo?.data && userInfo?.status !== 'success' ? (
          <MenuNav />
        ) : (
          <MenuNav user={userInfo} />
        )}
      </header>
    </>
  );
};

export default Header;
