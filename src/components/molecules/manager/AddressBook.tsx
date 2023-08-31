import { Link, Outlet } from 'react-router-dom';

const AddressBook = () => {
  return (
    <div className='p-6'>
      <div className='flex items-center justify-between'>
        <h2>AddressBook</h2>
        <Link
          className='text-white p-2 rounded-sm bg-[#DB4444]'
          to={'create'}
        >
          ADD NEW ADDRESS
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default AddressBook;
