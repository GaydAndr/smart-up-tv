import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../services/API";

export const getFetch = createAsyncThunk(
  '/patient/getall',
  async () => {
    const { data } = await API.get('/patient/getall');
    console.log(222);
    // console.log(data);
    const responseData: any[] = data
    return responseData;
  }
);