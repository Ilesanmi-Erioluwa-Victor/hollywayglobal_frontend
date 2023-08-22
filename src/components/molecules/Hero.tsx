/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from 'uuid';
import { FaAppleAlt } from 'react-icons/fa';
import { GiLipstick } from 'react-icons/gi';
import { BiHomeAlt2 } from 'react-icons/bi';
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
import { Link } from 'react-router-dom';

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
  return (
    <div className='padd flex justify-between gap-6 bg-red-600'>
      <div className='paddTop  flex bg-yellow-900 px-[3rem]'>
        <ul>
          {Category.map((cat) => (
            <li>
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
              <Link to={cat.link}></Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='paddTop bg-yellow-200'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          facere porro totam ducimus nam nisi reiciendis eligendi quos impedit
          fugit eaque molestiae labore repellendus quod maxime officia illum,
          ipsam possimus.
        </p>
      </div>
    </div>
  );
};

export default Hero;
