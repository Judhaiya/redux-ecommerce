import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isAuthLoading: false,
    isProductsLoading: false,
    isCartLoading: false,
    isSingleProductLoading: false
  },
  reducers: {
    authApiLoading: (state) => {
      return { ...state, isAuthLoading: true };
    },
    authApiSuccess: (state) => {
      return { ...state, isAuthLoading: false };
    },
    authApiFailure: (state) => {
      return { ...state, isAuthLoading: false };
    },
    productsApiLoading: (state) => {
      return { ...state, isProductsLoading: true };
    },
    productsApiSuccess: (state) => {
      return { ...state, isProductsLoading: false };
    },
    productsApiFailure: (state) => {
      return { ...state, isProductsLoading: false };
    },
    cartApiLoading: (state) => {
      return { ...state, isCartLoading: true };
    },
    cartApiSuccess: (state) => {
      return { ...state, isCartLoading: false };
    },
    cartApiFailure: (state) => {
      return { ...state, isCartLoading: false };
    },
    singleProductApiLoading: (state) => {
      return { ...state, isSingleProductLoading: true };
    },
    singleProductApiSuccess: (state) => {
      return { ...state, isSingleProductLoading: false };
    },
    singleProductApiFailure: (state) => {
        return { ...state, isSingleProductLoading: false };
      }
  }
});

export default loadingSlice.reducer;
export const {
authApiFailure,authApiLoading,authApiSuccess,productsApiFailure,productsApiLoading,productsApiSuccess,singleProductApiFailure,singleProductApiSuccess,singleProductApiLoading,cartApiLoading,cartApiSuccess,cartApiFailure
} = loadingSlice.actions;
