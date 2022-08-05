import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/slice";
import pizzaSlice from "./pizzas/slice";
import restaurantSlice from "./restaurants/slice";

const store = configureStore({
  reducer: {
    user: userSlice,
    pizzas: pizzaSlice,
    restaurants: restaurantSlice,
  },
});

export default store;
