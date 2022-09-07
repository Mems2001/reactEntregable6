import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userIsLogued' ,
    initialState: false ,
    reducers: {
        setLogin: state => state = true
    }
})

export default userSlice.reducer

export const { setLogin } = userSlice.actions
