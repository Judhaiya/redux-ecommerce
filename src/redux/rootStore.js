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

const authPersistConfig = {
  key: "auth",
  blacklist: ["error"],
  storage
};
const cartPersistConfig = {
  key: "cart",
  storage
};
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
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSagas);
