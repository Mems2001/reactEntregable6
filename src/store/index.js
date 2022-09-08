import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products.slice";
import userSlice from "./slices/user.slice";
import cartSlice from './slices/cart.slice'

export default configureStore (
    {
        reducer: {
            productsSlice ,
            userSlice ,
            cartSlice
        }
    }
)