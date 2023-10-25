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
        userDetails: { data: null }
      };
      return updatedState;
    }
  }
});
export const {
  /**
   * getRegisteredUserDetails  update userdetails in userdetails key,upate error msg to null,
   * throwUnauthorised update keeping rest of the state same update error state while no token is passed or token is invalid
   * throwBadRequest update userdetails data to null and error msg while invalid credentials are provided during user login
   * logoutUser update userdetails and error (if no error occurs while user logout) to null (expiring the session)
   */
  getRegisteredUserDetails,
  throwUnauthorised,
  throwBadRequest,
  logoutUser
} = authSlice.actions;
export default authSlice.reducer;
