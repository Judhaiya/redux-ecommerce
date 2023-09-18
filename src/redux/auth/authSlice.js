import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        userDetails: { data: null },
        userName: "",
        error: { msg: null }
    },
    reducers: {
        getRegisteredUserDetails: (state, userResponse) => {
            state.userDetails.data = userResponse.payload;
            state.error.msg = null

        },
        loginFailedErrors: (state, errors) => {
            state.userDetails.data = null
            state.error.msg = errors.payload
        },
        logoutUser: (state, payload) => {
            state.userDetails.data.token = null
        }
    }
})
export const { getRegisteredUserDetails, loginFailedErrors, logoutUser } = authSlice.actions
export default authSlice.reducer