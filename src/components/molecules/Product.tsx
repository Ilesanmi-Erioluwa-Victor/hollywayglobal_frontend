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
    <section className='px-[_calc(_1rem+_8vw)] flex justify-between items-center py-[_calc(_1rem+_8vh)]'>
      {products.map((prod) => (
        <article
          key={prod.name}
          className='relative flex items-center justify-between gap-6'
        >
          <div className=' flex flex-col gap-3 w-[20%]'>
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

          <div className=' bg-slate-400 p-2 h-auto w-full'>
            <img
              src={activeImage}
              alt='Active Product Image'
            />
          </div>

          <div className='relative flex flex-col p-2 w-[70%]'>
            <h2 className='text-2xl '>{prod.name}</h2>
            <p className='text-[1rem] my-2'>{prod.price}</p>
            <p className='text-[1rem]'>{prod.summary}</p>
            <hr className='my-2' />
            <p className='flex gap-4 text-[1rem]'>
              {' '}
              Size :{' '}
              {prod.size.map((color) => (
                <p
                  key={color}
                  className={`px-3 border rounded-sm text-white text-center `}
                >
                  {color}
                </p>
              ))}
            </p>
            <section className='mb-3 flex w-full items-center justify-between'>
              <div className='flex bg-red-800 w-[50%]'>
                <button>-</button>
                <p>{2}</p>
                <button>+</button>
              </div>
              <button className='w-[50%] bg-orange-600'>Buy Now</button>
            </section>

            <div className='border border-[black] '>
              <div>
                <p>{prod.details[0].icon}</p>
                <article>
                  <h2>{prod.details[0].title}</h2>
                  <p>{prod.details[0].sum}</p>
                </article>
              </div>
              <hr />
              <div>
                <p>{prod.details[1].icon}</p>
                <article>
                  <h2>{prod.details[1].title}</h2>
                  <p>{prod.details[1].sum}</p>
                </article>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Product;
