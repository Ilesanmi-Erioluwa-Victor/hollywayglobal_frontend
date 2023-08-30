import { Outlet } from 'react-router-dom';

const AccountLayout = () => {
  return (
    <div className='grid grid-cols-[_repeat(12,1fr)] px-[_calc(1rem_+_8vw)] gap-4 py-4'>
      <h2 className='col-[_1/_5]'>Hello sir....</h2>

      <div className='col-[_5/_-1]'>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;
