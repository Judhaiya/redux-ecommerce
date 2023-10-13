import { createSlice } from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
    name:"snackbar",
    initialState:{
        error:{msg:""},
        success:{msg:""},
        isSnackbarOpen:false,
        snackbarMsg:""
    },
    reducers:{
      errorSnackbar:(state,action)=>{
           return {...state,error:{msg:action.payload}, success:{msg:""},snackbarMsg:action.payload}
        },
       successSnackbar:(state,action)=>{
        return {...state,error:"",success:{msg:action.payload},snackbarMsg:action.payload}
       },
       openSnackbar:(state)=>{
        return {...state,isSnackbarOpen:true}
       },
       closeSnackbar:(state)=>{
        return {...state,isSnackbarOpen:false}
       }
    }
})

export default snackbarSlice.reducer;
export const {errorSnackbar,successSnackbar,openSnackbar,closeSnackbar} = snackbarSlice.actions