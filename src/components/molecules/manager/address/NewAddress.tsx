import React, { useState } from 'react';

import { useSnackbar } from 'notistack';

import { TbArrowBack } from 'react-icons/tb';

import { useNavigate, useNavigation } from 'react-router-dom';

import { Country, State, City } from 'country-state-city';

import { FormRow, CustomSelect, SubmitBtn } from 'src/components/atoms';

import { UserAuth } from 'src/components/auth/User';

import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { createAddressAction } from 'src/redux/slices/address';

interface Option {
  value: string;
  label: string;
}

const NewAddress = () => {
  const dispatch = useAppDispatch();

  UserAuth().userInfo;

  const user = useAppSelector((state) => state.user.user);

  const addressLoader = useAppSelector((state) => state.address.isLoading);

  const { enqueueSnackbar } = useSnackbar();

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
  const [, setSelectedCity] = useState<string | undefined>(undefined);

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
    setData({ ...data, country });
  };

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedCity(undefined);
    setData({ ...data, region: state });
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setData({ ...data, city });
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setData({ ...data, [name]: value.trim() });
  };

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { city, region, country, deliveryAddress } = data;

    if (!city || !country || !region || !deliveryAddress) {
      return enqueueSnackbar(
        'Please provide the necessary Information, City, Region, Country, deliveryAddress',
        {
          variant: 'error',
        }
      );
    }
    try {
      // const address = await NewAddress(data);
      // if (address.status === 'success') {
      //   return enqueueSnackbar('New Address Created', {
      //     variant: 'success',
      //   });
      // }
      const resultAction = await dispatch(createAddressAction(data));

      if (createAddressAction.fulfilled.match(resultAction)) {
        if (resultAction?.payload.status === 'success') {
          return enqueueSnackbar(resultAction?.payload?.message, {
            variant: 'success',
          });
        }
      } else if (createAddressAction.rejected.match(resultAction)) {
        const error: any = resultAction.payload;
        return enqueueSnackbar(error.message, {
          variant: 'error',
        });
      }
    } catch (error: any) {
      if (error.message === 'Network Error') {
        return enqueueSnackbar(error.message, {
          variant: 'error',
        });
      } else {
        return enqueueSnackbar(error.response.data.message, {
          variant: 'error',
        });
      }
    }
  };

  return (
    <div className='p-6 flex flex-col px-0 md:px-6'>
      <div className='flex items-center gap-4 mb-3'>
        <button
          onClick={() => history(-1)}
          className=' text-white p-2 rounded-sm bg-green-500 text-[1rem]'
          title='Go Back'
        >
          <TbArrowBack />
        </button>
        <h2 className='text-[1.3rem]'>ADD NEW ADDRESS</h2>
      </div>
      <hr />

      <form
        onSubmit={handleInputSubmit}
        className='mt-4 flex flex-col gap-5'
      >
        <fieldset className='flex items-center gap-4 flex-col md:flex-row'>
          <FormRow
            type='text'
            value={user?.data?.firstName}
            disabled
            onChange={handleInputChange}
            className='w-[100%_!important] mb-[0px_!important]'
          />

          <FormRow
            type='text'
            value={user?.data?.lastName}
            disabled
            onChange={handleInputChange}
            className='w-[100%_!important] mb-[0px_!important]'
          />
        </fieldset>

        <fieldset className='flex items-center gap-4 flex-col md:flex-row'>
          <FormRow
            labelText='phone'
            type='text'
            value={data.phone}
            onChange={handleInputChange}
            name='phone'
            className='w-[100%_!important] mb-[0px_!important]'
          />

          <FormRow
            labelText='Additional Phone Number'
            type='text'
            value={data.additionalPhone}
            onChange={handleInputChange}
            name='additionalPhone'
            className='w-[100%_!important] mb-[0px_!important]'
          />
        </fieldset>
        <FormRow
          labelText='Delivery Address'
          type='text'
          value={data.deliveryAddress}
          onChange={handleInputChange}
          name='deliveryAddress'
          className='w-[100%_!important] mb-[0px_!important]'
        />

        <FormRow
          labelText='additionalInfo'
          type='text'
          value={data.additionalInfo}
          onChange={handleInputChange}
          name='additionalInfo'
          className='w-[100%_!important] mb-[0px_!important]'
        />

        <CustomSelect
          options={countries}
          onChange={handleCountryChange}
          tag='Country'
        />

        <fieldset
          className={`flex justify-between items-center gap-4 flex-col md:flex-row `}
        >
          <CustomSelect
            options={states}
            onChange={handleStateChange}
            disabled={!selectedCountry}
            tag='State'
          />

          <CustomSelect
            options={cities}
            onChange={handleCityChange}
            disabled={!selectedState}
            tag='City'
          />
        </fieldset>

        <button
          type='submit'
          className='flex items-center justify-end bg-green-500 ml-auto mt-4 p-3 rounded-md text-white'
        >
          {addressLoader ? 'loading...' : 'Save changes'}
        </button>
      </form>
    </div>
  );
};

export default NewAddress;
