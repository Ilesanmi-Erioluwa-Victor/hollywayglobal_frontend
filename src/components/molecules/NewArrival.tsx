import { v4 as uuidv4 } from 'uuid';

import Image from '../../assets/images/not-found.svg';
import Image1 from '../../assets/images/signup.png';
import Image2 from '../../assets/react.svg';
import Image3 from '../../assets/images/boom.png';

const NewArrival = () => {
  const products = [
    {
      name: 'The north coat',
      id: uuidv4(),
      image: Image3,
      price: '$260',
      slashedPrice: '$360',
    },

    {
      name: 'Gucci duffle bag',
      id: uuidv4(),
      image: Image,
      price: '$260',
      slashedPrice: '$360',
    },

    {
      name: 'RGB liquid CPU Cooler',
      id: uuidv4(),
      image: Image1,
      price: '$260',
      slashedPrice: '$360',
    },

    {
      name: 'RGB liquid CPU Cooler',
      id: uuidv4(),
      image: Image,
      price: '$260',
      slashedPrice: '$360',
    },

    {
      name: 'RGB liquid CPU Cooler',
      id: uuidv4(),
      image: Image1,
      price: '$260',
      slashedPrice: '$360',
    },

    {
      name: 'RGB liquid CPU Cooler',
      id: uuidv4(),
      image: Image2,
      price: '$260',
      slashedPrice: '$360',
    },

    {
      name: 'RGB liquid CPU Cooler',
      id: uuidv4(),
      image: Image3,
      price: '$260',
      slashedPrice: '$360',
    },

    {
      name: 'RGB liquid CPU Cooler',
      id: uuidv4(),
      image: Image1,
      price: '$260',
      slashedPrice: '$360',
    },

    {
      name: 'RGB liquid CPU Cooler',
      id: uuidv4(),
      image: Image2,
      price: '$260',
      slashedPrice: '$360',
    },

    {
      name: 'RGB liquid CPU Cooler',
      id: uuidv4(),
      image: Image2,
      price: '$260',
      slashedPrice: '$360',
    },

    {
      name: 'RGB liquid CPU Cooler',
      id: uuidv4(),
      image: Image3,
      price: '$260',
      slashedPrice: '$360',
    },

    {
      name: 'RGB liquid CPU Cooler',
      id: uuidv4(),
      image: Image2,
      price: '$260',
      slashedPrice: '$360',
    },
  ];
  return (
    <div className='bg-white  p-4 shadow-md rounded-md'>
      <div className='flex gap-6 items-center'>
        <span className='block w-6 rounded-sm h-12 bg-green-500'></span>
        <span className='block text-green-500'>This Month</span>
      </div>

      <h2 className='mt-8 font-[400] text-lg mb-10'>Best Selling Products</h2>

      <div className='grid grid-cols-product-grid p-[10px] gap-[10px]'>
        {products.map((product) => (
          <div
            className='flex flex-col gap-[0.4rem]'
            key={product.id}
          >
            <div
              key={product.id}
              className='grid-item2 bg-slate-100  rounded-sm mb-3'
            >
              <img
                src={product.image}
                alt={product.name}
                className=' w-[100%] p-4'
              />
            </div>
            <p className='text-center text-[14px] bg-white self-start'>
              {product.name}
            </p>

            <p className='text-center text-[14px] bg-white self-start text-[#DB4444]'>
              {product.price}{' '}
              <span className='text-slate-500 opacity-40 pl-4'>
                {product.slashedPrice}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
