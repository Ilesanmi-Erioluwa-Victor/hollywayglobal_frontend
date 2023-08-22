import { v4 as uuidv4 } from 'uuid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      image: Image2,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image1,
    },

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className='bg-white flex gap-3 items-center justify-center p-4 shadow-md rounded-md'>
      {products.map((product) => (
        <Slider {...settings}>
          <div
            key={product.id}
            className=' bg-slate-100  rounded-sm'
          >
            <img
              src={product.image}
              alt={product.name}
            //   className='h-[9rem] w-[100%] p-4'
            />
            <h3 className='text-center text-[1rem] bg-white py-2'>
              {product.name}
            </h3>
          </div>
        </Slider>
      ))}
    </div>
  );
};

export default SubHeroTwo;
