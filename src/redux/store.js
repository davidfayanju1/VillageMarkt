import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./slices/toggleSlice";
import toggleFilter from "./slices/toggleFilter";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    filter: toggleFilter,
  },
});
