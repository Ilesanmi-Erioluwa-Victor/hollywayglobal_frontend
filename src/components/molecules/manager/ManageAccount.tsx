import { BiPencil } from 'react-icons/bi';
import User from 'src/components/auth/User';

const ManageAccount = () => {
  const { storedUser } = User();
  return (
    <div className='p-6'>
      <h2 className='text-[1.6rem] mb-3'>Account Overview</h2>
      <hr />
      <div className='grid grid-cols-[_repeat(auto-fit,_minmax(200px,1fr))] gap-4 py-[2rem]'>
        <div className='border p-4 rounded-md'>
          <h3 className='text-[1rem] py-2 font-[500] font-[Arial] mb-2'>
            ACCOUNT DETAILS
          </h3>
          <hr className='mb-3' />
          <div className='flex flex-col gap-2'>
            <p className='text-[0.9rem] font-[500]'>
              {storedUser?.firstName} {storedUser?.lastName}
            </p>

            <p className='font-[500] text-[0.9rem]'>{storedUser?.email}</p>
            <p className='font-[500] text-[0.9rem]'>{storedUser?.mobile}</p>
          </div>
        </div>

        <div className='border p-4 rounded-md'>
          <div className='flex justify-between items-center'>
            <h3 className='text-[1rem] py-2 font-[400] font-[Arial] mb-2'>
              ADDRESS BOOK
            </h3>
            <span className='text-[1.4rem] text-orange-500 cursor-pointer hover:bg-orange-200 p-2 rounded-[50%] transition-all'>
              <BiPencil />
            </span>
          </div>
          <hr />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          nulla soluta impedit asperiores quod enim omnis illo voluptas
          exercitationem, corporis doloremque quia neque veniam, eaque quaerat
          quibusdam? Optio nam dolores voluptatibus quod, magni assumenda neque,
          mollitia fugit inventore architecto perferendis cumque officia at
          maxime voluptates fugiat blanditiis, laborum qui quidem!
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
