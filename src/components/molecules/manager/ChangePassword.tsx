import { ChangeEvent, useState } from "react";
import { FormRow } from "../../../components/atoms";
import { MdPassword } from "react-icons/md";

import { useSnackbar } from "notistack";
import { changePasswordAction } from "src/redux/slices/user";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";

const ChangePassword = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { isLoading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const [userdata, setUserData] = useState({
    password: "",
    currentPassword: "",
    confirmNewPassword: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userdata, [name]: value.trim() });
  };

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { confirmNewPassword, password, currentPassword } = userdata;

    if (!currentPassword) {
      return enqueueSnackbar("Please provide your current password", {
        variant: "error",
      });
    }

    if (password.trim() !== confirmNewPassword.trim()) {
      return enqueueSnackbar("Your new password does not match confirm new password", {
        variant: "error",
      });
    } else if (!password || !confirmNewPassword) {
      return enqueueSnackbar("Please, provide password", {
        variant: "error",
      });
    }
    try {
      const resultAction = await dispatch(changePasswordAction(password));
      if (changePasswordAction.fulfilled.match(resultAction)) {
        if (resultAction?.payload.status === "success") {
          return enqueueSnackbar(resultAction?.payload?.message, {
            variant: "success",
          });
        }
      } else if (changePasswordAction.rejected.match(resultAction)) {
        const error: any = resultAction.payload;
        return enqueueSnackbar(error.message, {
          variant: "error",
        });
      }

      setUserData({
        password: "",
        currentPassword: "",
        confirmNewPassword: "",
      });
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
        value={userdata.currentPassword}
        inputClass="!py-[1.5rem]"
        type="password"
      />

      <FormRow
        labelText={"New Password"}
        name="password"
        onChange={handleInputChange}
        value={userdata.password}
        inputClass="!py-[1.5rem]"
        type="password"
      />

      <FormRow
        labelText={"confirm New Password"}
        name="confirmNewPassword"
        onChange={handleInputChange}
        value={userdata.confirmNewPassword}
        type="password"
        inputClass="!py-[1.5rem]"
      />
      <button
        type="submit"
        className="flex items-center justify-end bg-green-500 hover:bg-green-600 ml-auto mt-4 p-3 rounded-md text-white"
      >
        {isLoading ? "submitting" : " Save Changes"}
      </button>
    </form>
  );
};

export default ChangePassword;
