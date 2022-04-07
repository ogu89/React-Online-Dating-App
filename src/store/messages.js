import { createSlice } from "@reduxjs/toolkit";


const messagesSlice = createSlice({
    name: 'messages',
    initialState: { isLoggedIn: false },
    reducers:{
        login(state){
            state.isLoggedIn = true; 
        },
        logout(state) {
            state.isLoggedOut = false
        }
    }
})


export const messagesActions = messagesSlice.actions;

export default messagesSlice;