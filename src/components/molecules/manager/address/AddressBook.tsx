import { useEffect, useState } from 'react';
import { Link, Outlet, useMatch } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { getAddressesAction } from 'src/redux/slices/address';

const AddressBook = () => {
  const dispatch = useAppDispatch();
  const [address, setAddress] = useState<any>(null);
  const { data } = useAppSelector((state) => state.user);
  useEffect(() => {
    const response = async () => {
      const address = await dispatch(getAddressesAction(data));
      setAddress(address?.payload?.data);
    };
    response();
  }, [data, dispatch]);

  console.log(address);
  const isCreateRoute = useMatch('/user/account/address/create');
  return (
    <div className='p-6'>
      {!isCreateRoute && (
        <div>
          <div className='flex items-center justify-between'>
            <h2 className='text-[1rem] font-[400]'>ADDRESS BOOK</h2>
            <Link
              className='text-white p-2 rounded-sm bg-green-500'
              to='create'
            >
              ADD NEW ADDRESS
            </Link>
          </div>
          <hr className='my-4' />
        </div>
      )}

      {!address?.length ? (
        <h3>No Address yet, add new address</h3>
      ) : (
        <div className='grid grid-cols-[_repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4'>
          {address.map((data: any) => {
            return (
              <div
                className='shadow-lg px-3 py-4 border rounded-md flex flex-col'
                key={data.id}
              >
                <p> {data?.deliveryAddress}</p>
                <p>{data?.country}</p>

                <p>{data?.region}</p>
                <p>{data?.city}</p>
                <p>
                  {data?.phone} / {data?.additional && data?.additional}
                </p>
              </div>
            );
          })}
        </div>
      )}

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AddressBook;
