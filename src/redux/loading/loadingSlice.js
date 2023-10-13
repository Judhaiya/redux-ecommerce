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
    authApiLoading: (state, action) => {
      return { ...state, isAuthLoading: true };
    },
    authApiSuccess: (state, action) => {
      return { ...state, isAuthLoading: false };
    },
    authApiFailure: (state, action) => {
      return { ...state, isAuthLoading: false };
    },
    productsApiLoading: (state, action) => {
      return { ...state, isProductsLoading: true };
    },
    productsApiSuccess: (state, action) => {
      return { ...state, isProductsLoading: false };
    },
    productsApiFailure: (state, action) => {
      return { ...state, isProductsLoading: false };
    },
    cartApiLoading: (state, action) => {
      return { ...state, isCartLoading: true };
    },
    cartApiSuccess: (state, action) => {
      return { ...state, isCartLoading: false };
    },
    cartApiFailure: (state, action) => {
      return { ...state, isCartLoading: false };
    },
    singleProductApiLoading: (state, action) => {
      return { ...state, isSingleProductLoading: true };
    },
    singleProductApiSuccess: (state, action) => {
      return { ...state, isSingleProductLoading: false };
    },
    singleProductApiFailure: (state, action) => {
        return { ...state, isSingleProductLoading: false };
      }
  }
});

export default loadingSlice.reducer;
export const {
authApiFailure,authApiLoading,authApiSuccess,productsApiFailure,productsApiLoading,productsApiSuccess,singleProductApiFailure,singleProductApiSuccess,singleProductApiLoading,cartApiLoading,cartApiSuccess,cartApiFailure
} = loadingSlice.actions;
