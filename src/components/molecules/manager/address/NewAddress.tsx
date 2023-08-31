import React, { useState, useEffect, ChangeEvent } from 'react';

import ComboBox from 'react-responsive-combo-box';
import 'react-responsive-combo-box/dist/index.css';

import { TbArrowBack } from 'react-icons/tb';
import { AiFillCaretDown, AiFillFilter } from 'react-icons/ai';

import { useNavigate } from 'react-router-dom';

// import { Country, State, City } from 'country-state-city';
// import { ICountry, IState, ICity } from 'country-state-city';

import { FieldSet } from '../../../../components/atoms';

const NewAddress = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    region: '',
    city: '',
    deliveryAddress: '',
    additionalInfo: '',
    phone: '',
    additionalPhone: '',
  });

  const [selectedOption, setSelectedOption] = useState('');

  console.log(selectedOption);

  // const [regions, setRegions] = useState<Region[]>([]);
  // const [cities, setCities] = useState<CityP[]>([]);
  // const [selectedRegion, setSelectedRegion] = useState('');
  // const [selectedCity, setSelectedCity] = useState('');

  // useEffect(() => {
  //   const loadedRegions = State.getStatesOfCountry('NG'); // 'NG' is the country code for Nigeria
  //   setRegions(loadedRegions);
  //   setSelectedCity('');
  // }, []);

  // useEffect(() => {
  //   if (selectedRegion) {
  //     const stateInfo = regions.find(
  //       (region) => region.name === selectedRegion
  //     );
  //     if (stateInfo) {
  //       const loadedCities = City.getCitiesOfState(
  //         stateInfo.countryCode,
  //         stateInfo.isoCode
  //       );
  //       setCities(loadedCities);
  //       setSelectedCity(''); // Reset selected city when region changes
  //     }
  //   }
  // }, [selectedRegion, regions]);

  // const handleChange = (event: any, index: number) => {
  //   const updatedRegions = [...regions];

  //   updatedRegions[index.props.value] = event.target.value;
  //   console.log(
  //     updatedRegions[index],
  //     '>>>>',
  //     index.props.value,
  //     'Target :',
  //     event.target.value
  //   );
  //   setRegions(updatedRegions);

  //   console.log(regions);
  // };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setData({ ...data, [name]: value.trim() });
  };

  // const handleChange = (event: SelectChangeEvent) => {
  //   setSelectedRegion(event.target.value as string);
  //   console.log();
  // };

  // console.log(selectedRegion);

  // const options = [
  //   { value: 'option1', label: 'Option 1' },
  //   { value: 'option2', label: 'Option 2' },
  //   { value: 'option3', label: 'Option 3' },
  // ];

  // const handleSelect = (option) => {
  //   console.log('Selected:', option);
  // };

  const options = [
    'America',
    'India',
    'Australia',
    'Argentina',
    'Ireland',
    'Indonesia',
    'Iceland',
    'Japan',
  ];

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
            className='w-full py-4 text-center text-[0.9rem] border rounded-sm cursor-pointer'
          />

          <input
            type='text'
            name='lastName'
            value={'Ilesanmi'}
            disabled
            className='w-full py-4 text-center text-[0.9rem] border rounded-sm cursor-pointer'
          />
        </fieldset>

        <fieldset className='flex items-center gap-4'>
          <FieldSet
            label='phone'
            variant='outlined'
            id='phone'
            type='text'
            value={data.phone}
            onChange={handleInputChange}
            name='Phone'
          />

          <FieldSet
            label='Additional Phone Number'
            variant='outlined'
            id='additionalPhone'
            type='text'
            value={data.additionalPhone}
            onChange={handleInputChange}
            name='additionalPhone'
          />
        </fieldset>
        <FieldSet
          label='Delivery Address'
          variant='outlined'
          id='deliveryAddress'
          type='text'
          value={data.deliveryAddress}
          onChange={handleInputChange}
          name='deliveryAddress'
        />

        <FieldSet
          label='Additional Delivery Address'
          variant='outlined'
          id='additionalInfo'
          type='text'
          value={data.additionalInfo}
          onChange={handleInputChange}
          name='additionalInfo'
        />
        <fieldset className='flex justify-between items-center gap-4'>
          <ComboBox
            name='region'
            options={options}
            enableAutocomplete
            placeholder='Select State'
            className='w-full h-[60px]'
            renderRightElement={() => <AiFillCaretDown />}
            selectedOptionColor='#e4e012'
            onChange={(event) => console.log(event.target.value)}
            onSelect={(option) => setSelectedOption(option)}
            optionsMaxHeight={500}
            renderOptions={(option) => (
              <div className='p-[5px]'>This is {option}</div>
            )}
          />

          <ComboBox
            name='region'
            options={options}
            enableAutocomplete
            placeholder='Select City'
            className='w-full h-[60px]'
            selectedOptionColor='#e4e012'
            onChange={(event) => console.log(event.target.value)}
            onSelect={(option) => setSelectedOption(option)}
            renderRightElement={() => <AiFillCaretDown />}
            optionsMaxHeight={500}
            renderOptions={(option) => (
              <div className='p-[5px]'>This is {option}</div>
            )}
          />
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
