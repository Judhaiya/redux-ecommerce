import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userDetails: { data: null },
    error: { msg: null }
  },
  reducers: {
    getRegisteredUserDetails: (_, userResponse) => {
      const updatedState = {
        userDetails: { data: userResponse.payload },
        error: { msg: null }
      };
      return updatedState;
    },
    throwUnauthorised: (state, errorMsg) => {
      const updatedState = {
        ...state,
        error: { msg: errorMsg.payload }
      };
      return updatedState;
    },
    throwBadRequest: (state, errorMsg) => {
      const updatedState = {
        userDetails: { data: null },
        error: { msg: errorMsg.payload }
      };
      return updatedState;
    },
    logoutUser: (state) => {
      const updatedState = {
        error: { msg: null },
        userDetails: { data: { ...state.userDetails.data, token: null } }
      };
      return updatedState;
    }
  }
});
export const {
  getRegisteredUserDetails,
  throwUnauthorised,
  throwBadRequest,
  logoutUser
} = authSlice.actions;
export default authSlice.reducer;
