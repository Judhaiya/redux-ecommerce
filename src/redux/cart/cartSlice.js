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

export const {getCartItems} = cartSlice.actions;
export default cartSlice.reducer;