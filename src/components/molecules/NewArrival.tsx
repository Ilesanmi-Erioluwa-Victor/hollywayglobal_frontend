import { v4 as uuidv4 } from 'uuid';

import Image from '../../assets/dark_800.png';
import Image1 from '../../assets/signup.png';
import Image2 from '../../assets/react.svg';

const NewArrival = () => {
  const products = [
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
    <div className='bg-white  p-4 shadow-md rounded-md'>
      <div className='flex gap-6 items-center'>
        <span className='block w-6 rounded-sm h-12 bg-[#DB4444]'></span>
        <span className='block text-[#DB4444]'>This Month</span>
      </div>

      <h2 className='mt-8 font-[400] text-lg mb-10'>Best Selling Products</h2>

      <div className='grid grid-cols-product-grid p-[10px] gap-[10px]'>
        {products.map((product) => (
          <div
            key={product.id}
            className='grid-item2 bg-slate-100  rounded-sm '
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
        {/* {subCategory.map((cat) => (
          <div
            key={cat?.id}
            className='cursor-pointer b hover:text-white gap-6 hover:bg-[#DB4444] transition-all hover:border-transparent border-[1px]  p-7 items-center justify-between flex flex-col rounded-sm'
          >
            <div className=' text-[2rem]'>{cat.icon}</div>
            <h2 className=' text-[0.9rem]'>{cat.name}</h2>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default NewArrival;
