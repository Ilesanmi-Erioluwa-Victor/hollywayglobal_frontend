import Navigation from './Navigation';

const Header = (): JSX.Element => {
  return (
    <>
      <header className='py-[1rem] w-[100%] bg-white'>
        <Navigation />
      </header>
      <hr />
    </>
  );
};

export default Header;
