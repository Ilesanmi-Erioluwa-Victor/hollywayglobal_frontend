import React, { useState, useEffect, ChangeEvent } from 'react';

import ComboBox from 'react-responsive-combo-box';
import 'react-responsive-combo-box/dist/index.css';

import { TbArrowBack } from 'react-icons/tb';
import { AiFillCaretDown } from 'react-icons/ai';

import { useNavigate } from 'react-router-dom';

import { Country, State, City } from 'country-state-city';

import { FieldSet } from '../../../../components/atoms';

interface CountryOption {
  value: string;
  label: string;
}

interface StateOption {
  value: string;
  label: string;
}

interface CityOption {
  value: string;
  label: string;
}

const NewAddress = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    city: '',
    region: '',
    deliveryAddress: '',
    additionalInfo: '',
    phone: '',
    additionalPhone: '',
  });

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [states, setStates] = useState<StateOption[]>([]);
  const [selectedState, setSelectedState] = useState<string>('');
  const [cities, setCities] = useState<CityOption[]>([]);

  // Fetch list of all countries
  useEffect(() => {
    const countryList = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountries(countryList);
  }, []);

  // Fetch list of states for the selected country
  useEffect(() => {
    if (selectedCountry) {
      const stateList = State.getStatesOfCountry(selectedCountry).map(
        (state) => ({
          value: state.isoCode,
          label: state.name,
        })
      );
      setStates(stateList);
    }
  }, [selectedCountry]);

  // Fetch list of cities for the selected state
  useEffect(() => {
    if (selectedState) {
      const cityList = City.getCitiesOfState(
        selectedCountry,
        selectedState
      ).map((city) => ({
        value: city.stateCode,
        label: city.name,
      }));
      setCities(cityList);

      console.log(cityList);
    }
  }, [selectedState, selectedCountry]);

  //   // const handleChange = (event: any, index: number) => {
  //   //   const updatedRegions = [...regions];

  //   //   updatedRegions[index.props.value] = event.target.value;
  //   //   console.log(
  //   //     updatedRegions[index],
  //   //     '>>>>',
  //   //     index.props.value,
  //   //     'Target :',
  //   //     event.target.value
  //   //   );
  //   //   setRegions(updatedRegions);

  //   //   console.log(regions);
  //   // };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setData({ ...data, [name]: value.trim() });
  };

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Set the selected city and region
      const updatedData = {
        ...data,
        city: selectedCity,
        region: selectedRegion,
      };

      // Update the state with the selected city and region
      setData(updatedData);

      // Log the updated data
      console.log(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  // const options = [
  //   'America',
  //   'India',
  //   'Australia',
  //   'Argentina',
  //   'Ireland',
  //   'Indonesia',
  //   'Iceland',
  //   'Japan',
  // ];

  const options = countries.map((country) => country.label);

  // console.log(opt2);

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
          name='country'
          options={options}
          placeholder='Select Country'
          className='w-full h-[60px]'
          renderRightElement={() => <AiFillCaretDown />}
          selectedOptionColor='#e4e012'
          onChange={handleInputChange}
          onSelect={(option) => setSelectedRegion(option)}
          renderOptions={(option) => <div className='p-[5px]'>{option}</div>}
        />

        <fieldset className='flex justify-between items-center gap-4'>
          <ComboBox
            name='region'
            options={options}
            placeholder='Select State'
            className='w-full h-[60px]'
            renderRightElement={() => <AiFillCaretDown />}
            selectedOptionColor='#e4e012'
            onChange={handleInputChange}
            onSelect={(option) => setSelectedRegion(option)}
            renderOptions={(option) => (
              <div className='p-[5px]'>{option}</div>
            )}
          />

          <ComboBox
            name='city'
            options={options}
            placeholder='Select City'
            className='w-full h-[60px]'
            selectedOptionColor='#e4e012'
            onChange={handleInputChange}
            onSelect={(option) => setSelectedCity(option)}
            renderRightElement={() => <AiFillCaretDown />}
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
