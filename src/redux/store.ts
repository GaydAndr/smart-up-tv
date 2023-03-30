import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { authSlice } from "./apiServiseReducer";
const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});