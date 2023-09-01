import { Link, Outlet, useMatch} from 'react-router-dom';

const AddressBook = () => {
  const isCreateRoute = useMatch('/user/account/address/create');
  const address = [];
  return (
    <div className='p-6'>
      {!isCreateRoute && (
        <div className='flex items-center justify-between'>
          <h2>ADDRESS BOOK</h2>
          <Link
            className='text-white p-2 rounded-sm bg-[#DB4444]'
            to='create'
          >
            ADD NEW ADDRESS
          </Link>
        </div>
      )}

      <div>
        {isCreateRoute ? null : (
          <div className='nested-outlet' >
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressBook;
