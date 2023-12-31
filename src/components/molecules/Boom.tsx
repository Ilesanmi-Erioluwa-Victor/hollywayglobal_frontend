import ImageBoom from '../../assets/images/boom.png';

const Boom = () => {
  return (
    <div className='bg-black  p-[1rem] md:p-[4rem] shadow-md rounded-md flex text-white items-center justify flex-wrap md:flex-nowrap'>
      <div>
        <h3 className='text-base md:text-lg'>Categories</h3>
        <h1 className='text-[2rem] md:text-[3rem]'>
          Enhance Your Music Experience
        </h1>
        <button className='bg-[#00FF66] py-4 px-[3rem] rounded-sm mt-5'>
          Buy Now
        </button>
      </div>

      <div className='cum-bg p-6 relative overflow-hidden w-[100%]'>
        <img
          src={ImageBoom}
          alt=''
          className='carousel-image'
        />
        <div className='overlay'></div>
      </div>
    </div>
  );
};

export default Boom;
