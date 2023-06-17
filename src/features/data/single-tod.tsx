import { createSlice } from "@reduxjs/toolkit";

// const { createSlice } = slicer;

const initialState = {
  singleTodo: {},
};

const cartSlice = createSlice({
  name: "singleTodo",
  initialState,
  reducers: {
    setSingleTodo: (state, action) => {
      state.singleTodo = action.payload;
    },
  },
});
export const { setSingleTodo } = cartSlice.actions;
export default cartSlice.reducer;
