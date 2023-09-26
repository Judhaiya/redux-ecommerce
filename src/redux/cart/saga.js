import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { getCartItems,deleteCartItems,addCartItems } from "./cartSlice";
import { getCartItemsApi,deleteCartItemsApi,addCartItemApi } from "../../services/cartApi";

function* getAllCartItems(action){
    const response = yield getCartItemsApi(action?.payload);
    yield put(getCartItems(response))
}

export function* cartItemsSaga(){
    yield takeLatest("GET_CART_ITEMS", getAllCartItems)
}
