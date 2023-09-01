import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { BiSearch, BiHeartCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import RoundedInput from '../atoms/Input';

import { AccountNav } from '../../components/auth/userData';

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

const LoggedNav = (): JSX.Element => {
  // const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <nav className='padd2 gap-[1rem] md:gap-0 flex justify-between items-center text-[0.8rem]'>
      <div>logo</div>

      <ul className='hidden lg:flex items-center justify-between md:gap-[3rem]'>
        {NavLinks.map((nav) => {
          return (
            <li
              title={nav.title}
              className='nav-item'
              key={nav.id}
            >
              <NavLink
                to={nav.link}
                className={({ isActive }) => (isActive ? 'custom' : '')}
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
        fieldsetClass='w-[100%] mx-4 lg:w-[auto]'
      />
      <ul className='flex items-center justify-between gap-4'>
        <li>
          <Link
            to={'/liked'}
            className='text-[1.5rem]'
          >
            {<BiHeartCircle />}
          </Link>
        </li>

        <li>
          <Link
            to={'/cart'}
            className='text-[1.5rem] relative'
          >
            <span className='absolute top-[-1rem] flex items-center justify-center text-[16px] right-[-8px] bg-orange-600 rounded-[50%] w-6 h-6 text-white p-2'>
              {0}
            </span>
            {<AiOutlineShoppingCart />}
          </Link>
        </li>

        <li>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={` Settings`}>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <CgProfile />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {AccountNav.map((profile) => (
                <MenuItem
                  key={profile.id}
                  onClick={handleCloseUserMenu}
                >
                  <Link to={profile.link}>{profile.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </li>
      </ul>
    </nav>
  );
};

export default LoggedNav;
