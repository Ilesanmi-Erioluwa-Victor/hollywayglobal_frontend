/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from 'uuid';

import { FaAppleAlt } from 'react-icons/fa';

import { GiLipstick } from 'react-icons/gi';

import { BiHomeAlt2 } from 'react-icons/bi';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
// import { Link } from 'react-router-dom';

import Image from '../../assets/dark_800.png';
import Image1 from '../../assets/signup.png';
import Image2 from '../../assets/react.svg';

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
  const slides = [Image, Image1, Image2];

  return (
    <div className='grid grid-cols-custom-grid gap-[20px]'>
      <div className='hidden md:block md:col-[1_/_4] shadow-md rounded-md py-[0.5rem] bg-white'>
        <ul className=' pl-[0.4rem] flex flex-col hover:cursor-pointer '>
          {Category.map((cat) => (
            <li
              className='flex items-center gap-3 py-2 '
              key={cat.id}
            >
              <span className='block text-[1.1rem]'>{cat.icon}</span>
              <span className='block text-[0.8rem]'>{cat.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='col-[1_/_-1] md:col-[4_/_-1] shadow-md rounded-md w-[100%] bg-white'>
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
    </div>
  );
};

export default Hero;
