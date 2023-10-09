import { v4 as uuidv4 } from 'uuid';

import {
  PiCookingPotLight,
  PiTelevisionSimpleLight,
  PiBabyLight,
} from 'react-icons/pi';

import { RxAvatar } from 'react-icons/rx';

import { FaAddressCard, FaUserEdit } from 'react-icons/fa';

import { RiLockPasswordFill } from 'react-icons/ri';

import { BiSolidUserAccount, BiSolidCartAdd } from 'react-icons/bi';

import { MdRateReview } from "react-icons/md"

import { TiUserDelete } from "react-icons/ti"

type Nav = {
  name: string;
  icon?: any;
  id: string;
  link: string;
};

export const AccountNav: Nav[] = [
  {
    id: uuidv4(),
    name: 'My Account',
    link: '/user/account',
    icon: <BiSolidUserAccount />,
  },
  {
    id: uuidv4(),
    name: 'My Orders',
    link: '/user/account/orders',
    icon: <BiSolidCartAdd />,
  },

  {
    id: uuidv4(),
    name: 'My Reviews',
    link: '/user/account/reviews',
    icon: <MdRateReview />,
  },

  {
    id: uuidv4(),
    name: 'My Address Book',
    link: '/user/account/address',
    icon: <FaAddressCard />,
  },

  {
    id: uuidv4(),
    name: 'My Password',
    link: '/user/account/password',
    icon: <RiLockPasswordFill />,
  },

  {
    id: uuidv4(),
    name: 'Edit image',
    link: '/user/account/updateImage',
    icon: <RxAvatar />,
  },

  {
    id: uuidv4(),
    name: 'Delete Account',
    link: '/user/account/deactivate',
    icon: <TiUserDelete />,
  },

  {
    id: uuidv4(),
    name: 'Edit Profile',
    link: '/user/account/profile',
    icon: <FaUserEdit />,
  },
];

export const publicNav: Nav[] = [
  {
    id: uuidv4(),
    name: 'Register',
    link: '/register',
  },
  {
    id: uuidv4(),
    name: 'My Account',
    link: '/user/account',
  },

  {
    id: uuidv4(),
    name: 'Orders',
    link: '/user/account/orders',
  },
];
