import { v4 as uuidv4 } from 'uuid';
import { BiSearch } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

import RoundedInput from './atoms/Input';

type Nav = {
  name: string;
  title: string;
  id: string;
  link: string;
  isOnboard?: boolean;
};

const NavLinks: Nav[] = [
  {
    name: 'Home',
    title: 'home',
    id: uuidv4(),
    link: '/',
    isOnboard: true,
  },

  {
    name: 'Contact',
    title: 'contact',
    id: uuidv4(),
    link: '/contact',
    isOnboard: true
  },

  {
    name: 'About',
    title: 'about',
    id: uuidv4(),
    link: '/about',
    isOnboard: true
  },

  {
    name: 'Sign Up',
    title: 'Sign Up',
    id: uuidv4(),
    link: '/register',
  },
];

const Nav = (): JSX.Element => {
  return (
    <nav className='padd gap-[1rem] md:gap-0 flex justify-between items-center text-[0.8rem]'>
      <div>logo</div>

      <ul className='hidden md:flex items-center justify-between md:gap-[3rem]'>
        {NavLinks.map((nav) => {
          return (
            <li
              title={nav.title}
              className='nav-item'
              key={nav.id}
            >
              <NavLink
                to={nav.link}
                className={({ isActive }) =>
                  isActive
                    ? 'custom'
                    : ''
                }
              >
                {nav.name}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <RoundedInput
        placeholder='What are you looking for?'
        icon={<BiSearch className='w-4 h-4' />}
        className=""
      />
    </nav>
  );
};

export default Nav;
