import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:[],
        error:{msg:""},
        success:{msg:""}
    },
    reducers:{
        getCartItems:(state,action)=>{
               const updatedState = {
                ...state,
                cartItems:action.payload
            }
            return updatedState
        },
        addCartItems:(state)=>{
           const updatedState = {
            ...state,
            error:{msg:null},
            success:{msg:"cart item had been added successfully"}
           }
           return updatedState
        },
        deleteCartItems:(state)=>{
            const updatedState = {
                ...state,
                error:{msg:null},
            success:{msg:"cart item had been deleted successfully"}
            }
            return updatedState
        }
    }
})

export const {getCartItems,addCartItems, deleteCartItems} = cartSlice.actions;
export default cartSlice.reducer;