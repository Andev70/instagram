import { createSlice } from "@reduxjs/toolkit";

// const { createSlice } = slicer;

const initialState = {
  todoTitle: "",
};

const cartSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.todoTitle = action.payload;
    },
  },
});
export const { setTitle } = cartSlice.actions;
export default cartSlice.reducer;
