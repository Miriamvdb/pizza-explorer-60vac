import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Miriam",
  id: 14,
  favorites: [161235, 357311],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 2a. add a new case..
    toggleFav: (state, action) => {
      console.log(action); // 5.
      // 6. Write logic:
      const idPizzaToAdd = action.payload; // 6a. get the pizza id from the payload
      // 6b. Check first if it's already a fav
      const newFavs = state.favorites.includes(idPizzaToAdd)
        ? state.favorites.filter((idnr) => idnr !== idPizzaToAdd) // if it is -> remove it
        : [...state.favorites, idPizzaToAdd]; // if not, add it.

      state.favorites = newFavs;
    },
  },
});

// 2b. ..and export
export const { toggleFav } = userSlice.actions;
export default userSlice.reducer;
