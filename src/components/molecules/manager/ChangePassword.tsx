import { ChangeEvent, useState } from "react";
import { FormRow } from "../../../components/atoms";
import { MdPassword } from "react-icons/md";

import { useSnackbar } from "notistack";

const ChangePassword = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState({
    newPassword: "",
    currentPassword: "",
    confirmNewPassword: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value.trim() });
  };

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { confirmNewPassword, newPassword, currentPassword } = data;

    if (!currentPassword) {
      return enqueueSnackbar("Please provide your current password", {
        variant: "error",
      });
    }

    if (newPassword.trim() !== confirmNewPassword.trim()) {
      return enqueueSnackbar("Your new password does not match confirm new password", {
        variant: "error",
      });
    } else if (!newPassword || !confirmNewPassword) {
      return enqueueSnackbar("Please, provide password", {
        variant: "error",
      });
    }
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="p-6 flex flex-col gap-4" onSubmit={handleInputSubmit}>
      <div className="flex items-center gap-4">
        <MdPassword className="text-[2rem]" />

        <h2 className="text-[1.4rem] font-[400]">Password Settings</h2>
      </div>
      <hr className="mb-4" />

      <FormRow
        labelText={"Current Password"}
        name="currentPassword"
        onChange={handleInputChange}
        value={data.currentPassword}
        inputClass="!py-[1.5rem]"
        type="password"
      />

      <FormRow
        labelText={"New Password"}
        name="newPassword"
        onChange={handleInputChange}
        value={data.newPassword}
        inputClass="!py-[1.5rem]"
        type="password"
      />

      <FormRow
        labelText={"confirm New Password"}
        name="confirmNewPassword"
        onChange={handleInputChange}
        value={data.confirmNewPassword}
        type="password"
        inputClass="!py-[1.5rem]"
      />
      <button
        type="submit"
        className="flex items-center justify-end bg-green-500 hover:bg-green-600 ml-auto mt-4 p-3 rounded-md text-white"
      >
        Save Changes
      </button>
    </form>
  );
};

export default ChangePassword;
