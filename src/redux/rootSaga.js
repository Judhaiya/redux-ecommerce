import {all} from "redux-saga/effects"
import { authenticateUser } from "./auth/saga";
import { getAllProducts } from "../redux/products/productSaga";

export function * rootSagas(){
    yield all([authenticateUser(),getAllProducts()])
}