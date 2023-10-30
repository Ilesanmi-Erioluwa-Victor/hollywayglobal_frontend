import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import useProducts from 'src/hooks/state/useProducts';
import { ProductCardSkeleton } from '../../components';
import { useAppSelector } from 'src/redux/hooks';

const LiveStocks = () => {
  const products = useProducts();
  const { isLoading } = useAppSelector((state) => state.product);

  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 5 },
  };

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
        <p className='text-center text-[20px] bg-white self-start text-black'>
          {prod.title}
        </p>
        <p className='text-center text-[14px] bg-white self-start text-black'>
          &#8358;{` ${prod.price}`}
          <span className='text-slate-500 opacity-40 pl-4'>
            {prod.slashedPrice}
          </span>
        </p>
      </Link>
    ));
  return (
    <div className='shadow-md rounded-md text-white relative w-[90%] mx-auto p-4 bg-white'>
      <div className='flex gap-6 items-center'>
        <span className='block w-6 rounded-sm h-12 bg-green-500'></span>
        <span className='block text-green-500'>LiveStocks</span>
      </div>

      <h2 className='mt-8 font-[400] text-lg mb-10 text-black'>
        Best liveStocks Products
      </h2>

      <div className='grid grid-cols-product-grid gap-[10px]'>
        {isLoading ? (
          <ProductCardSkeleton />
        ) : (
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            disableDotsControls={true}
            controlsStrategy='alternate'
          />
        )}
      </div>
    </div>
  );
};

export default LiveStocks;
