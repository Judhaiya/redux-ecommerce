import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name:"search",
  initialState:{
    error:{msg:""}
  },
  reducers:{
  getSearchedProductFailed:(state,action)=>{
   return {...state,error:{msg:action.payload}}
  }
  }
})

export const {getSearchedProductFailed} = searchSlice.actions;
export default  searchSlice.reducer;
