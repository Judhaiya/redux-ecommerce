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
        throwUnauthorised: (state,errorMsg)=>{
            console.log(errorMsg)
          const updatedState = {
            ...state,
            error:{msg:errorMsg.payload }
          }
          return updatedState
        },
        logoutUser: (state) => {
            const updatedState = {
                ...state,
                userDetails:{data:{...state.userDetails.data,token:null}}
            }
            return updatedState
        },
        }
})
export const { getRegisteredUserDetails,throwUnauthorised, logoutUser } = authSlice.actions
export default authSlice.reducer