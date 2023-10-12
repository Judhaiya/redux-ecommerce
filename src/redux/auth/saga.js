import { put, takeEvery } from "redux-saga/effects";
import { getRegisteredUserDetails, loginFailedErrors } from "./authSlice";
import { loginApi } from "../../services/api";
import { updateAuthLoading } from "../loading/loadingSlice";

function* loginUser(loginDetails) {
 try {
    yield put (updateAuthLoading({payload:true}))
    const loggedInUserDetails = yield loginApi(loginDetails.payload);
    if (loggedInUserDetails.message) throw new Error(loggedInUserDetails.message);
    yield put(getRegisteredUserDetails(loggedInUserDetails));
    yield put (updateAuthLoading({payload:false}))

  } catch (err) {
    console.log(err, "error message")
    yield put(loginFailedErrors(err.message));
    yield put (updateAuthLoading({payload:false}))
  }
}

export function* authenticateUser() {
  yield takeEvery("LOGGED_IN_USER", loginUser);
}
