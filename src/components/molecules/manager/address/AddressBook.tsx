import { Link, Outlet, useMatch } from 'react-router-dom';

const AddressBook = () => {
  const isCreateRoute = useMatch('/user/account/address/create');
  return (
    // <div className='p-6'>
    //   {!isCreateRoute && (
    //     <div>
    //       <div className='flex items-center justify-between'>
    //         <h2 className='text-[1rem] font-[400]'>ADDRESS BOOK</h2>
    //         <Link
    //           className='text-white p-2 rounded-sm bg-[#DB4444]'
    //           to='create'
    //         >
    //           ADD NEW ADDRESS
    //         </Link>
    //       </div>
    //       <hr className='my-4' />
    //     </div>
    //   )}

    //   <div>
    //       <Outlet />
    //   </div>
    // </div>
    <h2>Hello from AddressBook</h2>
  );
};

export default AddressBook;
