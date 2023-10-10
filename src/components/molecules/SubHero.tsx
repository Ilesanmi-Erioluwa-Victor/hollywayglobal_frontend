const SubHero = ({ product }: any) => {
  return (
    <div className='bg-white  gap-3 items-center justify-center p-4 shadow-md rounded-md md:px-[1rem]'>
      <div className='flex gap-6 items-center'>
        <span className='block w-6 rounded-sm h-12 bg-green-500'></span>
        <span className='block text-green-500'>Fresh products</span>
      </div>

      <div className='grid grid-cols-product-grid gap-[10px]'>
        {product.map((prod: any) => {
          if (prod.slug.includes('fresh product')) {
            return (
              <div
                className='flex flex-col gap-[0.4rem] mb-3'
                key={prod.id}
              >
                <div className='grid-item2 bg-slate-100  rounded-sm mb-3'>
                  <img
                    src={prod.images[0]}
                    alt={prod.title}
                    className=' w-[100%] img'
                  />
                </div>
                <p className='text-center text-[14px] bg-white self-start'>
                  {prod.title}
                </p>

                <p className='text-center text-[14px] bg-white self-start text-[#DB4444]'>
                  {prod.price}{' '}
                  <span className='text-slate-500 opacity-40 pl-4'>
                    {prod.slashedPrice}
                  </span>
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SubHero;
