import React from 'react';
import Nav from './Nav';
import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <header className='px-[1rem] flex flex-col gap-[5px]'>
      <main className='text-black text-[13px]'>
        <section className='flex'>
          <div className='flex pr-[5px] gap-[5px]'>
            <h3>Hi!</h3>
            <Link
              href={'/login'}
              className='block underline text-blue-700'
            >
              Sign in
            </Link>
            <span>or</span>
            <Link
              href={'/register'}
              className='block underline text-blue-700'
            >
              register
            </Link>
          </div>
          <p>
            Free shipping for all Order of <span>$249</span>
          </p>
        </section>
      </main>
      <Nav />
    </header>
  );
};

export default Header;
