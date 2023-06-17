import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/data/data";
import titleReducer from "./features/data/title";
import todoReducer from "./features/cart/cart";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    data: dataReducer,
    title: titleReducer,
  },
});
