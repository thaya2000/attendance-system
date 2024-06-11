import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../services/api";

export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const data = await loginUser(username, password);
      sessionStorage.setItem("auth", "true");
      sessionStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: sessionStorage.getItem("auth") === "true" || false,
    token: sessionStorage.getItem("token") || null,
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      sessionStorage.removeItem("auth");
      sessionStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.token = null;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
