import { put, takeEvery } from "redux-saga/effects";
import { getCartItems } from "./cartSlice";
import { getCartItemsApi, addCartItemApi } from "../../services/api";
import {
  cartApiFailure,
  cartApiLoading,
  cartApiSuccess
} from "../loading/loadingSlice";
import { errorSnackbar, successSnackbar } from "../snackbar/snackbarSlice";
import { throwUnauthorised } from "../auth/authSlice";

function* getAllCartItems(action) {
  try {
    yield put(cartApiLoading());
    const response = yield getCartItemsApi(action?.payload);
    yield put(cartApiSuccess());
    yield put(getCartItems(response));
  } catch (err) {
    yield put(cartApiFailure());
    if (err.statusCode === 400) {
      yield put(throwUnauthorised(err?.message));
      yield put(errorSnackbar(err?.message));
    }
    console.error(err, "error while getting cart from items");
  }
}
function* addItemToCart(action) {
  const { token, cartItem } = action.payload;
  try {
    yield addCartItemApi(token, cartItem);
    yield put(successSnackbar("products has been added to cart successfully"));
  } catch (err) {
    console.error(err, "error while getting cart from items");
    if (err.statusCode === 400) {
      yield put(throwUnauthorised(err?.message));
      yield put(errorSnackbar(err?.message));
    }
  }
}

export function* cartItemsSaga() {
  yield takeEvery("GET_CART_ITEMS", getAllCartItems);
  yield takeEvery("ADD_TO_CART", addItemToCart);
}
