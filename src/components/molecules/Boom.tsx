import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Boom = () => {
   const responsive = {
     0: { items: 1 },
     568: { items: 1 },
     1024: { items: 1 },
  };
  
  const items = [
    <div
      className='item bg-red-500 w-full'
      data-value='1'
    >
      1
    </div>,
    <div
      className='item bg-red-500 w-full'
      data-value='2'
    >
      2
    </div>,
    <div
      className='item bg-red-500 w-full'
      data-value='3'
    >
      3
    </div>,
    <div
      className='item bg-red-500 w-full'
      data-value='4'
    >
      4
    </div>,
    <div
      className='item bg-red-500 w-full'
      data-value='5'
    >
      5
    </div>,
  ];
  return (
    <div className='  shadow-md rounded-md flex text-white items-center justify '>
      {/* <div>
        <h3 className='text-base md:text-lg'>Categories</h3>
        <h1 className='text-[2rem] md:text-[3rem]'>
          Enhance Your Music Experience
        </h1>
        <button className='bg-[#00FF66] py-4 px-[3rem] rounded-sm mt-5'>
          Buy Now
        </button>
      </div> */}
      <div className=' w-[10%] overflow-hidden relative'>
        <AliceCarousel
          autoPlay
          autoPlayStrategy='none'
          autoPlayInterval={1000}
          animationDuration={1000}
          animationType='fadeout'
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
        />
      </div>
    </div>
  );
};

export default Boom;
