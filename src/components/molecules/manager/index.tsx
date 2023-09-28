import { Link, Outlet } from 'react-router-dom';
import { AccountNav } from '../../../components/auth/userData';

const AccountLayout = () => {
  return (
    // <div className='grid grid-cols-[_repeat(12,1fr)] px-[_calc(1rem_+_1vw)] gap-4 py-[2rem] lg:px-[_calc(1rem_+_8vw)]'>
    //   <div className='hidden col-[_1/_4] shadow-md rounded-md bg-white md:flex flex-col '>
    //     {AccountNav.map((accNav) => (
    //       <div key={accNav.id}>
    //         <Link
    //           className='flex items-center gap-4 py-4 justify-start pl-4 hover:bg-slate-400 hover:transition-all'
    //           to={accNav.link}
    //         >
    //           <span className='text-[1.6rem] '>{accNav.icon}</span>

    //           <span>{accNav.name}</span>
    //         </Link>
    //       </div>
    //     ))}
    //   </div>

    //   <div className='col-[_1/_-1] md:col-[_4/_-1] shadow-md rounded-md  bg-white'>
    //     <Outlet />
    //   </div>
    // </div>
    <h3>Hello from AccountLayout </h3>
  );
};

export default AccountLayout;
