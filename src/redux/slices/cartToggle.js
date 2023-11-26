import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const cartToggle = createSlice({
  name: "cartToggle",
  initialState,
  reducers: {
    cartOpen: (state) => {
      state.open = true;
    },
    cartClose: (state) => {
      state.open = false;
    },
  },
});

export const { cartOpen, cartClose } = cartToggle.actions;
export default cartToggle.reducer;
