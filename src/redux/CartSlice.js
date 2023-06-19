import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, action) {
      return state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item !== action.payload);
    }
  }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
