import { v4 as uuidv4 } from 'uuid';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from '../../assets/dark_800.png';
import Image1 from '../../assets/signup.png';
import Image2 from '../../assets/react.svg';

const SubHeroTwo = () => {
  const products = [
    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image1,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image2,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image2,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image2,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image2,
    },
  ];

  return (
    <div className='bg-white p-4 shadow-md rounded-md '>
      <Carousel
        showArrows={true}
        showThumbs={false}
        do={false}
        dynamicHeight={false}
        infiniteLoop={true}
        autoPlay={false} // Set to true if you want auto play
        emulateTouch={true}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className='p-2 max-h-[300px]'
          >
            <img
              src={product.image}
              alt={product.name}
              className='max-w-[100%] h-[auto]'
            />
            <p className='text-center text-lg font-semibold mt-2'>
              {product.name}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SubHeroTwo;
