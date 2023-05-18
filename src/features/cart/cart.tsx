import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  loginPage: false,
};

const cartSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setLoginPage: (state) => {
      state.loginPage = true;
    },
  },
});

export const { setLoginPage } = cartSlice.actions;

export default cartSlice.reducer;
