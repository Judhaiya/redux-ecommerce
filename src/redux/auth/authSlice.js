import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        userDetails: { data: null, error: {} },
    },
    reducers: {
        getRegisteredUserDetails: (state, userResponse) => {
            state.userDetails.data = userResponse.payload
        },
        loginFailedErrors: (state, errors) => {
            state.userDetails.error.msg = errors.payload
        }
    }
})
export const { getRegisteredUserDetails, loginFailedErrors } = authSlice.actions
export default authSlice.reducer