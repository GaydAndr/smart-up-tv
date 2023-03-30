import { createSlice } from "@reduxjs/toolkit";
import { getFetch } from "./api-service";


const initialState:any = {
  fetchData: []

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   
  },
  extraReducers:(builder)=>{
    builder.addCase(getFetch.fulfilled, (state,{payload})=>{
      state.fetchData = payload
    }) 
  }
});