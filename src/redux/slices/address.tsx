import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiClient } from 'src/services/apiService';
import { RootState } from 'src/redux/store';
import { createAuthHeaders } from 'src/utils';

export const createAddressAction = createAsyncThunk<
  any,
  any,
  { rejectValue: any; state: RootState }
>('users/address', async (data: any, { rejectWithValue, getState }) => {
  const userData = getState()?.user?.data;
  try {
    const response = await apiClient.post(
      `user/${userData?.id}/address`,
      data,
      createAuthHeaders(userData?.token)
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const getAddressesAction = createAsyncThunk(
  'users/get_addresses',
  async (data: any, { rejectWithValue, getState }) => {
    //   const userData = getState()?.user?.data;
    try {
      const response = await apiClient.get(
        `user/${data?.id}/address`,
        createAuthHeaders(data?.token)
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteAddressesAction = createAsyncThunk<
  any,
  any,
  { rejectValue: any; state: RootState }
>(
  'users/delete_addresses',
  async (addressId: string, { rejectWithValue, getState }) => {
    const userData = getState()?.user?.data;
    try {
      const response = await apiClient.delete(
        `user/${userData?.id}/address/${addressId}`,
        createAuthHeaders(userData?.token)
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface InitialState {
  isLoading: boolean;
  address: any;
  error: any;
}

const addressSlices = createSlice({
  name: 'address',
  initialState: {
    isLoading: false,
    error: null,
    address: null,
  } as InitialState,
  reducers: {},

  extraReducers: (builder) => {
    //    create address
    builder.addCase(createAddressAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      createAddressAction.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.address = action?.payload;
        state.error = null;
      }
    );
    builder.addCase(createAddressAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.address = null;
      if (action?.payload) {
        state.error = action?.payload?.message;
      } else {
        state.error = action?.error;
      }
    });

    //   get addresses
    builder.addCase(getAddressesAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getAddressesAction.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.address = action?.payload;
        state.error = null;
      }
    );
    builder.addCase(getAddressesAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.address = null;
      if (action?.payload) {
        state.error = action?.payload?.message;
      } else {
        state.error = action?.error;
      }
    });

    //   delete addresses
    builder.addCase(deleteAddressesAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      deleteAddressesAction.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.address = action?.payload;
        state.error = null;
      }
    );
    builder.addCase(deleteAddressesAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.address = null;
      if (action?.payload) {
        state.error = action?.payload?.message;
      } else {
        state.error = action?.error;
      }
    });
  },
});

export default addressSlices.reducer;
