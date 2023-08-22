import { v4 as uuidv4 } from 'uuid';

import Image from '../../assets/dark_800.png';
import Image1 from '../../assets/signup.png';
import Image2 from '../../assets/react.svg';

const SubHero = () => {
  const products = [
    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image2,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image1,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image1,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image2,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image1,
    },

    {
      name: 'Product Name',
      id: uuidv4(),
      image: Image2,
    },
  ];

  return (
    <div className='bg-white flex flex-wrap'>
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.image}
            alt={product.name}
          />
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default SubHero;
