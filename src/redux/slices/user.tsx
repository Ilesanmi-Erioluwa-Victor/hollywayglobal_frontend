import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiClient } from 'src/services/apiService';
import { User } from 'src/types';

export const registerAction = createAsyncThunk(
  'users/register',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('auth/register', data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginAction = createAsyncThunk(
  'users/login',
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('auth/login', data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const storedData = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo') as string)
  : null;

interface InitialState {
  isLoading: boolean;
  user: User | null;
  error: any;
}

const usersSlices = createSlice({
  name: 'users',
  initialState: {
    user: storedData,
    isLoading: false,
    error: null,
  } as InitialState,
  reducers: {},

  extraReducers: (builder) => {
    //   register
    builder.addCase(registerAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      registerAction.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action?.payload;
        state.error = null;
      }
    );
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
    });
    builder.addCase(
      loginAction.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action?.payload;
        state.error = null;
      }
    );
    builder.addCase(loginAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.user = null;
      if (action?.payload) {
        state.error = action?.payload?.message;
      } else {
        state.error = action?.error;
      }
    });
  },
});

export default usersSlices.reducer;
