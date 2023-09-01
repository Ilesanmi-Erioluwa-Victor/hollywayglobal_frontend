import { v4 as uuidv4 } from 'uuid';

import {
  PiCookingPotLight,
  PiTelevisionSimpleLight,
  PiBabyLight,
} from 'react-icons/pi';

import { FaAppleAlt } from 'react-icons/fa';

import { GiLipstick } from 'react-icons/gi';

import { BiHomeAlt2 } from 'react-icons/bi';


export const AccountNav = [
  {
    id: uuidv4(),
    name: 'My Account',
    link: '/user/account',
    icon: <FaAppleAlt />,
  },
  {
    id: uuidv4(),
    name: 'My Orders',
    link: '/user/account/orders',
    icon: <GiLipstick />,
  },

  {
    id: uuidv4(),
    name: 'My Reviews',
    link: '/user/account/reviews',
    icon: <BiHomeAlt2 />,
  },

  {
    id: uuidv4(),
    name: 'My Address Book',
    link: '/user/account/address',
    icon: <PiTelevisionSimpleLight />,
  },

  {
    id: uuidv4(),
    name: 'My Password',
    link: '/user/account/password',
    icon: <PiBabyLight />,
  },

  {
    id: uuidv4(),
    name: 'Change Profile Image',
    link: '/user/account/updateImage',
    icon: <PiCookingPotLight />,
  },

  {
    id: uuidv4(),
    name: 'Delete Account',
    link: '/user/account/deactivate',
    icon: <PiCookingPotLight />,
  },

  {
    id: uuidv4(),
    name: 'Edit Profile',
    link: '/user/account/profile',
    icon: <PiCookingPotLight />,
  },

  {
    id: uuidv4(),
    name: 'Logout',
    link: '/user/account/updateImage',
    icon: <PiCookingPotLight />,
  },
];
