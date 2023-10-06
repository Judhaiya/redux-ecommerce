import { put, takeEvery } from "redux-saga/effects";
import {getUserSearchedProducts} from "../../services/searchApi";
import {fetchProductsList,fetchProductsFailed} from "../products/productSlice";
function* fetchUserSearchedProducts(action){
  try{
  const searchedProductDetails = yield  getUserSearchedProducts(action.payload);
  console.log(searchedProductDetails,"searchProducts details")
  yield put (fetchProductsList(searchedProductDetails));
}catch(error){
 console.error(error,"error while searching product");
}
}

export function* searchProducts(){
  yield takeEvery("SEARCH_PRODUCT",fetchUserSearchedProducts)
}
