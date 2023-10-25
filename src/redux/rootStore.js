import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "../redux/auth/authSlice";
import productReducer from "../redux/products/productSlice";
import cartReducer from "../redux/cart/cartSlice";
import loadingReducer from "../redux/loading/loadingSlice";
import snackbarReducer from "./snackbar/snackbarSlice";
import { rootSagas } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

/**
 * @Object 
 * configuring persits for auth slice
 * key will be auth,preventing error state from persisting in local storage using blacklist property,
 * storage - default storage(local storage)
 */

const authPersistConfig = {
  key: "auth",
  blacklist: ["error"],
  storage
};
const cartPersistConfig = {
  key: "cart",
  storage
};

/**
 * combineReducers
 * @function 
 * @param {Object}
 * object stores the reducers that are going to be used in the project with corresponding config if there is any
 * basically reducers for all the features that require redux in the application
 */

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  products: productReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  snackbar: snackbarReducer,
  loading: loadingReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  /**
   * @function
   * @param {Object}
   * serializableCheck -does serializable check for the following actions
   * invoking function's method concat to pass our custom middleware (sagaMiddleware) as argument
   */
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSagas);
/** run all the sagas from root sagas */
