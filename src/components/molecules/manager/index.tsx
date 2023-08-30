import { Outlet } from 'react-router-dom';
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
    const Account = [{
        id: uuidv4(),
}]

  return (
    <div className='grid grid-cols-[_repeat(12,1fr)] px-[_calc(1rem_+_8vw)] gap-4 py-4'>
      <h2 className='col-[_1/_5] shadow-md rounded-md  bg-white'>
        Hello sir....
      </h2>

      <div className='col-[_5/_-1] shadow-md rounded-md  bg-white'>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;
