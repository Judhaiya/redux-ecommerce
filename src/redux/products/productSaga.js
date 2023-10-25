import { put, takeEvery } from "redux-saga/effects";
import {
  getProductsApi,
  getSingleProductApi,
  getUserSearchedProducts
} from "../../services/api";
import { fetchProductsList, fetchSingleProductDetails } from "./productSlice";
import {
  productsApiFailure,
  productsApiLoading,
  productsApiSuccess,
  singleProductApiFailure,
  singleProductApiLoading,
  singleProductApiSuccess
} from "../loading/loadingSlice";
import { throwUnauthorised } from "../auth/authSlice";
import { errorSnackbar } from "../snackbar/snackbarSlice";

function* getProductsList(action) {
  try {
    /**
     * action function for setting loading to true via productsApiLoading()
     * calls getProductsApi by passing payload received from user such as token
     * if success,puts the api response in state via fetchProductsList, action function for setting loading to false via productsApiSuccess()
     * if err status Code === 400
     * setting loading state to false via productsApiFailure()
     * updates in snackbar state via errorSnackbar
     * throw unauthorized error
     * other status code above 400,will be shown in console
     */
    yield put(productsApiLoading());
    const productsList = yield getProductsApi(action.payload);
    yield put(productsApiSuccess());
    yield put(fetchProductsList(productsList));
  } catch (err) {
    yield put(productsApiFailure());

    if (err.statusCode === 400) {
      yield put(throwUnauthorised(err?.message));
      yield put(errorSnackbar(err?.message));
    }
  }
}

function* getSingleProductDetails(action) {
  try {
    /**
     * action function for setting loading to true via singleProductApiLoading()
     * calls getSingleProductApi by passing payload received from user such as token,productId
     * if success,puts the api response in state via fetchSingleProductDetails,action function for setting loading to false via singleProductApiSuccess()
     * if err status Code === 400
     * setting loading state to false via singleProductApiFailure()
     * updates in snackbar state via errorSnackbar
     * throw unauthorized error
     * other status code above 400,will be shown in console
     */
    yield put(singleProductApiLoading());
    const singleProductDetails = yield getSingleProductApi(action.payload);
    yield put(singleProductApiSuccess());
    yield put(fetchSingleProductDetails(singleProductDetails));
  } catch (err) {
    yield put(singleProductApiFailure());
    if (err.statusCode === 400) {
      yield put(throwUnauthorised(err?.message));
      yield put(errorSnackbar(err?.message));
    }
  }
}

function* fetchUserSearchedProducts(action) {
  try {
    /**
     * action function for setting loading to true via productsApiLoading()
     * calls getUserSearchedProducts by passing payload received from user such as token,user searched value
     * if success,puts the api response in state via productsApiSuccess(),action function for setting loading to false via singleProductApiSuccess()
     * if err status Code === 400
     * setting loading state to false via productsApiFailure()
     * updates in snackbar state via errorSnackbar
     * throw unauthorized error
     * other status code above 400,will be shown in console
     */
    yield put(productsApiLoading());
    const searchedProductDetails = yield getUserSearchedProducts(
      action.payload
    );
    yield put(productsApiSuccess());
    yield put(fetchProductsList(searchedProductDetails));
  } catch (err) {
    yield put(productsApiFailure());
    console.error(err, "error while searching product");
    if (err.statusCode === 400) {
      yield put(throwUnauthorised(err?.message));
      yield put(errorSnackbar(err?.message));
    }
  }
}

/**
 * @function
 * it clubes all product sagas under it
 * it calls takes every method for "GET_ALL_PRODUCTS", passing getProductsList function for getting all products
 * it calls takes every method for "GET_SINGLE_PRODUCT", passing getSingleProductDetails function for getting single product
  * it calls takes every method for "SEARCH_PRODUCT", passing fetchUserSearchedProductss function for getting user searched product
 */

export function* getAllProducts() {
  yield takeEvery("GET_ALL_PRODUCTS", getProductsList);
  yield takeEvery("GET_SINGLE_PRODUCT", getSingleProductDetails);
  yield takeEvery("SEARCH_PRODUCT", fetchUserSearchedProducts);
}
