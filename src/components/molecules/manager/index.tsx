import { Link, Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import {
  PiCookingPotLight,
  PiTelevisionSimpleLight,
  PiBabyLight,
} from 'react-icons/pi';

import { FaAppleAlt } from 'react-icons/fa';

import { GiLipstick } from 'react-icons/gi';

import { BiHomeAlt2 } from 'react-icons/bi';

const AccountLayout = () => {
  const AccountNav = [
    {
      id: uuidv4(),
      name: 'My Account',
      link: '/user/account/views',
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
  ];

  return (
    <div className='grid grid-cols-[_repeat(12,1fr)] px-[_calc(1rem_+_8vw)] gap-4 py-[2rem]'>
      <div className='col-[_1/_5] shadow-md rounded-md  bg-white'>
        {AccountNav.map((accNav) => (
          <div
            key={accNav.id}
            className='flex flex-col justify-center'
          >
            <div>
              <span>{accNav.icon}</span>
              <Link to={accNav.link}>{accNav.name}</Link>
            </div>
          </div>
        ))}
      </div>

      <div className='col-[_5/_-1] shadow-md rounded-md  bg-white'>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;
