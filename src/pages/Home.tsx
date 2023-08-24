import { Hero, SubHero, CategorySection, NewArrival, Boom } from '../components';

const Home = () => {
  return (
    <div className='padd bg-slate-100 flex flex-col gap-y-4 py-4'>
      <Hero />
      <SubHero />
      <CategorySection />
       <NewArrival />
      <Boom /> 
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
