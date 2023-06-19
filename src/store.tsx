import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/data/data";
import titleReducer from "./features/data/title";
import todoReducer from "./features/cart/cart";
import todoUpdater from "./features/data/update-feature/updater";
import singleTodo from "./features/data/single-tod";
import signup from "./features/signup/signup.jsx";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    data: dataReducer,
    title: titleReducer,
    singleTodo: singleTodo,
    updater: todoUpdater,
    signup: signup,
  },
});
