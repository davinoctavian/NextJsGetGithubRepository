import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
const user = localStorage.getItem("username")

// create a slice 
export const userslice= createSlice({
    name:"username",
    initialState:{
        username:user ?? ''
    },
    reducers:{
        addUsername: (state, action) => {
            state.username = action.payload
        },
    }
})
// config the store 
const store= configureStore({
   reducer: {
      username: userslice.reducer
   }
})


export const { addUsername } = userslice.actions
export const selectUser = (state) => state.username

export default store