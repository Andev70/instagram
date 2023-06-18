import { createSlice } from "@reduxjs/toolkit";

// const { createSlice } = slicer;

const initialState = {
  data: [],
  isLoading: true,
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
    setisLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const { setData, pushData, setisLoading } = cartSlice.actions;
export default cartSlice.reducer;
