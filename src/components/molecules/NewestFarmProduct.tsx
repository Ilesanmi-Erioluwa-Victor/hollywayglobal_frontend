import Image1 from '../../assets/images/signup.png';
import Image from '../../assets/images/boom.png';
import { Link } from 'react-router-dom';

const NewestFarmProduct = ({ product }: any) => {
  return (
    <div className='bg-white  p-4 shadow-md rounded-md'>
      <div className='flex gap-6 items-center'>
        <span className='block w-6 rounded-sm h-12 bg-green-500'></span>
        <span className='block text-green-500'>Newest Farm Products</span>
      </div>

      <h2 className='mt-8 font-[400] text-lg mb-4'>
        Buy now and Get Whooping Discount
      </h2>
      <div className='flex items-center justify-between gap-2'>
        <div className=' rounded-md bg-[#f0f0f0] flex items-center justify-center p-4 w-[50%]'>
          {product
            .filter((prod: any) => prod.slug.includes('fresh product'))
            .slice(0, 1)
            .map((prod: any) => (
              <div key={prod.id}>
                <Link to={`/product/${prod.id}`}>
                  <img
                    src={prod.images[0]}
                    alt={prod.title}
                  />
                </Link>
              </div>
            ))}
        </div>
        <div className=' rounded-md bg-[#f0f0f0] flex items-center justify-center p-4 w-[50%]'>
          {product
            .filter((prod: any) => prod.slug.includes('fresh product'))
            .slice(1, 2)
            .map((prod: any) => (
              <div key={prod.id}>
                <Link to={`/product/${prod.id}`}>
                  <img
                    src={prod.images[0]}
                    alt={prod.title}
                  />
                </Link>
              </div>
            ))}
        </div>

        <div className=' rounded-md bg-[#f0f0f0] flex items-center justify-center p-4 w-[50%]'>
          {product
            .filter((prod: any) => prod.slug.includes('fresh product'))
            .slice(2, 3)
            .map((prod: any) => (
              <div key={prod.id}>
                <Link to={`/product/${prod.id}`}>
                  <img
                    src={prod.images[0]}
                    alt={prod.title}
                  />
                </Link>
              </div>
            ))}
        </div>

        <div className='bg-[#f0f0f0]  rounded-md flex items-center justify-center p-4 w-[50%]'>
          {product
            .filter((prod: any) => prod.slug.includes('fresh product'))
            .slice(3, 4)
            .map((prod: any) => (
              <div key={prod.id}>
                <Link to={`/product/${prod.id}`}>
                  <img
                    src={prod.images[0]}
                    alt={prod.title}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewestFarmProduct;
