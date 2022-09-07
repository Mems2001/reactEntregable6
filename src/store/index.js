import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products.slice";
import userSlice from "./slices/user.slice";

export default configureStore (
    {
        reducer: {
            productsSlice ,
            userSlice
        }
    }
)