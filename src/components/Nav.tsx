import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import {
  HomeIcon,
  LockOpenIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';

import RoundedInput from './atoms/Input';

type Nav = {
  name: string;
  title: string;
  icon: object;
  id: string;
  link: string;
};

const NavLink: Nav[] = [
  {
    name: 'Home',
    title: 'home',
    icon: <HomeIcon />,
    id: uuidv4(),
    link: '/',
  },

  {
    name: 'Register',
    title: 'register',
    icon: <UserPlusIcon />,
    id: uuidv4(),
    link: '/register',
  },

  {
    name: 'Login',
    title: 'login',
    icon: <LockOpenIcon />,
    id: uuidv4(),
    link: '/login',
  },
];

const Nav = (): JSX.Element => {
  return (
    <nav className='padd'>
      <div>logo</div>
      
      <ul className='bg-red-900'>
        {NavLink.map((nav) => {
          return (
            <li
              title={nav.title}
              className='nav-item'
              key={nav.id}
            >
              <Link
                href={nav.link}
                className='nav-link  text-black'
              >
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>

       <RoundedInput
          placeholder='What are you looking for ?'
          className={'border-[4px] bg-[#F5F5F5] text-[#000000]'}
        />
    </nav>
  );
};

export default Nav;
