import React from 'react';
import Nav from './Nav';
import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <header className='px-[1rem] flex flex-col gap-[5px]'>
      <main className='text-black text-[13px]'>
        <section>
          <div>
            <h3>Hi</h3>
            <Link href={'/login'}>Sign in</Link>
            <span>or</span>
            <Link href={'/register'}>Sign up</Link>
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
