import { createSlice } from "@reduxjs/toolkit";

// const { createSlice } = slicer;

const initialState = {
  todos: [],
  email: "",
  username: "",
  password: "",
  isLoading: true,
  isLogedIn: false,
};

const cartSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setLogin: (state) => {
      state.isLogedIn = true;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    resetLogin: (state) => {
      state.isLogedIn = false;
    },
  },
});
export const {
  setTodos,
  resetLogin,
  setLogin,
  setPassword,
  setUsername,
  setEmail,
} = cartSlice.actions;
export default cartSlice.reducer;
