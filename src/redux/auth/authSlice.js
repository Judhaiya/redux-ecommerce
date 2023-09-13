import { createSlice } from "@mui/icons-material";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        userDetails: {}
    },
    reducers: {
        getRegisteredUserDetails: (state, payload) => {
            state.userDetails = {}
        }
    }
})
export const { getRegisteredUserDetails } = authSlice.actions
export default authSlice.reducer