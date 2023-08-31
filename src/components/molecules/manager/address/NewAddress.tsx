import { useState } from 'react';
import { TbArrowBack } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { FieldSet } from '../../../../components/atoms';

const NewAddress = () => {
  const history = useNavigate();
  const [Region, setRegion] = useState('');

  const [City, setCity] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value);
  };

  return (
    <div className='p-6 flex flex-col'>
      <div className='flex items-center gap-4 mb-3'>
        <button
          onClick={() => history(-1)}
          className=' text-white p-2 rounded-sm bg-[#DB4444] text-[1rem]'
          title='Go Back'
        >
          <TbArrowBack />
        </button>
        <h2 className='text-[1.3rem]'>ADD NEW ADDRESS</h2>
      </div>
      <hr />

      <div className='mt-4 flex flex-col gap-5'>
        <fieldset className='flex items-center gap-4'>
          <input
            type='text'
            name='firstName'
            value={'Erioluwa'}
            disabled
            className='w-full'
          />

          <input
            type='text'
            name='lastName'
            value={'Ilesanmi'}
            disabled
            className='w-full h-6'
          />
        </fieldset>

        <fieldset className='flex items-center gap-4'>
          <FieldSet
            label='Phone Number'
            variant='outlined'
            id='phone'
            type='text'
            value=''
            onChange={() => console.log()}
            name='deliveryAddress'
          />

          <FieldSet
            label='Additional Phone Number'
            variant='outlined'
            id='additionalPhone'
            type='text'
            value=''
            onChange={() => console.log()}
            name='deliveryAddress'
          />
        </fieldset>
        <FieldSet
          label='Delivery Address'
          variant='outlined'
          id='deliveryAddress'
          type='text'
          value=''
          onChange={() => console.log()}
          name='deliveryAddress'
        />

        <FieldSet
          label='Delivery Address'
          variant='outlined'
          id='deliveryAddress'
          type='text'
          value=''
          onChange={() => console.log()}
          name='deliveryAddress'
        />
        <fieldset className='flex justify-between items-center gap-4'>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id='demo-select-small-label'>Region</InputLabel>
            <Select
              labelId='demo-select-small-label'
              id='demo-select-small'
              value={Region}
              label='Region'
              onChange={handleChange}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: '100%' }}>
            <InputLabel id='demo-select-small-label'>City</InputLabel>
            <Select
              labelId='demo-select-small-label'
              id='demo-select-small'
              value={City}
              label='City'
              onChange={handleChange}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </fieldset>
      </div>

      <button
        type='submit'
        className='text-white text-[1rem] py-4 rounded-sm bg-[#DB4444] w-[50%] ml-auto mt-[1rem]'
      >
        Save
      </button>
    </div>
  );
};

export default NewAddress;
