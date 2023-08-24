import { Hero, SubHero, CategorySection, NewArrival } from '../components';

const Home = () => {
  return (
    <div className='padd bg-slate-100 flex flex-col gap-y-4 pt-4'>
      <Hero />
      <SubHero />
      <CategorySection />
      {/* <NewArrival />
      <SubHero /> */}
    </div>
  );
};

export default Home;
