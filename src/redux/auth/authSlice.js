import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        userDetails: { data: null },
        error: { msg: null }
    },
    reducers: {
        getRegisteredUserDetails: (state, userResponse) => {
            const updatedState = {
                userDetails:{data:userResponse.payload},
                error:{msg:null}
              }
           return updatedState
        },
        loginFailedErrors: (state, errors) => {
       
         const updatedState = {
           userDetails:{data:null},
           error:{msg:errors.payload}
         }
         return updatedState
        },
        logoutUser: (state, payload) => {
            state.userDetails.data.token = null
        },
        }
})
export const { getRegisteredUserDetails, loginFailedErrors, logoutUser,clearError } = authSlice.actions
export default authSlice.reducer