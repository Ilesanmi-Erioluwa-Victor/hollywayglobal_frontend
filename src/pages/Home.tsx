import { useEffect, useState } from 'react';

import { FaCheck, FaMoneyCheck, FaTruck, FaShoppingCart } from 'react-icons/fa';

import {
  Hero,
  FreshProduct,
  CategorySection,
  NewArrival,
  OrganicProduct,
  NewestFarmProduct,
} from '../components';
import { GeneralLayouts } from 'src/layouts/GeneralLayouts';
import { useAppSelector, useAppDispatch } from 'src/redux/hooks';
import { productsAction } from 'src/redux/slices/product';

const remarks = [
  {
    bigIcon: <FaCheck />,
    name: 'Find your product',
    sum: 'Select from our varieties of fresh products',
  },

  {
    name: ' Add product to Cart',
    bigIcon: <FaShoppingCart />,
    sum: 'Add varieties of our products to your cart',
  },

  {
    name: 'Make Payment',
    bigIcon: <FaMoneyCheck />,
    sum: 'Seamless payment via your debit cards',
  },

  {
    name: 'Get your delivery',
    bigIcon: <FaTruck />,
    sum: 'We package and deliver your orders 24/7',
  },
];

const Home = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = async () => {
      const result: any = await dispatch(productsAction());
      setProduct(result?.payload?.data);
    };

    data();
  }, [dispatch]);

  const { isLoading } = useAppSelector((state) => state.product);

  if (isLoading) return;

  return (
    <GeneralLayouts>
      <div className='padd flex flex-col gap-y-4 py-4'>
        <Hero />
        <FreshProduct product={product} />
        <CategorySection />
        <NewArrival product={product} />
        <OrganicProduct product={product} />
        <NewestFarmProduct product={product} />
        <div className='p-8vw'>
          <h2 className='text-center text-[2rem] font-semibold mb-8'>
            HOW HOLLYWAYGLOBAL WORKS
          </h2>
          <div className='grid grid-cols-[_repeat(_auto-fit,_minmax(200px,1fr))] gap-5'>
            {remarks.map((writeUps) => (
              <div
                key={writeUps.name}
                className='flex items-center justify-center text-center py-[3rem] px-[15px] cursor-pointer gap-4 rounded-sm shadow-sm bg-green-500 text-white hover:bg-green-600 transition-all'
              >
                <span className='text-[2rem]'>{writeUps.bigIcon}</span>

                <div className=''>
                  <h4 className=' text-lg font-medium py-3'>{writeUps.name}</h4>
                  <p className=''>{writeUps.sum}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GeneralLayouts>
  );
};

export default Home;
