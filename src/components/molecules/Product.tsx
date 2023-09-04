import Image from '../../assets/boom.png';
import Image2 from '../../assets/dark_800.png';
import Image3 from '../../assets/error-page.svg';
import Image4 from '../../assets/boom.png';
import Image5 from '../../assets/react.svg';
import { BsTruck } from 'react-icons/bs';
import { GrPowerCycle } from 'react-icons/gr';

const Product = () => {
  const products = [
    {
      name: 'Havic HV G-92 Gamepad',
      images: [],
      summary:
        'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
      price: '$192.00',
      size: ['XS', 'S', 'M', 'L', 'XL'],
      details: [
        {
          title: 'Free Delivery',
          icon: <BsTruck />,
          sum: 'Enter your postal code for Delivery Availability',
        },
        {
          title: 'Return Delivery',
          icon: <GrPowerCycle />,
          sum: 'Free 30 Days Delivery Returns. Details',
        },
      ],
    },
  ];
  return (
    <div className='px-[_calc(_1rem+_8vw)] flex justify-between items-center gap-y-4 py-[_calc(_1rem+_8vh)] gap-5'>
      <h2 className='bg-orange-800 w-full'>Hell from First one...</h2>

      <h2 className='bg-orange-300 w-full'>Hell from Second one...</h2>

      <h2 className='bg-orange-800 w-full'>Hell from Third one...</h2>
    </div>
  );
};

export default Product;
