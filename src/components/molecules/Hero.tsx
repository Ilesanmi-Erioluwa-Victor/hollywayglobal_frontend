/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from 'uuid';
import { FaAppleAlt } from 'react-icons/fa';
import { GiLipstick } from 'react-icons/gi';
import { BiHomeAlt2 } from 'react-icons/bi';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  PiCookingPotLight,
  PiTelevisionSimpleLight,
  PiBabyLight,
} from 'react-icons/pi';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { GiClothes } from 'react-icons/gi';
import { IoGameControllerOutline } from 'react-icons/io5';
import { CiDumbbell, CiCircleMore } from 'react-icons/ci';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Image from '../../assets/dark_800.png';

interface category {
  name: string;
  link: string;
  id: string;
  icon: any;
}

const Category: category[] = [
  {
    name: 'Supermarket',
    link: 'category/',
    id: uuidv4(),
    icon: <FaAppleAlt />,
  },

  {
    name: 'Health & Beauty',
    link: 'category/',
    id: uuidv4(),
    icon: <GiLipstick />,
  },

  {
    name: 'Home & Office',
    link: 'category/',
    id: uuidv4(),
    icon: <BiHomeAlt2 />,
  },

  {
    name: 'Appliances',
    link: 'category/',
    id: uuidv4(),
    icon: <PiCookingPotLight />,
  },

  {
    name: 'Phones & Tablets',
    link: 'category/',
    id: uuidv4(),
    icon: <BsPhone />,
  },

  {
    name: 'Computing',
    link: 'category/',
    id: uuidv4(),
    icon: <HiOutlineComputerDesktop />,
  },

  {
    name: 'Electronics',
    link: 'category/',
    id: uuidv4(),
    icon: <PiTelevisionSimpleLight />,
  },

  {
    name: 'Fashion',
    link: 'category/',
    id: uuidv4(),
    icon: <GiClothes />,
  },

  {
    name: 'Baby Products',
    link: 'category/',
    id: uuidv4(),
    icon: <PiBabyLight />,
  },

  {
    name: 'Gaming',
    link: 'category/',
    id: uuidv4(),
    icon: <IoGameControllerOutline />,
  },

  {
    name: 'Sporting Goods',
    link: 'category/',
    id: uuidv4(),
    icon: <CiDumbbell />,
  },

  {
    name: 'Other Categories',
    link: 'category/',
    id: uuidv4(),
    icon: <CiCircleMore />,
  },
];

const Hero = () => {
  //  const slides = [
  //    <div key='slide1'>
  //      <img
  //        src={Image}
  //        alt='Image 1'
  //      />
  //    </div>,
  //    // Add more slides as needed
  // ];

  return (
    <div className='py-[2rem] padd flex justify-between gap-6'>
      <div className='w-[30%] shadow-md rounded-md'>
        <ul className=' pl-[0.4rem] flex flex-col hover:cursor-pointer '>
          {Category.map((cat) => (
            <li className='flex items-center gap-3 py-2 '>
              <span className='block text-[1.1rem]'>{cat.icon}</span>
              <span className='block text-[0.8rem]'>{cat.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className=' bg-yellow-200 rounded-sm w-[100%]'>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
        >
          <div className='carousel-image-container'>
            <img
              className='carousel-image'
              src={Image}
              alt='Image 1'
            />
          </div>

          <div className='carousel-image-container'>
            <img
              className='carousel-image'
              src={Image}
              alt='Image 1'
            />
          </div>

          <div className='carousel-image-container'>
            <img
              className='carousel-image'
              src={Image}
              alt='Image 1'
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
