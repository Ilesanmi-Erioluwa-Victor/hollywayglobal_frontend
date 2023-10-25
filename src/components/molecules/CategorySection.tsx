import useCategories from 'src/hooks/state/useCategories';

const CategorySection = () => {
  const categories = useCategories();
  return (
    <div className='bg-white  shadow-md rounded-md mt-4 w-[90%] p-4 mx-auto'>
      <div className='flex gap-6 items-center'>
        <span className='block w-6 rounded-sm h-12 bg-green-500'></span>
        <span className='block text-green-500'>categories</span>
      </div>

      <h2 className='mt-8 font-[400] text-lg mb-10'>Browse By Categories</h2>

      <div className='container-custom2 p-[10px] gap-[10px]'>
        {categories.map((cat: { id: string; name: string }) => (
          <div
            key={cat?.id}
            className='cursor-pointer b hover:text-white gap-6 hover:bg-green-500 transition-all hover:border-transparent border-[1px]  p-7 items-center justify-between flex flex-col rounded-sm'
          >
            <h2 className=' text-[0.9rem]'>{cat.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
