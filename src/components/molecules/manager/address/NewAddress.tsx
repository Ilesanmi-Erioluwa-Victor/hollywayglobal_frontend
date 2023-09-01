import React, { useState } from 'react';

import ComboBox from '../../../atoms/ComboBox';

import 'react-responsive-combo-box/dist/index.css';

import { TbArrowBack } from 'react-icons/tb';

import { useNavigate } from 'react-router-dom';

import { Country, State, City } from 'country-state-city';

import { FieldSet } from '../../../../components/atoms';

interface Option {
  value: string;
  label: string;
}

const NewAddress = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    country: '',
    city: '',
    region: '',
    deliveryAddress: '',
    additionalInfo: '',
    phone: '',
    additionalPhone: '',
  });

  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    undefined
  );
  const [selectedState, setSelectedState] = useState<string | undefined>(
    undefined
  );
  const [selectedCity, setSelectedCity] = useState<string | undefined>(
    undefined
  );

  const countries: Option[] = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const states: Option[] = selectedCountry
    ? State.getStatesOfCountry(selectedCountry).map((state) => ({
        value: state.isoCode,
        label: state.name,
      }))
    : [];

  const cities: Option[] = selectedState
    ? City.getCitiesOfState(selectedCountry || '', selectedState || '').map(
        (city) => ({
          value: city.name,
          label: city.name,
        })
      )
    : [];

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedState(undefined);
    setSelectedCity(undefined);
  };

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedCity(undefined);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setData({ ...data, [name]: value.trim() });
    console.log(e.currentTarget.name);
  };

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Set the selected city and region
      const updatedData = {
        ...data,
        city: selectedCity,
        region: selectedState,
        country: selectedCountry,
      };
      console.log(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className='p-6 flex flex-col'
      onSubmit={handleInputSubmit}
    >
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
            name='phone'
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
          label='additionalInfo'
          variant='outlined'
          id='additionalInfo'
          type='text'
          value={data.additionalInfo}
          onChange={handleInputChange}
          name='additionalInfo'
        />

        <ComboBox
          options={countries}
          onChange={handleCountryChange}
        />

        <fieldset
          className={`flex justify-between items-center gap-4 ${
            !selectedCountry || !selectedState ? 'flex-col' : ''
          }`}
        >
          {!selectedCountry ? (
            <h2 className='text-[1rem] text-red-600'>Select country first</h2>
          ) : (
            <ComboBox
              options={states}
              onChange={handleStateChange}
            />
          )}
          {!selectedState ? (
            <h2 className='text-[1rem] text-red-600'>Select State first</h2>
          ) : (
            <ComboBox
              options={cities}
              onChange={handleCityChange}
            />
          )}
        </fieldset>
      </div>

      <button
        type='submit'
        className='text-white text-[1rem] py-4 rounded-sm bg-[#DB4444] w-[50%] ml-auto mt-[1rem]'
      >
        Save
      </button>
    </form>
  );
};

export default NewAddress;

// const NewAddress: React.FC = () => {

//   return (
//     <div>
//       <select
//         value={selectedCountry}
//         onChange={(e) => setSelectedCountry(e.target.value)}
//       >
//         <option value=''>Select Country</option>
//         {countries.map((country) => (
//           <option
//             key={country.value}
//             value={country.value}
//           >
//             {country.label}
//           </option>
//         ))}
//       </select>

//       <select
//         value={selectedState}
//         onChange={(e) => setSelectedState(e.target.value)}
//       >
//         <option value=''>Select State</option>
//         {states.map((state) => (
//           <option
//             key={state.value}
//             value={state.value}
//           >
//             {state.label}
//           </option>
//         ))}
//       </select>

//       <select>
//         <option value=''>Select City</option>
//         {cities.map((city) => (
//           <option
//             key={city.label}
//             value={city.value}
//           >
//             {city.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default NewAddress;
