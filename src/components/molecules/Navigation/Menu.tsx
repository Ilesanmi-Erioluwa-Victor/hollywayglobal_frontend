import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BiSearch, BiHeartCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { AccountNav, publicNav } from '../../auth/userData';
import { FormRow, SubmitBtn } from 'src/components/atoms';

interface User {
  user?: any;
}

const MenuNav = ({ user }: User): JSX.Element => {
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

      <form className='w-[80%] flex gap-2 items-center relative'>
        <BiSearch className='absolute left-3 h-[5rem] w-[1.4rem]' />
        <input
          type='search'
          name='search'
          className='w-full border p-3 rounded-sm active:border-none text-center text-[1rem]'
          placeholder='Search for agro products, chemicals ...'
        />
        <button
          type='submit'
          className='w-[15%] bg-[#DB4444] rounded-sm h-12 text-white hover:bg-[#BD4444] transition-all'
        >
          Search
        </button>
      </form>

      <ul className='flex items-center justify-between gap-4'>
        <li></li>

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
          <div>
            <Tooltip
              title={
                user
                  ? `${user?.data?.firstName} ${user?.data?.lastName}`
                  : 'Default user'
              }
            >
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                {!user ? (
                  <CgProfile />
                ) : (
                  <div className='w-[2.5rem]'>
                    <img
                      src={user?.data?.profilePhoto}
                      alt={`${user?.data?.firstName} ${user?.data?.lastName}`}
                      className=' rounded-[50%] img'
                    />
                  </div>
                )}
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
              {user ? (
                <div>
                  {AccountNav.map((profile) => (
                    <MenuItem
                      key={profile.id}
                      onClick={handleCloseUserMenu}
                    >
                      <Link
                        to={profile.link}
                        className='flex gap-2'
                      >
                        <span>{profile.icon}</span>
                        <span>{profile.name}</span>
                      </Link>
                    </MenuItem>
                  ))}
                </div>
              ) : (
                <div>
                  <Link
                    to={'/login'}
                    className='flex items-center justify-center p-4 text-black transition-all hover:bg-[#DB4444] hover:text-white'
                  >
                    Login
                  </Link>
                  <hr className='mb-3' />
                  {publicNav.map((profile) => (
                    <MenuItem
                      key={profile.id}
                      onClick={handleCloseUserMenu}
                    >
                      <Link
                        to={profile.link}
                        className='flex gap-2 '
                      >
                        <span className='mx-4'>{profile.name}</span>
                      </Link>
                    </MenuItem>
                  ))}
                </div>
              )}
            </Menu>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
