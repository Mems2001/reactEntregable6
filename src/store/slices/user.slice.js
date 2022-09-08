import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userIsLogued' ,
    initialState: false ,
    reducers: {
        setLogin: state => state = true , 
        setLogout: state => state = false
    }
})

export default userSlice.reducer

export const { setLogin , setLogout } = userSlice.actions
