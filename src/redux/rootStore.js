import {
  combineReducers,
  configureStore
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import authReducer from "../redux/auth/authSlice";
import { rootSagas } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  authReducer
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSagas);
