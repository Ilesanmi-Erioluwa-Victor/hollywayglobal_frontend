import { Link } from 'react-router-dom';
import useProducts from 'src/hooks/state/useProducts';

const NewestFarmProduct = () => {
  const product = useProducts();
  return (
    <div className='bg-white  p-4 shadow-md rounded-md w-[90%] mx-auto'>
      <div className='flex gap-6 items-center'>
        <span className='block w-6 rounded-sm h-12 bg-green-500'></span>
        <span className='block text-green-500'>Newest Farm Products</span>
      </div>

      <h2 className='mt-8 font-[400] text-lg mb-4'>
        Buy now and Get Whooping Discount
      </h2>
      <div className='flex items-center justify-between gap-2'>
        <div className=' rounded-md flex items-center justify-center p-4 w-[50%]'>
          {product
            .filter((prod: any) => prod.slug.includes('fresh product'))
            .slice(0, 1)
            .map((prod: any) => (
              <div key={prod.id}>
                <Link
                  to={`/product/${prod.id}`}
                  className='flex flex-col relative gap-[0.4rem] mb-3 hover:cursor-pointer hover:shadow-lg rounded-sm px-4 pb-4 pt-0 transition-all'
                >
                  <img
                    src={prod.images[0]}
                    alt={prod.title}
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
              </div>
            ))}
        </div>

        <div className=' rounded-md flex items-center justify-center p-4 w-[50%]'>
          {product
            .filter((prod: any) => prod.slug.includes('fresh product'))
            .slice(0, 1)
            .map((prod: any) => (
              <div key={prod.id}>
                <Link
                  to={`/product/${prod.id}`}
                  className='flex flex-col relative gap-[0.4rem] mb-3 hover:cursor-pointer hover:shadow-lg rounded-sm px-4 pb-4 pt-0 transition-all'
                >
                  <img
                    src={prod.images[0]}
                    alt={prod.title}
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
              </div>
            ))}
        </div>

        <div className=' rounded-md flex items-center justify-center p-4 w-[50%]'>
          {product
            .filter((prod: any) => prod.slug.includes('fresh product'))
            .slice(0, 1)
            .map((prod: any) => (
              <div key={prod.id}>
                <Link
                  to={`/product/${prod.id}`}
                  className='flex flex-col relative gap-[0.4rem] mb-3 hover:cursor-pointer hover:shadow-lg rounded-sm px-4 pb-4 pt-0 transition-all'
                >
                  <img
                    src={prod.images[0]}
                    alt={prod.title}
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
              </div>
            ))}
        </div>

        <div className=' rounded-md flex items-center justify-center p-4 w-[50%]'>
          {product
            .filter((prod: any) => prod.slug.includes('fresh product'))
            .slice(0, 1)
            .map((prod: any) => (
              <div key={prod.id}>
                <Link
                  to={`/product/${prod.id}`}
                  className='flex flex-col relative gap-[0.4rem] mb-3 hover:cursor-pointer hover:shadow-lg rounded-sm px-4 pb-4 pt-0 transition-all'
                >
                  <img
                    src={prod.images[0]}
                    alt={prod.title}
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
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewestFarmProduct;
