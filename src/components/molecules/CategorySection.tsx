import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { categoriesAction } from 'src/redux/slices/category';

const CategorySection = () => {
  const [categories, setCategories] = useState<any | null>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = async () => {
      const result: any = await dispatch(categoriesAction());
      setCategories(result?.payload?.data);
    };

    data();
  }, [dispatch]);

  const { isLoading } = useAppSelector((state) => state.categories);

  if (isLoading) return;

  return (
    <div className='bg-white  p-4 shadow-md rounded-md'>
      <div className='flex gap-6 items-center'>
        <span className='block w-6 rounded-sm h-12 bg-green-500'></span>
        <span className='block text-green-500'>categories</span>
      </div>

      <h2 className='mt-8 font-[400] text-lg mb-10'>Browse By Categories</h2>

      <div className='container-custom2 p-[10px] gap-[10px]'>
        {categories.map((category: { id: string; name: string }) => (
          <div
            key={category?.id}
            className='cursor-pointer b hover:text-white gap-6 hover:bg-green-500 transition-all hover:border-transparent border-[1px]  p-7 items-center justify-between flex flex-col rounded-sm'
          >
            <h2 className=' text-[0.9rem]'>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
