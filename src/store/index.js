import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

const store = configureStore({
    middleware: [createSagaMiddleware()]
})

export default store;