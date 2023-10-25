import { useState, useEffect } from 'react';
import { useAppDispatch, } from 'src/redux/hooks';
import { categoriesAction } from 'src/redux/slices/category';

const useCategories = () => {
     const [categories, setCategories] = useState<any | null>([]);
    const dispatch = useAppDispatch();
    
      useEffect(() => {
        const data = async () => {
          const result: any = await dispatch(categoriesAction());
          setCategories(result?.payload?.data);
        };

        data();
      }, [dispatch, setCategories]);
    
    return categories
}

export default useCategories
