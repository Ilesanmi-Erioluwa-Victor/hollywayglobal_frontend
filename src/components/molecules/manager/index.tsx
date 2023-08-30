import { Outlet } from 'react-router-dom';

const AccountLayout = () => {
  return (
    <div>
      <h2>Hello sir....</h2>
      <Outlet />
    </div>
  );
};

export default AccountLayout;
