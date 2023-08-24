import { AiOutlineCustomerService } from 'react-icons/ai';
import { BsTruck, BsShieldCheck } from 'react-icons/bs';
import {
  Hero,
  SubHero,
  CategorySection,
  NewArrival,
  Boom,
} from '../components';

const Home = () => {
  const remarks = [
    {
      name: '24/7 CUSTOMER SERVICE',
      icon: <AiOutlineCustomerService />,
      sum: 'Friendly 24/7 customer support',
    },

    {
      name: ' FREE AND FAST DELIVERY',
      icon: <BsTruck />,
      sum: 'Free delivery for all orders over $140',
    },

    {
      name: 'MONEY BACK GUARANTEE',
      icon: <BsShieldCheck />,
      sum: 'We reurn money within 30 days',
    },
  ];
  return (
    <div className='padd bg-slate-100 flex flex-col gap-y-4 py-4'>
      <Hero />
      <SubHero />
      <CategorySection />
      <NewArrival />
      <Boom />
      <div className='p-8vw'>
        <div className='flex items-center justify-between md:px-[5rem] flex-wrap'>
          {remarks.map((writeUps) => (
            <div
              key={writeUps.name}
              className='flex flex-col items-center gap-3 mb-2'
            >
              <h2 className='bg-[#2F2E30] p-2 rounded-[50%] '>
                <span className='bg-black text-white block p-3 rounded-[50%] text-lg'>
                  {writeUps.icon}
                </span>
              </h2>
              <h4 className='text-base font-[600]'>{writeUps.name}</h4>
              <p className=''>{writeUps.sum}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
