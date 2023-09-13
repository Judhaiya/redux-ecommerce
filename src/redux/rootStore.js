import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice";

const rootReducer = combineReducers({
    authReducer
})
export const store = configureStore({
    reducer: rootReducer
})