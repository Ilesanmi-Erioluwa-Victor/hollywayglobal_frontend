import { Hero, SubHero } from '../components';

const Home = () => {
  return (
    <div className='padd bg-slate-100 flex flex-col gap-4'>
      <Hero />
      <SubHero />
    </div>
  );
};

export default Home;
