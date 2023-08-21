'use client';

import Nav from '../Nav';
import RoundedInput from '../atoms/Input';

const Header = (): JSX.Element => {
  return (
    <>
      <header className='py-[1rem]'>
        <Nav />
        <RoundedInput
          placeholder='What are you looking for ?'
          className={'border-[4px] bg-[#F5F5F5] text-[#000000]'}
        />
      </header>
      <hr />
    </>
  );
};

export default Header;
