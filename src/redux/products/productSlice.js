import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice(
    {
        name:"products",
        initialState:{
            productsList:[],
            error:{msg:null},
            singleProductList:{},
            isLoading:false
        },
        reducers:{
          fetchProductsLoading:(state,action)=>{
             return {...state,isLoading:true}
          },
            fetchProductsList:(state,action)=>{
              return {...state,isLoading:false,productsList:action.payload}
            },
            fetchProductsFailed:(state,action)=>{
              return {...state,isLoading:false,error:{msg:action.payload}}
            },
            fetchSingleProductDetails:(state,action)=>{
                  return {...state,singleProductList:action.payload}
            }
        }
    }
)

export const {fetchProductsList,fetchSingleProductDetails} = productSlice.actions;
export default productSlice.reducer;