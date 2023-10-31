import { GeneralLayouts } from 'src/layouts/GeneralLayouts';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useProduct from '../hooks/state/useProduct';
import { useAppSelector } from 'src/redux/hooks';

//  {
//    products?.map((prod) => (
//      <article
//        key={prod?.id}
//        className='relative flex items-center justify-between gap-6'
//      >
//        <div className=' flex flex-col gap-3 w-[20%]'>
//          {console.log(prod?.category)}
//          {prod.images.map((image, index) => (
//            <img
//              src={image}
//              alt=''
//              className='w-max-full h-[5rem] p-2 rounded-sm cursor-pointer bg-slate-400'
// onClick={() => handleImageClick(image)}
//        key={index}
//      />
//    ))}
//    <div className='active-image'></div>
//  </div>

{
  /* <div className=" bg-slate-400 p-2 h-auto w-full">
            <img src={activeImage} alt="Active Product Image" />
          </div> */
}

//  <div className='relative flex flex-col p-2 w-[70%] gap-3'>
//    <h2 className='text-2xl '>{prod.title}</h2>
//    <p className='text-[1rem] my-2'>{prod.price}</p>
//    <p className='text-[1rem]'>{prod.description}</p>
//    <hr className='my-2' />
{
  /* <p className="flex gap-4 text-[1rem]">
              {" "}
              Size :{" "}
              {prod.size.map((color) => (
                <p key={color} className={`px-3 border rounded-sm text-white text-center `}>
                  {color}
                </p>
              ))}
            </p> */
}
//  <section className=' flex w-full items-center mt-4 gap-2 mb-7'>
//    <div className=' flex w-full'>
//      <button className='bg-slate-200 py-2 px-4 w-[40%] rounded-sm border-[#000000] border h-[2.5rem]'>
//        -
//      </button>
//      <p className='bg-slate-200 py-2 px-4 w-full border-[#000000] border h-[2.5rem] text-center'>
//        {2}
//      </p>
//      <button className='py-2 px-4 w-[40%] border h-[2.5rem] rounded-sm bg-[#DB4444] text-white'>
//        +
//      </button>
//    </div>
//    <button className='  w-full py-2 px-4 rounded-sm bg-[#DB4444] text-white h-[2.5rem]'>
//      Buy Now
//    </button>
//  </section>

{
  /* <div className="border-[#000000] border p-3 rounded-sm">
              <div className="flex items-center gap-4">
                <p className="text-[2rem]">{prod.details[0].icon}</p>
                <article className="flex flex-col gap-1">
                  <h2 className="text-[1rem]">{prod.details[0].title}</h2>
                  <p className="text-[.8rem]">{prod.details[0].sum}</p>
                </article>
              </div>
              <hr className="my-4" />
              <div className="flex items-center gap-4">
                <p className="text-[2rem]">{prod.details[1].icon}</p>
                <article>
                  <h2 className="text-[1rem]">{prod.details[1].title}</h2>
                  <p className="text-[.8rem]">{prod.details[1].sum}</p>
                </article>
              </div>
            </div> */
}
{
  /* </div>
     </article>
   ));
 } */
}

const Product = () => {
  const { id } = useParams();
  const product = useProduct(id as string);
  const { isLoading } = useAppSelector((state) => state.product);
 
  return (
    <GeneralLayouts>
      <section className='padd2 '>
        <article className='py-[1rem]'>
          <Link to={'/'}>Home</Link>Hello from category
        </article>

        <div className='flex gap-4 w-full '>
          <article className='bg-white shadow-md rounded-sm p-[2rem]'>
            {' '}
            Hell from {id}
          </article>

          <address className='bg-white shadow-md rounded-sm p-[2rem]'>
            hello from address
          </address>
        </div>
      </section>
    </GeneralLayouts>
  );
};

export default Product;
