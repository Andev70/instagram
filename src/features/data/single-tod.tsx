import { createSlice } from "@reduxjs/toolkit";

// const { createSlice } = slicer;

const initialState = {
  singleTodo: {},
  isEditModal: false,
};

const cartSlice = createSlice({
  name: "singleTodo",
  initialState,
  reducers: {
    setSingleTodo: (state, action) => {
      state.singleTodo = action.payload;
    },
    setModal: (state, action) => {
      state.isEditModal = action.payload;
    },
  },
});
export const { setSingleTodo, setModal } = cartSlice.actions;
export default cartSlice.reducer;
