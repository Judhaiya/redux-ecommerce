import { put, takeEvery } from "redux-saga/effects";
import { getRegisteredUserDetails, loginFailedErrors } from "./authSlice";
import { loginApi } from "../../services/authApi";

function* loginUser(loginDetails) {
 try {
    const loggedInUserDetails = yield loginApi(loginDetails.payload);
    if (loggedInUserDetails.message) throw new Error(loggedInUserDetails.message);
    yield put(getRegisteredUserDetails(loggedInUserDetails));

  } catch (err) {
    console.log(err, "error message")
    yield put(loginFailedErrors(err.message));
  }
}

export function* authenticateUser() {
  yield takeEvery("LOGGED_IN_USER", loginUser);
}
