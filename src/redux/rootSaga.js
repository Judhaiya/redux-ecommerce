import {all} from "redux-saga/effects"
import { authenticateUser } from "./auth/saga";

export function * rootSagas(){
    yield all([authenticateUser()])
}