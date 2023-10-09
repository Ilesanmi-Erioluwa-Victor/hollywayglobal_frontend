import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiClient } from "src/services/apiService";
import { RootState } from "src/redux/store";
import { InitialStateProduct } from "src/types";

export const productsAction = createAsyncThunk<any, any, { rejectValue: any; state: RootState }>(
  "products",
  async ({ rejectWithValue }) => {
    try {
      const response = await apiClient.get("products");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    error: null,
    product: null,
    isLoading: false,
  } as InitialStateProduct,
  reducers: {},
  extraReducers: (builder) => {
    //   get products
    builder.addCase(productsAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(productsAction.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.product = action?.payload;
      state.error = null;
    });
    builder.addCase(productsAction.rejected, (state, action: any) => {
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
