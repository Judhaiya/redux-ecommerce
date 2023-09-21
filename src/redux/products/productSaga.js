import { put, takeLatest } from "redux-saga/effects";
import { getProductsApi } from "../../services/productsApi";
import { fetchProductsList } from "./productSlice";

function* getProductsList(token){
    try{
        const productsList = yield getProductsApi(token)
         yield put(fetchProductsList(productsList))
    }catch(err){
      console.log(err,"error.message")
    }
}

export function* getAllProducts(){
    yield takeLatest("GET_ALL_PRODUCTS",getProductsList)
}