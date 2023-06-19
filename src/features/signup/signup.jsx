import { createSlice } from "@reduxjs/toolkit";

// const { createSlice } = slicer;

const initialState = {
  username: null,
  email: null,
  password: null,
};

const cartSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});
export const { setUsername, setPassword, setEmail } = cartSlice.actions;
export default cartSlice.reducer;
