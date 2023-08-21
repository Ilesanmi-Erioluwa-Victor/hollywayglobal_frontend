import { v4 as uuidv4 } from 'uuid';
import { BiSearch } from 'react-icons/bi';

import RoundedInput from './atoms/Input';

type Nav = {
  name: string;
  title: string;
  id: string;
  link: string;
};

const NavLink: Nav[] = [
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
    link: '/pages/contact',
  },

  {
    name: 'About',
    title: 'about',
    id: uuidv4(),
    link: '/pages/about',
  },

  {
    name: 'Sign Up',
    title: 'Sign Up',
    id: uuidv4(),
    link: '/pages/register',
  },
];

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
