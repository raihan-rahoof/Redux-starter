 import { createSlice } from "@reduxjs/toolkit";

const initState = {
    cartList:[],
    cartCount:0,
}


 const cartSlice = createSlice({
    name:'cart',
    initialState:initState,
    reducers:{
        addTocart:(state) =>{
            state.cartCount=1
        },
        increment:(state)=>{
            state.cartCount +=1
        },
        decrement:(state) =>{
            state.cartCount -=1
        }
    }

 })


 export const {increment,decrement,addTocart } = cartSlice.actions

 export default createSlice.reducers;