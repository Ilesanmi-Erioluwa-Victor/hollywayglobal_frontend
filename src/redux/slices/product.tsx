import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiClient } from 'src/services/apiService';
import { RootState } from 'src/redux/store';
import { InitialStateProduct, Product } from 'src/types';

export const productsAction = createAsyncThunk(
  'products',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get('products');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const productAction = createAsyncThunk(
  'product',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`products/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    error: null,
    products: null,
    isLoading: false,
    product: null,
  } as InitialStateProduct,
  reducers: {},
  extraReducers: (builder) => {
    //   get products
    builder.addCase(productsAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      productsAction.fulfilled,
      (state, action: PayloadAction<Product>) => {
        state.isLoading = false;
        state.products = action?.payload;
        state.error = null;
      }
    );
    builder.addCase(productsAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.products = null;
      if (action?.payload) {
        state.error = action?.payload?.message;
      } else {
        state.error = action?.error;
      }
    });

    //   get product
    builder.addCase(productAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      productAction.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.product = action?.payload;
        state.error = null;
      }
    );
    builder.addCase(productAction.rejected, (state, action: any) => {
      state.isLoading = false;
      state.product = null;
      if (action?.payload) {
        state.error = action?.payload?.message;
      } else {
        state.error = action?.error;
      }
    });
  },
});

export default productSlice.reducer;
