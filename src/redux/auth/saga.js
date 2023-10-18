import { put, takeEvery } from "redux-saga/effects";
import { getRegisteredUserDetails,throwBadRequest } from "./authSlice";
import { loginApi } from "../../services/api";
import { authApiFailure,authApiLoading,authApiSuccess } from "../loading/loadingSlice";
import { errorSnackbar } from "../snackbar/snackbarSlice";

function* loginUser(loginDetails) {
 try {
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

export function* authenticateUser() {
  yield takeEvery("LOGGED_IN_USER", loginUser);
}
