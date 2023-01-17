import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string;
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginHandler: (state, action: PayloadAction<string>) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logoutHandler: (state) => {
      localStorage.removeItem("token");
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { loginHandler, logoutHandler } = authSlice.actions;
export default authSlice.reducer;
