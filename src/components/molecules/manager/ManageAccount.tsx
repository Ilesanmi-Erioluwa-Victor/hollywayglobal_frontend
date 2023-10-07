import { useAppSelector } from 'src/redux/hooks';

const ManageAccount = () => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const data = user?.data;
  if (isLoading) {
    return;
  }
  return (
    <div className='p-4'>
      <div className='shadow-lg p-4 border rounded-md'>
        <hr className='my-4' />
        <section className='flex gap-5 mb-4'>
          <h2>{data?.firstName}</h2>
          <h2>{data?.lastName}</h2>
        </section>
        <h2 className='mb-4'>{data?.email}</h2>

        <p>{data?.mobile}</p>
      </div>
    </div>
  );
};

export default ManageAccount;
