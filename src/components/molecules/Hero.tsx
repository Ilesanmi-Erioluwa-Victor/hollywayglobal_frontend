import { v4 as uuidv4 } from 'uuid';

const Category = [
  {
    name: 'Woman’s Fashion',
    link: 'category/',
    id: uuidv4(),
  },
];

const Hero = () => {
  return (
    <div className=' flex justify-between divide-x'>
      <div className='paddTop ml-auto pr-[3rem] flex gap-4 pl-8vw '>
        Category
        <p>{'>'}</p>
      </div>

      <div className='paddTop'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          facere porro totam ducimus nam nisi reiciendis eligendi quos impedit
          fugit eaque molestiae labore repellendus quod maxime officia illum,
          ipsam possimus.
        </p>
      </div>
    </div>
  );
};

export default Hero;
