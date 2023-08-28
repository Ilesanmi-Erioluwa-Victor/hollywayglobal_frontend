import { v4 as uuidv4 } from 'uuid';

import Image2 from '../../assets/react.svg';

const SubHero = () => {
  const products = [
    {
      name: 'The north coat',
      id: uuidv4(),
      image: Image2,
      price: '$260',
      slashedPrice: '$360',
    },

    {
      name: 'Gucci duffle bag',
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
      image: Image2,
      price: '$260',
      slashedPrice: '$360',
    },
  ];

  return (
    <div className='bg-white  gap-3 items-center justify-center p-4 shadow-md rounded-md md:px-[1rem]'>
      <div className='grid grid-cols-product-grid p-[10px] gap-[10px]'>
        {products.map((product) => (
          <div
            className='flex flex-col gap-[0.4rem] mb-3'
            key={product.id}
          >
            <div className='grid-item2 bg-slate-100  rounded-sm mb-3'>
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

export default SubHero;
