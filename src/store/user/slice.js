import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Miriam",
  id: 14,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
