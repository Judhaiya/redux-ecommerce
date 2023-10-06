import {all} from "redux-saga/effects"
import { authenticateUser } from "./auth/saga";
import { getAllProducts } from "../redux/products/productSaga";
import { cartItemsSaga } from "./cart/saga";
import  {searchProducts} from "./search/searchSaga";

export function * rootSagas(){
    yield all([authenticateUser(),getAllProducts(),cartItemsSaga(),searchProducts()])
}
