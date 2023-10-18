import { put, takeEvery } from "redux-saga/effects";
import {
  getProductsApi,
  getSingleProductApi,
  getUserSearchedProducts
} from "../../services/api";
import { fetchProductsList, fetchSingleProductDetails } from "./productSlice";
import {
  productsApiFailure,productsApiLoading,productsApiSuccess,singleProductApiFailure,singleProductApiLoading,singleProductApiSuccess
} from "../loading/loadingSlice";
import { throwUnauthorised } from "../auth/authSlice";
import { errorSnackbar } from "../snackbar/snackbarSlice";

function* getProductsList(action) {
  try {
    yield put(productsApiLoading());
    const productsList = yield getProductsApi(action.payload);
    yield put(productsApiSuccess());
    yield put(fetchProductsList(productsList));
   
  } catch (err) {
    yield put(productsApiFailure())
   
    if (err.statusCode === 400){
     yield put(throwUnauthorised(err?.message))
     yield put(errorSnackbar(err?.message))
    }
}
}

function* getSingleProductDetails(action) {
  try {
    yield put(singleProductApiLoading());
    const singleProductDetails = yield getSingleProductApi(action.payload);
    yield put(singleProductApiSuccess());
    yield put(fetchSingleProductDetails(singleProductDetails));
  } catch (err) {
    yield put(singleProductApiFailure());
    if (err.statusCode === 400){
      yield put(throwUnauthorised(err?.message))
      yield put(errorSnackbar(err?.message))
     }
  }
}

function* fetchUserSearchedProducts(action) {
  try {
    yield put(productsApiLoading())
    const searchedProductDetails = yield getUserSearchedProducts(
      action.payload
    );
    yield put(productsApiSuccess())
    yield put(fetchProductsList(searchedProductDetails));
  } catch (err) {
    yield put(productsApiFailure())
    console.error(err, "error while searching product");
    if (err.statusCode === 400){
      yield put(throwUnauthorised(err?.message))
      yield put(errorSnackbar(err?.message))
     }
  }
}

export function* getAllProducts() {
  yield takeEvery("GET_ALL_PRODUCTS", getProductsList);
  yield takeEvery("GET_SINGLE_PRODUCT", getSingleProductDetails);
  yield takeEvery("SEARCH_PRODUCT", fetchUserSearchedProducts);
}
