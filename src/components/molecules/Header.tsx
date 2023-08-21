'use client';

import React from 'react';
import Nav from '../Nav';
import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <>
      <header className='py-[1rem]'>
        <Nav />
      </header>
      <hr />
    </>
  );
};

export default Header;
