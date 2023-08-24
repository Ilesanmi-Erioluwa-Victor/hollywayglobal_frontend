import ImageBoom from '../../assets/boom.png';

const Boom = () => {
  return (
    <div className='bg-black  p-[4rem] shadow-md rounded-md flex text-white items-center justify flex-wrap md:flex-nowrap'>
      <div>
        <h3 className='text-lg'>Categories</h3>
        <h1 className='text-[3rem]'>Enhance Your Music Experience</h1>
        <button className='bg-[#00FF66] py-4 px-[3rem] rounded-sm mt-5'>
          Buy Now
        </button>
      </div>

      <div className='cum-bg p-6 relative overflow-hidden'>
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
