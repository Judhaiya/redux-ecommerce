import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {
  persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "../redux/auth/authSlice";
import { rootSagas } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const authPersistsConfig = {
  key: "auth",
  blacklist: ["error"],
  storage
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistsConfig, authReducer)
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSagas);
