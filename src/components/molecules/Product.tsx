import React, { useState } from 'react';
import { BsTruck } from 'react-icons/bs';
import { GrPowerCycle } from 'react-icons/gr';
import Image from '../../assets/boom.png';
import Image2 from '../../assets/dark_800.png';
import Image3 from '../../assets/error-page.svg';
import Image4 from '../../assets/boom.png';
import Image5 from '../../assets/react.svg';

const Product = () => {
  interface Product2 {
    name: string;
    images: string[];
    summary: string;
    price: string;
    size: string[];
    details: {
      title: string;
      icon: JSX.Element;
      sum: string;
    }[];
  }

  const products: Product2[] = [
    {
      name: 'Havic HV G-92 Gamepad',
      images: [Image, Image2, Image3, Image4, Image5],
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

  const [activeImage, setActiveImage] = useState(products[0].images[0]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageClick = (imageSrc: any) => {
    setActiveImage(imageSrc);
  };

  return (
    <section className='px-[_calc(_1rem+_8vw)] flex justify-between items-center gap-y-4 py-[_calc(_1rem+_8vh)] '>
      {products.map((prod) => (
        <article
          key={prod.name}
          className='relative'
        >
          <div className=' flex flex-col gap-3'>
            {prod.images.map((image, index) => (
              <img
                src={image}
                alt=''
                className='w-max-full h-[5rem] p-2 rounded-sm cursor-pointer bg-slate-400'
                onClick={() => handleImageClick(image)}
                key={index}
              />
            ))}
            <div className='active-image'></div>
          </div>
        </article>
      ))}
      <div className=' bg-slate-400 p-2 h-auto w-[60%]'>
        <img
          src={activeImage}
          alt='Active Product Image'
        />
      </div>

      <div className='w-[20%]'>
        {products.map((prop) => (
          <div key={prop.name}>
            <h2>{prop.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
