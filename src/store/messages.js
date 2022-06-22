import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [
      {
        id: "000",
        chatLog: ["ddsd", "kdfs"]
      },
      {
        id: "111",
        chatLog: ["dks", "kdljsdf"]
      },
      {
        id:"222",
        chatLog: ["dfd", "lk"]
      }
    ],
  },
  reducers: {
    setMessages(state, payload) {
        
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedOut = false;
    },
  },
});

export const messagesActions = messagesSlice.actions;

export default messagesSlice.reducer;
