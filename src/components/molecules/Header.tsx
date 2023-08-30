import Nav from '../Nav';
import LoggedNav from '../LoggedNav';

const Header = (): JSX.Element => {
  return (
    <>
      <header className='py-[1rem] w-[100%] bg-white'>
        <LoggedNav />
      </header>
      <hr />
    </>
  );
};

export default Header;
