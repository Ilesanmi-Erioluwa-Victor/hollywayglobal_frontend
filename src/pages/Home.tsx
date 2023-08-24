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
      <div>
        <div>
          {remarks.map((writeUps) => (
            <>
              <h2 key={writeUps.name}>{writeUps.icon}</h2>
              <h4>{writeUps.name}</h4>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
