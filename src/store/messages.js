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
      },
      {
        id:"96ecd300-b438-45d6-8ecd-bd1da8e7c85",
        chatLog: ["dsf", "dsf", "fds"]
      }
    ],
  },
  reducers: {
    setMessages(state, action) {
        // console.log(action.payload[0])
        // if(state.messages.find(x => x.chatLog === action.payload[1])){
        //     console.log("yes")
        // }
        // else console.log("no")
        const index = state.messages.findIndex(x => x.id === action.payload[1])
        if(index !== -1){
          state.messages[index].chatLog.push(action.payload[0])
        }
        else{
          state.messages.push({id: action.payload[1], chatLog: [action.payload[0]]})

        }
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedOut = false;
    },
  },
});

export const {setMessages} = messagesSlice.actions;

export default messagesSlice.reducer;
