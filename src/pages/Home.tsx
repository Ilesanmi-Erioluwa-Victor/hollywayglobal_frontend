import { Hero, SubHero, SubHeroTwo } from '../components';

const Home = () => {
  return (
    <div className='padd bg-slate-100 flex flex-col gap-4'>
      <Hero />
      <SubHero />
      <SubHeroTwo />

      <SubHero />
      <SubHero />
    </div>
  );
};

export default Home;
