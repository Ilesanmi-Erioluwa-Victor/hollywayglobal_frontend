import Image1 from '../../assets/signup.png';
import Image from '../../assets/boom.png';
const BottomArrival = () => {
  return (
    <div className='bg-white  p-4 shadow-md rounded-md'>
      <div className='flex gap-6 items-center'>
        <span className='block w-6 rounded-sm h-12 bg-[#DB4444]'></span>
        <span className='block text-[#DB4444]'>categories</span>
      </div>

      <h2 className='mt-8 font-[400] text-lg mb-10'>Browse By Category</h2>
      <div className='grid p-[1rem] gap-x-[1rem] gap-y-[5px] grid-cols-[repeat(12,1fr)]  grid-rows-[repeat(10,1fr)]'>
        <div className='col-[1_/_7] row-[1_/_-1] rounded-md bg-[#f0f0f0] flex items-center justify-center p-4'>
          <img
            src={Image}
            alt=''
          />
        </div>
        <div className='col-[7_/_-1] row-[1_/_7] rounded-md bg-[#f0f0f0] flex items-center justify-center p-4'>
          <img
            src={Image}
            alt=''
            className='carousel-image'
          />
        </div>

        <div className='col-[7_/_10] row-[7_/_-1] rounded-md bg-[#f0f0f0] flex items-center justify-center p-4'>
          <img
            src={Image}
            alt=''
          />
        </div>

        <div className='bg-[#f0f0f0] col-[10_/_-1] row-[7_/_-1] rounded-md flex items-center justify-center p-4'>
          <img
            src={Image1}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default BottomArrival;
