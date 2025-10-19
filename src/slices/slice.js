import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart : [],
    total : 0,
    quantity : 0,
}

const cartSlice = createSlice({

    name : 'cart',
    initialState,

    reducers : {
        addToCart : (state, action) =>{

            const item = action.payload
            const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
            if(existingItem){
                existingItem.quantity += 1
            }else{
                state.cart.push({...item, quantity : 1})
            }
            state.total += item.price
            state.quantity += 1
            
            console.log("cart>>>>>>>>>>>>>>>>>>>>>.", state)
        },   
        decreaseQuantity : (state,action) =>{
            const item = action.payload
            const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
            if(existingItem && existingItem.quantity > 1){
                existingItem.quantity -= 1
                state.total -= existingItem.price
                state.quantity -= 1
            } else if(existingItem && existingItem.quantity === 1){
                // Remove item if quantity becomes 0
                state.total -= existingItem.price
                state.quantity -= 1
                state.cart = state.cart.filter((cartItem) => cartItem.id !== item.id)
            }

        },
        removeItem : (state,action) =>{
            const item = action.payload
            const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
            if(existingItem){
                state.total -= existingItem.price * existingItem.quantity
                state.quantity -= existingItem.quantity
                state.cart = state.cart.filter((cartItem) => cartItem.id !== item.id)
            }

        },
        clearCart : (state) =>{
            state.cart = []
            state.total = 0
            state.quantity = 0
        }
    },
})

export const { addToCart, decreaseQuantity, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer