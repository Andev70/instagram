import { createSlice } from "@reduxjs/toolkit";

// const { createSlice } = slicer;

const initialState = {
  singleTodo: {},
  isLoading: true,
  isEditModal: false,
  updateStatus: null,
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
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUpdateStatus: (state, action) => {
      state.updateStatus = action.payload;
    },
  },
});
export const { setSingleTodo, setModal, setIsLoading, setUpdateStatus } =
  cartSlice.actions;
export default cartSlice.reducer;
