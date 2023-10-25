import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        getCartItems:(_,action)=>{
            return action.payload
        }
     }
})
/**
 * getCartItems sets state to action.payload,payload will be items in the cart
 */
export const {getCartItems} = cartSlice.actions;
export default cartSlice.reducer;