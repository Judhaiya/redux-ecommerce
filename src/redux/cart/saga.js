import { put, takeEvery } from "redux-saga/effects";
import { getCartItems, deleteCartItems, addCartItems } from "./cartSlice";
import {
  getCartItemsApi,
  deleteCartItemsApi,
  addCartItemApi
} from "../../services/cartApi";

function* getAllCartItems(action) {
  try {
    const response = yield getCartItemsApi(action?.payload);
    yield put(getCartItems(response));
  } catch (err) {
    console.error(err, "error while getting cart from items");
  }
}
function* addItemToCart(action) {
  const { token, cartItem } = action.payload;
  try {
    yield addCartItemApi(token, cartItem);
    yield put(addCartItems());
  } catch (err) {
    console.error(err, "error while getting cart from items");
  }
}

export function* cartItemsSaga() {
  yield takeEvery("GET_CART_ITEMS", getAllCartItems);
  yield takeEvery("ADD_TO_CART", addItemToCart);
}
