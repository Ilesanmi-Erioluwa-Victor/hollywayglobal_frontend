import { useEffect, useState } from 'react';
import { useAppDispatch } from 'src/redux/hooks';
import { productAction } from 'src/redux/slices/product';

const useProduct = (id: string) => {
  const [product, setProduct] = useState(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = async () => {
      const result: any = await dispatch(productAction(id));
      setProduct(result?.payload?.data);
    };

    data();
  }, [dispatch, id]);

  return product;
};

export default useProduct;
