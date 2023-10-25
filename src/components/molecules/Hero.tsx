
import { Link} from 'react-router-dom';
import EmblaCarousel from '../embla-carousel/EmblaCarousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import useCategories from 'src/hooks/state/useCategories';

const Hero = () => {
  const categories = useCategories();

  const OPTIONS = { align: 'start', loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className='flex justify-between padd2 gap-2'>
      <section className='w-[20%]'>
        <ul className='relative flex flex-col bg-white rounded-sm'>
          {categories.map((category: any) => (
            <li key={category.id}>
              <Link
                to={category}
                className='hover:bg-orange-500 block p-4 transition-all hover:text-white'
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      
      <div className='shadow-md rounded-md relative h-[34rem]'>
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
        />
      </div>
    </div>
  );
};

export default Hero;
