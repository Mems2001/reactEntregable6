import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: 'cartProducts' ,
    initialState: null ,
    reducers: {
        setCart: (state,action) => action.payload
    }
})

export default cartSlice.reducer

export const {setCart} = cartSlice.actions