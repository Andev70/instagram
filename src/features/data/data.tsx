import { createSlice } from "@reduxjs/toolkit";

// const { createSlice } = slicer;

const initialState = {
  data: [],
};

const cartSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    pushData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});
export const { setData, pushData } = cartSlice.actions;
export default cartSlice.reducer;
