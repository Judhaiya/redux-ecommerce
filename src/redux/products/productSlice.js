import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice(
    {
        name:"products",
        initialState:{
            productsList:[],
            error:{msg:null},
            singleProductList:{}
        },
        reducers:{
            fetchProductsList:(state,action)=>{
              return {...state,productsList:action.payload}
            },
            fetchProductsFailed:(state,action)=>{
              return {...state,error:{msg:action.payload}}
            },
            fetchSingleProductDetails:(state,action)=>{
                  return {...state,singleProductList:action.payload}
            }
        }
    }
)

export const {fetchProductsList,fetchSingleProductDetails} = productSlice.actions;
export default productSlice.reducer;