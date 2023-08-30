import { ChangeEvent, useState } from 'react';

import { FieldSet } from '../../components/atoms';

const Checkout = () => {
  const [data, setData] = useState({
    firstName: '',
    address: '',
    town: '',
    email: '',
    mobile: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value.trim() });
  };

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='px-7 py-8 md:p-8vw'>
      <div className='flex justify-between items-center px-10 flex-col md:flex-row'>
        
        <form
          className='flex flex-col gap-[1rem] w-[100%]'
          onSubmit={handleInputSubmit}
        >
          <h2 className='text-[2rem]'>Billing Details</h2>
          <div className='flex flex-col gap-[2rem]'>
            <FieldSet
              name='firstName'
              label='firstName'
              value={data.firstName}
              onChange={handleInputChange}
              id='firstName'
              type='text'
            />

            <FieldSet
              name='address'
              label='address'
              value={data.address}
              onChange={handleInputChange}
              id='address'
              type='text'
            />

            <FieldSet
              name='town'
              label='town'
              value={data.town}
              onChange={handleInputChange}
              id='town'
              type='text'
            />

            <FieldSet
              name='email'
              label='email'
              value={data.email}
              onChange={handleInputChange}
              id='email'
              type='email'
            />

            <FieldSet
              name='mobile'
              label='mobile'
              value={data.mobile}
              onChange={handleInputChange}
              id='mobile'
              type='text'
            />
          </div>
        </form>

        <div className='w-[100%] md:p-8vw'>
          <div className='mt-10 flex text-[0.8rem] gap-4 ml-[auto] p-5 rounded-sm flex-col'>
            <div className='flex justify-between mb-3'>
              <div>
                <img
                  src=''
                  alt=''
                />
                <h2>LCD Monitor</h2>
              </div>
              <p>$650</p>
            </div>

            <div className='flex items-center justify-between'>
              <h3 className='font-[400]'>Sub total</h3>
              <p>$13079</p>
            </div>
            <hr />

            <div className='flex items-center justify-between'>
              <h3 className='font-[400]'>Shipping</h3>
              <p>Free</p>
            </div>
            <hr />

            <div className='flex items-center justify-between'>
              <h3 className='font-[400]'>Total</h3>
              <p>$88998</p>
            </div>
            <button className='bg-[#DB4444] w-100 md:w-[50%] flex items-center justify-center p-3 rounded-sm text-white text-[0.8rem]'>
              Place Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
