import { v4 as uuidv4 } from 'uuid';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { BsPhone } from 'react-icons/bs';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { IoGameControllerOutline } from 'react-icons/io5';
import { FaAppleAlt } from 'react-icons/fa';
import { GiLipstick } from 'react-icons/gi';
import { BiHomeAlt2 } from 'react-icons/bi';

const CategorySection = () => {
  const subCategory = [
    {
      id: uuidv4(),
      name: 'Phones',
      icon: <BsPhone />,
    },

    {
      id: uuidv4(),
      name: 'Computers',
      icon: <HiOutlineComputerDesktop />,
    },

    {
      id: uuidv4(),
      name: 'Computers',
      icon: <IoGameControllerOutline />,
    },

    {
      id: uuidv4(),
      name: 'Camera',
      icon: <FaAppleAlt />,
    },
  ];
  return (
    <div className='bg-white  p-4 shadow-md rounded-md'>
      <div className='flex gap-6 items-center'>
        <span className='block w-6 rounded-sm h-12 bg-[#DB4444]'></span>
        <span className='block text-[#DB4444]'>categories</span>
      </div>

      <h2 className='mt-8 font-[400] text-lg mb-10'>Browse By Category</h2>

      <div></div>
    </div>
  );
};

export default CategorySection;
