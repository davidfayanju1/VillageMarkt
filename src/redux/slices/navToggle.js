import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const navToggle = createSlice({
  name: "navToggle",
  initialState,
  reducers: {
    navOpen: (state) => {
      state.open = true;
    },
    navClose: (state) => {
      state.open = false;
    },
  },
});

export const { navOpen, navClose } = navToggle.actions;
export default navToggle.reducer;
