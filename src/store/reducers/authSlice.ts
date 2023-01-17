import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string;
  isLoggedIn: false;
};

const initialState: AuthState = {
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: () => {},
    logout: () => {},
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
