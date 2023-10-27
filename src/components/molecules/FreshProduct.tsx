import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import useProducts from 'src/hooks/state/useProducts';
import { useAppSelector } from 'src/redux/hooks';
import { ProductCardSkeleton } from '../../components';

const FreshProduct = () => {
  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 5 },
  };

  const products = useProducts();
  const items = products
    .filter((prod: any) => prod.slug.includes('fresh product'))
    .map((prod: any) => (
      <Link
        to={`/product/${prod.id}`}
        key={prod.id}
        className='flex flex-col relative gap-[0.4rem] mb-3 hover:cursor-pointer hover:shadow-lg rounded-sm px-4 pb-4 pt-0 transition-all'
      >
        <img
          src={prod.images[0]}
          alt={prod.title}
          className='w-[100%] img'
        />
        <p className='text-center text-[20px] bg-white self-start'>
          {prod.title}
        </p>
        <p className='text-center text-[14px] bg-white self-start'>
          &#8358;{` ${prod.price}`}
          <span className='text-slate-500 opacity-40 pl-4'>
            {prod.slashedPrice}
          </span>
        </p>
      </Link>
    ));

  const { isLoading } = useAppSelector((state) => state.product);
  return (
    <div className='bg-white  gap-3 items-center justify-center p-4 shadow-md rounded-md md:px-[1rem] w-[90%] mx-auto mt-4'>
      <div className='flex gap-6 items-center mb-4'>
        <span className='block w-6 rounded-sm h-12 bg-green-500'></span>
        <span className='block text-green-500'>Fresh products</span>
      </div>

      {isLoading ? (
        <ProductCardSkeleton />
      ) : (
        <div className='grid grid-cols-product-grid gap-[10px]'>
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            disableDotsControls={true}
            controlsStrategy='alternate'
          />
        </div>
      )}
    </div>
  );
};

export default FreshProduct;
