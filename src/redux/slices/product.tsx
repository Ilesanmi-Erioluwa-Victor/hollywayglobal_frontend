import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiClient } from "src/services/apiService";
import { RootState } from "src/redux/store";
import { InitialStateProduct } from "src/types";
export const changePasswordAction = createAsyncThunk<
  any,
  any,
  { rejectValue: any; state: RootState }
>("products", async ({ rejectWithValue }) => {
  try {
    const response = await apiClient.get("products");
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    error: null,
    product: null,
    isLoading: false,
  } as InitialStateProduct,
  reducers: {},
  extraReducers: (builder) => {},
});

export default productSlice.reducer;
