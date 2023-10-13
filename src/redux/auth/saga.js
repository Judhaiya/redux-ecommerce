import { put, takeEvery } from "redux-saga/effects";
import { getRegisteredUserDetails } from "./authSlice";
import { loginApi } from "../../services/api";
import { authApiFailure,authApiLoading,authApiSuccess } from "../loading/loadingSlice";

function* loginUser(loginDetails) {
 try {
    yield put (authApiLoading())
    const loggedInUserDetails = yield loginApi(loginDetails.payload);
    if (loggedInUserDetails.message) throw new Error(loggedInUserDetails.message);
    yield put(getRegisteredUserDetails(loggedInUserDetails));
    yield put (authApiSuccess())

  } catch (err) {
    console.log(err, "error message")
    yield put (authApiFailure(err?.message))
  }
}

export function* authenticateUser() {
  yield takeEvery("LOGGED_IN_USER", loginUser);
}
