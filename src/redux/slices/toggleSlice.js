import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.open = true;
    },
    toggleClose: (state) => {
      state.open = false;
    },
  },
});

export const { toggleOpen, toggleClose } = toggleSlice.actions;
export default toggleSlice.reducer;
