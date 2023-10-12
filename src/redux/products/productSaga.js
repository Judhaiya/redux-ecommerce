import { put, takeEvery } from "redux-saga/effects";
import {
  getProductsApi,
  getSingleProductApi,
  getUserSearchedProducts
} from "../../services/api";
import { fetchProductsList, fetchSingleProductDetails } from "./productSlice";
import {updateSingleProductLoading} from "../loading/loadingSlice";

function* getProductsList(action) {
  try {
    const productsList = yield getProductsApi(action.payload);
    yield put(fetchProductsList(productsList));
  } catch (err) {
    console.log(err, "error.message");
  }
}

function* getSingleProductDetails(action) {
  try {
    yield put(updateSingleProductLoading({loading:true}))
    const singleProductDetails = yield getSingleProductApi(action.payload);
    yield put(updateSingleProductLoading({loading:false}))
    yield put(fetchSingleProductDetails(singleProductDetails));
    

  } catch (err) {
    yield put(updateSingleProductLoading({loading:false}))
    console.log(err, "err.message");
  }
}

function* fetchUserSearchedProducts(action) {
  try {
    const searchedProductDetails = yield getUserSearchedProducts(
      action.payload
    );
    yield put(fetchProductsList(searchedProductDetails));
  } catch (error) {
    console.error(error, "error while searching product");
  }
}

export function* getAllProducts() {
  yield takeEvery("GET_ALL_PRODUCTS", getProductsList);
  yield takeEvery("GET_SINGLE_PRODUCT", getSingleProductDetails);
  yield takeEvery("SEARCH_PRODUCT", fetchUserSearchedProducts);
}
