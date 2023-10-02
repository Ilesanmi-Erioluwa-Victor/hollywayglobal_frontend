import { useOutletContext } from 'react-router-dom';

const Order = () => {
  const data = useOutletContext();
  return <div className='p-6'>Order</div>;
};

export default Order;
