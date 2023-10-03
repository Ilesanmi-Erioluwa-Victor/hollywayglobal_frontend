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
  },
});

export default addressSlices.reducer;
