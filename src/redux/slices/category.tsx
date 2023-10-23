import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiClient } from 'src/services/apiService';
import { RootState } from 'src/redux/store';

export const categoriesAction = createAsyncThunk(
  'categories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get('categories');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const categorySlices = createSlice({
  name: 'category',
  initialState: {
    isLoading: false,
    error: null,
    categories: null,
  } as { isLoading: boolean; error: any; categories: any },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(categoriesAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      categoriesAction.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.categories = action?.payload;
        state.error = null;
      }
    );
    builder.addCase(categoriesAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.categories = null;
      if (action?.payload) {
        state.error = action?.payload?.message;
      } else {
        state.error = action?.error;
      }
    });
  },
});

export default categorySlices.reducer;
