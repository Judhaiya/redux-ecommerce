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
    /**
     * action function for setting loading to true via cartApiLoading()
     * calls getCartItemsApi by passing payload received from user such as token
     * action function for setting loading to false via cartApiSuccess()
     * if success,puts the api response in state via getCartItems action
     * if err status Code === 400,updates in snackbar state via errorSnackbar
     *  setting loading state to false via authApiFailure()
     *   throw unauthorized error
     * other status code above 400,will be shown in console
     */
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
    /**
     * calls addCartItemApi by passing payload received from user such as token,cartItem to add
     *if success, update snackbar state after adding to the cart
     * if err status Code === 400,updates in snackbar state via errorSnackbar
     * throw unauthorized error
     * other status code above 400,will be shown in console
     */
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
/**
 * @function
 * it clubes all cart sagas under it
 * it calls takes every method for "GET_CART_ITEMS", passing getAllCartItems function for getting cart items
 * it calls takes every method for "ADD_TO_CART", passing addItemToCart function for adding item to the cart
 */
export function* cartItemsSaga() {
  yield takeEvery("GET_CART_ITEMS", getAllCartItems);
  yield takeEvery("ADD_TO_CART", addItemToCart);
}
