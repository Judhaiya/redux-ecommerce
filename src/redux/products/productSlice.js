import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice(
    {
        name:"products",
        initialState:{
            productsList:[],
            error:{msg:null}
        },
        reducers:{
            fetchProductsList:(state,action)=>{
              return {...state,productsList:action.payload}
            },
            fetchProductsFailed:(state,action)=>{
              return {...state,error:{msg:action.payload}}
            }
        }
    }
)

export const {fetchProductsList} = productSlice.actions;
export default productSlice.reducer;