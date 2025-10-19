import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/slice'

export const store = configureStore({

    reducer : {
        Cart : cartReducer,
        
    }

}) 
