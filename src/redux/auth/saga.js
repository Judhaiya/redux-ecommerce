import { put, takeEvery } from "redux-saga/effects";
import { getRegisteredUserDetails,throwBadRequest } from "./authSlice";
import { loginApi } from "../../services/api";
import { authApiFailure,authApiLoading,authApiSuccess } from "../loading/loadingSlice";
import { errorSnackbar } from "../snackbar/snackbarSlice";

function* loginUser(loginDetails) {
 try {
  /**
   * action function for setting loading state to true via authApiLoading()
   * call loginApi function,if the response is success,following steps will be executed else will throw badRequest
   * error status Code === 400 for invalid credentials
   * setting loading state to false via authApiFailure()
   * if success, token will be stored in redux state via getRegisteredUserDetails  by passing loggedInUserDetails parameter
   * setting loading state to false via authApiSuccess()
   */
    yield put (authApiLoading())
    const loggedInUserDetails = yield loginApi(loginDetails.payload);
    yield put(getRegisteredUserDetails(loggedInUserDetails));
    yield put (authApiSuccess())

  } catch (err) {
    yield put (authApiFailure())
    if(err.statusCode === 400) {
     yield put (throwBadRequest(err?.message))
    yield put(errorSnackbar(err?.message))
    }
  }
}

/**
 * @function
 * it calls takes every method for "LOGGED_IN_USER", passing loginUser function
 */
export function* authenticateUser() {
  yield takeEvery("LOGGED_IN_USER", loginUser);
}
