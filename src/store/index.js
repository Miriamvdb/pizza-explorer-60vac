import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzas/slice";
import userSlice from "./user/slice";

const store = configureStore({
  reducer: {
    user: userSlice,
    pizzas: pizzaSlice,
  },
});

export default store;
