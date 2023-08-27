import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';
import { BiSearch, BiHeartCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

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

const LoggedNav = (): JSX.Element => {
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <nav className='padd2 gap-[1rem] md:gap-0 flex justify-between items-center text-[0.8rem]'>
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
        className=''
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
            className='text-[1.5rem]'
          >
            {<AiOutlineShoppingCart />}
          </Link>
        </li>
        <li>
          <Link
            to={'/profile'}
            className='text-[1.5rem]'
          >
            {<CgProfile />}
          </Link>
        </li>
      </ul>

      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title='Open settings'>
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{ p: 0 }}
          >
            <Avatar
              alt='Remy Sharp'
              src='/static/images/avatar/2.jpg'
            />
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
          {settings.map((setting) => (
            <MenuItem
              key={setting}
              onClick={handleCloseUserMenu}
            >
              <Typography textAlign='center'>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </nav>
  );
};

export default LoggedNav;
