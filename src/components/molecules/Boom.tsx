import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Boom = ({ product }: any) => {
  return (
    <div className='shadow-md rounded-md text-white relative'>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        showStatus={true}
        ariaLabel='fresh product'
      >
        {product
          .filter((prod: any) => prod.slug.includes('fresh product'))
          .map((prod: any) => (
            <Link
              to={`/product/${prod.id}`}
              key={prod.id}
              className='h-[500px] items-center justify-center flex '
            >
              <div className='w-full'>
                <img
                  src={prod.images[0]}
                  alt={prod.title}
                  className='img max-w-full max-h-full w-full h-full object-cover object-center'
                />
              </div>
            </Link>
          ))}
      </Carousel>
    </div>
  );
};

export default Boom;
