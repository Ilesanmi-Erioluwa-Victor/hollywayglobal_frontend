import { Hero, SubHero, CategorySection } from '../components';

const Home = () => {
  return (
    <div className='padd bg-slate-100 flex flex-col gap-4 pt-4'>
      <Hero />
      <SubHero />
      <CategorySection />

      <SubHero />
      <SubHero />
    </div>
  );
};

export default Home;
