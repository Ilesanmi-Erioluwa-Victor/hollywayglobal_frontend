'use client';

import Nav from '../Nav';

const Header = (): JSX.Element => {
  return (
    <>
      <header className='py-[1rem] w-[100%]'>
        <Nav />
      </header>
      <hr />
    </>
  );
};

export default Header;
