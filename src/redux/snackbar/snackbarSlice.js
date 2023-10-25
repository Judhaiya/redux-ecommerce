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
        return {...state,error:{msg:""},success:{msg:action.payload},snackbarMsg:action.payload}
       },
       openSnackbar:(state)=>{
        return {...state,isSnackbarOpen:true}
       },
       closeSnackbar:(state)=>{
        return {...state,isSnackbarOpen:false,snackbarMsg:""}
       }
    }
})

export default snackbarSlice.reducer;
/**
 * errorSnackbar updates snackbarMsg state and error state based on the error msg passed,leaving rest of the state unchanged 
 * successSnackbar updates snackbarMsg state and success state based on the success msg passed,leaving rest of the state unchanged
 * openSnackbar updates  isSnackbarOpen state to true leaving rest of the state unchanged
 * closeSnackbar updates  isSnackbarOpen state to false and snackbarMsg to empty string(while clicking any button that shows snackbar it shows stale or prev state ) leaving rest of the state unchanged
 */
export const {errorSnackbar,successSnackbar,openSnackbar,closeSnackbar} = snackbarSlice.actions