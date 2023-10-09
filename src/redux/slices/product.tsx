import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiClient } from "src/services/apiService";
import { RootState } from "src/redux/store";

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
