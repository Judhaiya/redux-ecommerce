import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        userDetails: {data:null,error:{}},
    },
    reducers: {
        getRegisteredUserDetails: (state,userResponse) => {
            console.log(state,userResponse.payload,userResponse,"state.userdetails")
            state.userDetails.data = userResponse.payload
        },
        loginFailedErrors:(state,errors) =>{
            console.log("error", "data",errors)
            state.userDetails.error.msg =errors.payload
            console.log(state.userDetails,"after updating error")
        }
    }
})
export const { getRegisteredUserDetails,loginFailedErrors } = authSlice.actions
export default authSlice.reducer