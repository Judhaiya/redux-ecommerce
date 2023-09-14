import { put, takeEvery } from "redux-saga/effects";
import { getRegisteredUserDetails, loginFailedErrors } from "./authSlice";
import { loginApi } from "../../services/api";

function* loginUser(loginDetails) {
  try {
    const loggedInUserDetails = yield loginApi(loginDetails.payload);
    if (!loggedInUserDetails.data) throw new Error(loggedInUserDetails.message)
    yield put(getRegisteredUserDetails(loggedInUserDetails.data));
  } catch (err) {
    yield put(loginFailedErrors(err.message))
  }
}

export function* authenticateUser() {
  yield takeEvery("LOGGED_IN_USER", loginUser);
}
