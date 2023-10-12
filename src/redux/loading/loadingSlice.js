import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name:"loading",
    initialState:{
        isAuthLoading:false,
        isProductsLoading:false,
        isCartLoading:false,
        isSingleProductLoading:false,
        isProductSearchLoading:false
    },
    reducers:{
        updateAuthLoading:(state,action)=>{
            return {...state,isAuthLoading:action.payload}
        },
        updateProductsLoading:(state,action)=>{
            return {...state,isProductsLoading:action.payload}
        },
        updateCartLoading:(state,action) =>{
           return {...state,isCartLoading:action.payload}
        },
        updateSingleProductLoading:(state,action)=>{
            return {...state,isSingleProductLoading:action.payload.loading}
        },
        updateProductSearchLoading:(state,action)=>{
            return {...state,isProductSearchLoading:action.payload}
        }
    }
})

export default loadingSlice.reducer;
export const {updateAuthLoading,updateProductsLoading,updateCartLoading,updateSingleProductLoading,updateProductSearchLoading } = loadingSlice.actions;