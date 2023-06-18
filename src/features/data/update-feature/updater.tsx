import { createSlice } from "@reduxjs/toolkit";

// const { createSlice } = slicer;

const initialState = {
  description: "todo description is not provided",
  title: "hioofdofo",
  status: null,
};

const cartSlice = createSlice({
  name: "updater",
  initialState,
  reducers: {
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});
export const { setDescription, setTitle, setStatus } = cartSlice.actions;
export default cartSlice.reducer;
