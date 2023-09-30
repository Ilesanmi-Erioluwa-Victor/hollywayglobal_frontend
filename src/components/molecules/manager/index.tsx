import { useState, createContext, useContext } from 'react';

import { Link, Outlet } from 'react-router-dom';
import { AccountNav } from '../../../components/auth/userData';
import { useDashboardStore } from 'src/store/user/userStore';

interface User {}
interface DashboardState {
  user: User | null;
  showSidebar: boolean;
  isDarkTheme: boolean;
  toggleDarkTheme: () => any;
  toggleSidebar: () => boolean;
  logoutUser: () => void;
}

const AccountLayout = () => {
  const user = useDashboardStore((state) => state.user);
  const showSidebar = useDashboardStore((state) => state.showSidebar);
  const isDarkTheme = useDashboardStore((state) => state.isDarkTheme);
  const toggleDarkTheme = useDashboardStore((state) => state.toggleDarkTheme);
  const toggleSidebar = useDashboardStore((state) => state.toggleSidebar);
  const logoutUser = useDashboardStore((state) => state.logoutUser);

  console.log(user);

  return (
    <div className='grid grid-cols-[_repeat(12,1fr)] px-[_calc(1rem_+_1vw)] gap-4 py-[2rem] lg:px-[_calc(1rem_+_8vw)]'>
      <div className='hidden col-[_1/_4] shadow-md rounded-md bg-white md:flex flex-col '>
        {AccountNav.map((accNav) => (
          <div key={accNav.id}>
            <Link
              className='flex items-center gap-4 py-4 justify-start pl-4 hover:bg-slate-400 hover:transition-all'
              to={accNav.link}
            >
              <span className='text-[1.6rem] '>{accNav.icon}</span>

              <span>{accNav.name}</span>
            </Link>
          </div>
        ))}
      </div>

      <div className='col-[_1/_-1] md:col-[_4/_-1] shadow-md rounded-md  bg-white'>
        <Outlet context={{ user }} />
      </div>
    </div>
  );
};

export default AccountLayout;
