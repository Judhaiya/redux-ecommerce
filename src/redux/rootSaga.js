import {all} from "redux-saga/effects"
import { authenticateUser } from "./auth/saga";
import { getAllProducts } from "../redux/products/productSaga";
import { cartItemsSaga } from "./cart/saga";

/**
 * root saga composes of all the saga generator functions 
 * each saga composed of clubbed saga of similar nature
 */

export function * rootSagas(){
    yield all([authenticateUser(),getAllProducts(),cartItemsSaga()])
}
