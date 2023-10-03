import { useEffect, useState } from 'react';
import { Link, Outlet, useMatch } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { getAddressesAction } from 'src/redux/slices/address';
import { MdOutlineDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';

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
        <h3 className='font-semibold text-lg text-center my-auto'>
          No Address yet, add new address
        </h3>
      ) : (
        <div className='grid grid-cols-[_repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4'>
          {address.map((data: any) => {
            return (
              <div
                className='shadow-lg px-3 py-4 border rounded-md flex flex-col gap-3'
                key={data.id}
              >
                <>
                  <p> {data?.deliveryAddress}</p>
                  <p>{data?.country}</p>

                  <p>{data?.region}</p>
                  <p>{data?.city}</p>
                  <p>
                    {data?.phone} /{' '}
                    {data?.additionalPhone && data?.additionalPhone}
                  </p>
                  <hr />
                  <div className='flex justify-between items-center'>
                    <button
                      onClick={data.id}
                      className='p-2 text-[1.5rem] cursor-pointer transition-all rounded-[50%] hover:bg-green-500 hover:text-white'
                    >
                      {' '}
                      <MdOutlineDelete />
                    </button>
                    <button
                      onClick={data.id}
                      className='p-1 text-[1.5rem] transition-all cursor-pointer rounded-[50%] hover:bg-green-500 hover:text-white'
                    >
                      <CiEdit />
                    </button>
                  </div>
                </>
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
