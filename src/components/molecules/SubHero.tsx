import { v4 as uuidv4 } from 'uuid';

import Image from '../../assets/dark_800.png';
import Image1 from '../../assets/signup.png';
import Image2 from '../../assets/react.svg';

const SubHero = () => {
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

  return (
    <div className='bg-white flex flex-wrap gap-3 items-center justify-center p-4 shadow-md rounded-md'>
      {products.map((product) => (
        <div
          key={product.id}
          className='w-[100%%] sm:w-[50%] md:w-[15.6%] bg-slate-100  rounded-sm'
        >
          <img
            src={product.image}
            alt={product.name}
            className=' w-[100%] p-4'
          />
          <h3 className='text-center text-[1rem] bg-white py-2'>
            {product.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SubHero;
