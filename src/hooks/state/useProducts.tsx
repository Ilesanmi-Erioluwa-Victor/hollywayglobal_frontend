import { useEffect, useState } from 'react';
import { useAppDispatch } from 'src/redux/hooks';
import { productsAction } from 'src/redux/slices/product';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = async () => {
      const result: any = await dispatch(productsAction());
      setProducts(result?.payload?.data);
    };

    data();
  }, [dispatch, setProducts]);

  return products;
};

export default useProducts;
