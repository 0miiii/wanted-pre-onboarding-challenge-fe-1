import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string | null;
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isLoggedIn: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    tokenSaveHandler: (state, action: PayloadAction<string>) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    tokenDeleteHandler: (state) => {
      localStorage.removeItem("token");
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { tokenSaveHandler, tokenDeleteHandler } = authSlice.actions;
export default authSlice.reducer;
