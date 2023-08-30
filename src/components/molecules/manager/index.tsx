import { Outlet } from 'react-router-dom';

const AccountLayout = () => {
  return (
    <div className='grid grid-cols-[_repeat(auto-fit,_minmax(_200px,_1fr))] px-[_calc(1rem_+_8vw)]'>
      <h2>Hello sir....</h2>
      <Outlet />
    </div>
  );
};

export default AccountLayout;
