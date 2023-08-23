import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Image from '../../assets/dark_800.png';
import Image1 from '../../assets/signup.png';
import Image2 from '../../assets/react.svg';

const NewArrival = () => {
  const slides = [Image, Image1, Image2];

  return (
    <div className='shadow-md rounded-md w-[100%] bg-white'>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
        showStatus={true}
      >
        {slides.map((img) => (
          <div
            className='carousel-image-container'
            key={img}
          >
            <img
              className='carousel-image'
              src={img}
              alt='slider images'
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewArrival;
