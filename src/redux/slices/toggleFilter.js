import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const toggleFilter = createSlice({
  name: "toggleFilter",
  initialState,
  reducers: {
    filterOpen: (state) => {
      state.open = true;
    },
    filterClose: (state) => {
      state.open = false;
    },
  },
});


export const {filterOpen, filterClose } = toggleFilter.actions
export default toggleFilter.reducer
