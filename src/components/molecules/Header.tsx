import { UserAuth } from '../auth/User';
import MenuNav from './Navigation/Menu';
import { useAppSelector } from 'src/redux/hooks';
const Header = (): JSX.Element => {
  const userInfo = UserAuth().userInfo;
  const user = useAppSelector((state) => state.user.user);

  return (
    <>
      <header className='py-[1rem] w-[100%] bg-white'>
        {!userInfo ? <MenuNav /> : <MenuNav user={user?.data} />}
      </header>
    </>
  );
};

export default Header;
