import { createSlice } from "@reduxjs/toolkit";


const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        users : {
            1: [],
            2: []
        },
    },
    reducers:{
        setMessages(state, payload){

        },
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