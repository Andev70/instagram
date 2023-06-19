import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: true,
  status: null,
  todoId: null,
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
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setTodoId: (state, action) => {
      state.todoId = action.payload;
    },
    redoStatus: (state, action) => {
      state.data.forEach((datai) => {
        if (datai._id === action.payload.id) {
          datai.status = action.payload.status;
        }
      });
    },
  },
});
export const {
  setData,
  pushData,
  setisLoading,
  setStatus,
  setTodoId,
  redoStatus,
} = cartSlice.actions;
export default cartSlice.reducer;
