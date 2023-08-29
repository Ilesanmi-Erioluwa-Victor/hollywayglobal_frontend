import { ChangeEvent, useState } from 'react';
import Button from '@mui/material/Button';

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
    <div className='p-8vw paddTop'>
      <div>
        <form
          className='flex flex-col gap-[1rem]'
          onSubmit={handleInputSubmit}
        >
          <h2 className='text-[2rem] mb-[2rem]'>Billing Details</h2>
          <div className='flex flex-col gap-[1rem]'>
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
          <Button
            variant='contained'
            size='large'
            type='submit'
            sx={{
              backgroundColor: '#DB4444',
            }}
          >
            Create Account
          </Button>
        </form>

        <div>
          <form
            className='flex flex-col gap-[1rem]'
            onSubmit={handleInputSubmit}
          >
            <div className='flex flex-col gap-[1rem]'>
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
            <Button
              variant='contained'
              size='large'
              type='submit'
              sx={{
                backgroundColor: '#DB4444',
              }}
            >
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
