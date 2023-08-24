import ImageBoom from '../../assets/boom.png';

const Boom = () => {
  return (
    <div className='bg-black  p-[4rem] shadow-md rounded-md flex text-white items-center justify'>
      <div>
        <h3>Categories</h3>
        <h1 className='text-[3rem]'>Enhance Your Music Experience</h1>
      </div>

      <div className=''>
        <img
          src={ImageBoom}
          alt=''
        />
      </div>
    </div>
  );
};

export default Boom;
