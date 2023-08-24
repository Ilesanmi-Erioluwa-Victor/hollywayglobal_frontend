import ImageBoom from '../../assets/boom.png';

const Boom = () => {
  return (
    <div className='bg-black  p-[4rem] shadow-md rounded-md flex'>
      <div></div>

      <div>
        <img
          src={ImageBoom}
          alt=''
        />
      </div>
    </div>
  );
};

export default Boom;
