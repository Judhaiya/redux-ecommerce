import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name:"error",
    initialState:{
      error:{msg:""}
    },
    reducers:{
     updateErrorState:(state,action)=>{
         return action.payload;
     }
    }
})

export const {updateErrorState} = errorSlice.actions;
export default errorSlice.reducer;