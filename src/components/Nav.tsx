import { v4 as uuidv4 } from 'uuid';
import { BiSearch } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

import RoundedInput from './atoms/Input';

type Nav = {
  name: string;
  title: string;
  id: string;
  link: string;
};

const NavLinks: Nav[] = [
  {
    name: 'Home',
    title: 'home',
    id: uuidv4(),
    link: '/',
  },

  {
    name: 'Contact',
    title: 'contact',
    id: uuidv4(),
    link: '/contact',
  },

  {
    name: 'About',
    title: 'about',
    id: uuidv4(),
    link: '/about',
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
    <nav className='padd flex justify-between items-center text-[0.8rem]'>
      <div>logo</div>

      <ul className='flex items-center justify-between md:gap-[3rem]'>
        {NavLinks.map((nav) => {
          return (
            <li
              title={nav.title}
              className='nav-item'
              key={nav.id}
            >
              <NavLink
                to={nav.link}
                className={({ isActive }) => (isActive ? 'text-red-800' : '')}
              >
                {nav.name}
              </NavLink>
              ;
            </li>
          );
        })}
      </ul>

      <RoundedInput
        placeholder='What are you looking for?'
        icon={<BiSearch className='w-4 h-4' />}
        className=''
      />
    </nav>
  );
};

export default Nav;
