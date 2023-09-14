import { put, takeEvery } from "redux-saga/effects";
import { getRegisteredUserDetails, loginFailedErrors } from "./authSlice";
import { loginApi } from "../../services/api";

function* loginUser(loginDetails) {
  try {
    const loggedInUserDetails = yield loginApi(loginDetails.payload);
    yield put(getRegisteredUserDetails(loggedInUserDetails.data));
    console.log(loggedInUserDetails, "loginDetails");
    if (!loggedInUserDetails.data) throw new Error(loggedInUserDetails.message)
  } catch (err) {
    console.log(err,"error message")
    yield put(loginFailedErrors(err.message))
  }
}

export function* authenticateUser() {
  yield takeEvery("LOGGED_IN_USER", loginUser);
}
