import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        userDetails: { data: null },
        userName:"",
        error:{}
    },
    reducers: {
        getRegisteredUserDetails: (state, userResponse) => {
            state.userDetails.data = userResponse.payload
        },
        loginFailedErrors: (state, errors) => {
            state.error.msg = errors.payload
        },
        logoutUser:(state,payload)=>{
          state.userDetails.data.token = null
        }
    }
})
export const { getRegisteredUserDetails, loginFailedErrors,logoutUser } = authSlice.actions
export default authSlice.reducer