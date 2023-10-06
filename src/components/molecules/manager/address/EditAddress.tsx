import React, { useState, useEffect } from "react";

import { useSnackbar } from "notistack";

import { Country, State, City } from "country-state-city";

import { FormRow, CustomSelect } from "src/components/atoms";

import { UserAuth } from "src/components/auth/User";

import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getAddressAction, editAddressAction } from "src/redux/slices/address";
import { MdClose } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";

interface Option {
  value: string;
  label: string;
}

const EditAddress = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { addressId }: any = useParams();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  UserAuth().userInfo;

  const user = useAppSelector((state) => state.user.user);

  const addressLoader = useAppSelector((state) => state.address.isLoading);

  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState({
    country: "",
    city: "",
    region: "",
    deliveryAddress: "",
    additionalInfo: "",
    phone: "",
    additionalPhone: "",
  });

  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(undefined);
  const [selectedState, setSelectedState] = useState<string | undefined>(undefined);
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
    ? City.getCitiesOfState(selectedCountry || "", selectedState || "").map((city) => ({
        value: city.name,
        label: city.name,
      }))
    : [];

  useEffect(() => {
    const response = async () => {
      if (addressId) {
        const address: any = await dispatch(getAddressAction(addressId));
        setData(address?.payload?.data);
        setSelectedCountry(address?.payload?.data?.country);
        setSelectedState(address?.payload?.data?.region);
      }
    };

    response();
  }, [dispatch, addressId]);

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

    try {
      const resultAction = await dispatch(editAddressAction({ addressId, data }));
      if (editAddressAction.fulfilled.match(resultAction)) {
        if (resultAction?.payload.status === "success") {
          onClose();
          navigate("/user/account/address");
          return enqueueSnackbar(resultAction?.payload?.message, {
            variant: "success",
          });
        }
      } else if (editAddressAction.rejected.match(resultAction)) {
        const error: any = resultAction.payload;
        return enqueueSnackbar(error.message, {
          variant: "error",
        });
      }
    } catch (error: any) {
      if (error.message === "Network Error") {
        return enqueueSnackbar(error.message, {
          variant: "error",
        });
      } else {
        return enqueueSnackbar(error.response.data.message, {
          variant: "error",
        });
      }
    }
  };

  return (
    <div
      className={`${
        !isOpen
          ? "hidden"
          : "position fixed z-[100] w-full h-[100vh] top-0 left-0 bg-[#88828514] flex flex-col items-center justify-center"
      }`}
    >
      <button
        onClick={onClose}
        className="bg-green-500 absolute top-8 right-4 p-3 text-white rounded-[50%] hover:bg-green-600 transition-all"
      >
        <MdClose />
      </button>
      <div className="p-6 flex flex-col px-0 md:px-6 bg-white shadow-lg">
        <div className="flex items-center gap-4 mb-3">
          <h2 className="text-[1.3rem]">Update address</h2>
        </div>
        <hr />

        <form onSubmit={handleInputSubmit} className="mt-4 flex flex-col gap-3">
          <fieldset className="flex items-center gap-4 flex-col md:flex-row">
            <FormRow
              type="text"
              value={user?.data?.firstName}
              disabled
              onChange={handleInputChange}
              className="w-[100%_!important] mb-[0px_!important]"
            />

            <FormRow
              type="text"
              value={user?.data?.lastName}
              disabled
              onChange={handleInputChange}
              className="w-[100%_!important] mb-[0px_!important]"
            />
          </fieldset>

          <fieldset className="flex items-center gap-4 flex-col md:flex-row">
            <FormRow
              labelText="phone"
              type="text"
              value={data.phone}
              onChange={handleInputChange}
              name="phone"
              className="w-[100%_!important] mb-[0px_!important]"
            />

            <FormRow
              labelText="Additional Phone Number"
              type="text"
              value={data.additionalPhone}
              onChange={handleInputChange}
              name="additionalPhone"
              className="w-[100%_!important] mb-[0px_!important]"
            />
          </fieldset>
          <FormRow
            labelText="Delivery Address"
            type="text"
            value={data.deliveryAddress}
            onChange={handleInputChange}
            name="deliveryAddress"
            className="w-[100%_!important] mb-[0px_!important]"
          />

          <FormRow
            labelText="additionalInfo"
            type="text"
            value={data.additionalInfo}
            onChange={handleInputChange}
            name="additionalInfo"
            className="w-[100%_!important] mb-[0px_!important]"
          />

          <CustomSelect options={countries} onChange={handleCountryChange} tag="Country" />

          <fieldset className={`flex justify-between items-center gap-4 flex-col md:flex-row `}>
            <CustomSelect
              options={states}
              onChange={handleStateChange}
              disabled={!selectedCountry}
              tag="State"
            />

            <CustomSelect
              options={cities}
              onChange={handleCityChange}
              disabled={!selectedState}
              tag="City"
            />
          </fieldset>

          <button
            type="submit"
            className="flex items-center justify-end bg-green-500 ml-auto mt-4 p-3 rounded-md text-white hover:bg-[#048a35] transition-all"
          >
            {addressLoader ? "loading..." : "Save changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAddress;
