import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { BiSearch } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import Logo from '../../../assets/favicon.ico';

import { AccountNav, publicNav } from '../../auth/userData';
import { FormRow, SubmitBtn } from 'src/components/atoms';

interface User {
  user?: any;
}

const MenuNav = ({ user }: User): JSX.Element => {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log(user)

  const logout = async () => {
    localStorage.removeItem('userInfo');
    navigate('/');
    return enqueueSnackbar('logged out successfully', { variant: 'success' });
  };

  return (
    <nav className='padd2 gap-[1rem] md:gap-0 flex justify-between items-center text-[0.8rem]'>
      <div>
        <Link to={'/'}>
          <img
            src={Logo}
            alt='Home'
            className='img'
          />
        </Link>
      </div>

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
          className='w-[15%] bg-[#22c55e] rounded-sm h-12 text-white hover:bg-[#048a35] transition-all'
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
            <span className='absolute top-[-0.7rem] flex items-center justify-center text-[18px] right-[-11px] text-green-500 rounded-[50%] w-6 h-6  p-2 font-semibold'>
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
                  ? `${user?.firstName} ${user?.lastName}`
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
                      src={user?.profilePhoto}
                      alt={`${user?.firstName} ${user?.lastName}`}
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
                  <button
                    onClick={logout}
                    className='p-4 text-black hover:bg-green-500 hover:text-white flex items-center justify-center w-full transition-all'
                  >
                    logout
                  </button>
                  <hr className='bg-gray-700 mb-2' />
                  {AccountNav.map((profile) => (
                    <MenuItem
                      key={profile.id}
                      onClick={handleCloseUserMenu}
                      sx={{
                        transition: 'all',
                        ':hover': {
                          backgroundColor: '#22c55e',
                          color: 'white',
                        },
                      }}
                      className=''
                    >
                      <Link
                        to={profile.link}
                        className='flex p-1 mx-2'
                      >
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
