import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiClient } from "src/services/apiService";
import { RootState } from "src/redux/store";
import { createAuthHeaders } from "src/utils";
import { User, Data, InitialState } from "src/types";
import { useStoredData } from "src/hooks/useLocalStorage";

export const registerAction = createAsyncThunk(
  "users/register",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("auth/register", data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginAction = createAsyncThunk(
  "users/login",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("auth/login", data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const changePasswordAction = createAsyncThunk<
  any,
  any,
  { rejectValue: any; state: RootState }
>("users/change_password", async (password: string, { rejectWithValue, getState }) => {
  const userData = getState()?.user?.data;
  try {
    const response = await apiClient.put(
      `user/${userData?.id}/password`,
      { password },
      createAuthHeaders(userData?.token)
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const changeProfileImageAction = createAsyncThunk<
  any,
  any,
  { rejectValue: any; state: RootState }
>("users/change_profileImage", async (image: any, { rejectWithValue, getState }) => {
  const userData = getState()?.user?.data;
  try {
    const response = await apiClient.post(
      `user/${userData?.id}/uploadImage`,
      { image },
      createAuthHeaders(userData?.token)
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const updateProfileAction = createAsyncThunk<
  any,
  any,
  { rejectValue: any; state: RootState }
>(
  "users/update_profile",
  async (
    data: { firstName: string; lastName: string; email: string },
    { rejectWithValue, getState }
  ) => {
    const userData = getState()?.user?.data;
    try {
      const response = await apiClient.put(
        `user/${userData?.id}/updateProfile`,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        },
        createAuthHeaders(userData?.token)
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userAction = createAsyncThunk(
  "users/profile",
  async (data: { id: string; token: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`user/${data.id}`, {
        headers: {
          Authorization: `Bearer ${data?.token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const usersSlices = createSlice({
  name: "users",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    data: useStoredData,
    password: null,
    image: null,
    updated_profile: null,
  } as InitialState,
  reducers: {},

  extraReducers: (builder) => {
    //   register
    builder.addCase(registerAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerAction.fulfilled, (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = action?.payload;
      state.error = null;
    });
    builder.addCase(registerAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.user = null;
      if (action?.payload) {
        state.error = action?.payload?.message;
      } else {
        state.error = action?.error;
      }
    });

    // login
    builder.addCase(loginAction.pending, (state) => {
      state.isLoading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(loginAction.fulfilled, (state, action: PayloadAction<User | any>) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
      state.data = action?.payload;
    });
    builder.addCase(loginAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.user = null;
      state.data = null;
      if (action?.payload) {
        state.error = action?.payload?.message;
      } else {
        state.error = action?.error;
      }
    });

    // user profile
    builder.addCase(userAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userAction.fulfilled, (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = action?.payload;
      state.error = null;
    });
    builder.addCase(userAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.user = null;
      if (action?.payload) {
        state.error = action?.payload?.message;
      } else {
        state.error = action?.error;
      }
    });

    // change password
    builder.addCase(changePasswordAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changePasswordAction.fulfilled, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.password = action?.payload;
      state.error = null;
    });
    builder.addCase(changePasswordAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.password = null;
      if (action?.payload) {
        state.error = action?.payload?.message;
      } else {
        state.error = action?.error;
      }
    });

    // change profile image
    builder.addCase(changeProfileImageAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeProfileImageAction.fulfilled, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.image = action?.payload;
      state.error = null;
    });
    builder.addCase(changeProfileImageAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.image = null;
      if (action?.payload) {
        state.error = action?.payload?.message;
      } else {
        state.error = action?.error;
      }
    });

    // update profile
    builder.addCase(updateProfileAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProfileAction.fulfilled, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.updated_profile = action?.payload;
      state.error = null;
    });
    builder.addCase(updateProfileAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.updated_profile = null;
      if (action?.payload) {
        state.error = action?.payload?.message;
      } else {
        state.error = action?.error;
      }
    });
  },
});

export default usersSlices.reducer;
