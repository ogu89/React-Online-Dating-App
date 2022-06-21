import { createSlice } from "@reduxjs/toolkit";


const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        messages : {
            "000": []
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

export default messagesSlice.reducer;