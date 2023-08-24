import { v4 as uuidv4 } from 'uuid';

import Image from '../../assets/dark_800.png';
import Image1 from '../../assets/signup.png';
import Image2 from '../../assets/react.svg';
import Image3 from '../../assets/boom.png';

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
        <span className='block w-6 rounded-sm h-12 bg-[#DB4444]'></span>
        <span className='block text-[#DB4444]'>This Month</span>
      </div>

      <h2 className='mt-8 font-[400] text-lg mb-10'>Best Selling Products</h2>

      <div className='grid grid-cols-product-grid p-[10px] gap-[10px]'>
        {products.map((product) => (
          <div className='flex flex-col'>
            <div
              key={product.id}
              className='grid-item2 bg-slate-100  rounded-sm '
            >
              <img
                src={product.image}
                alt={product.name}
                className=' w-[100%] p-4'
              />
            </div>
            <p className='text-center text-[14px] bg-white py-4 self-start'>
              {product.name}
            </p>

            <p className='text-center text-[14px] bg-white py-4 self-start'>
              {product.price} <span>{product.slashedPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
