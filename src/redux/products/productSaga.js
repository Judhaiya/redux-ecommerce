import { put, takeEvery } from "redux-saga/effects";
import { getProductsApi,getSingleProductApi } from "../../services/productsApi";
import { fetchProductsList,fetchSingleProductDetails } from "./productSlice";

function* getProductsList(action) {
    try {

        const productsList = yield getProductsApi(action.payload)
        yield put(fetchProductsList(productsList))
    } catch (err) {
        console.log(err, "error.message")
    }
}

function* getSingleProductDetails(action){
   try{
     const singleProductDetails = yield getSingleProductApi(action.payload)
     yield put(fetchSingleProductDetails(singleProductDetails))
   }catch(err){
    console.log(err,"err.message")
   }
}

export function* getAllProducts() {
    yield takeEvery("GET_ALL_PRODUCTS", getProductsList)
    yield takeEvery("GET_SINGLE_PRODUCT", getSingleProductDetails)
}
