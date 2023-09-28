import Image1 from '../../assets/images/signup.png';
import Image from '../../assets/images/boom.png';

const BottomArrival = () => {
  return (
    <div className='bg-white  p-4 shadow-md rounded-md'>
      <div className='flex gap-6 items-center'>
        <span className='block w-6 rounded-sm h-12 bg-[#DB4444]'></span>
        <span className='block text-[#DB4444]'>Newest Products</span>
      </div>

      <h2 className='mt-8 font-[400] text-lg mb-4'>
        Buy now and Get Whooping Discount
      </h2>
      <div className='grid p-[1rem] gap-x-[1rem] gap-y-[5px] grid-cols-[repeat(12,1fr)]  grid-rows-[repeat(10,1fr)]'>
        <div className='col-[1_/_7] row-[1_/_-1] rounded-md bg-[#f0f0f0] flex items-center justify-center p-4'>
          <img
            src={Image}
            alt=''
          />
        </div>
        <div className='col-[7_/_-1] row-[1_/_-1] md:row-[1_/_7] rounded-md bg-[#f0f0f0] flex items-center justify-center p-4'>
          <img
            src={Image}
            alt=''
            className='carousel-image'
          />
        </div>

        <div className='col-[1_/_-1] row-[11_/_-1] md:col-[7_/_10] md:row-[7_/_-1] rounded-md bg-[#f0f0f0] flex items-center justify-center p-4'>
          <img
            src={Image}
            alt=''
          />
        </div>

        <div className='bg-[#f0f0f0] col-[1_/_-1] md:col-[10_/_-1] md:row-[7_/_-1] rounded-md flex items-center justify-center p-4'>
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
