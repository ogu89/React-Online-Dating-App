import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessage = createAsyncThunk("messages/fetchMessage", async (payload) => {
  const text = payload[0]
  const response = await axios.get(`https://api-monkedev.herokuapp.com/fun/chat?msg=${text}`);

  const timeStamp = new Date();
  let msgObj = {
    isMe: false,
    text: response.data.response,
    timeStamp: timeStamp,
  };

  return [msgObj, payload[1]];
});

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: {},
    loading: false,
  },
  reducers: {
    setMessages(state, action) {
      // const index = state.messages.findIndex((x) => x.id === action.payload[1]);
      // if (index !== -1) {
      //   state.messages[index].chatLog.push(action.payload[0]);
      // } else {
      //   state.messages.push({
      //     id: action.payload[1],
      //     chatLog: [action.payload[0]],
      //   });
      // }
      if(state.messages[action.payload[1]] !== undefined){
        state.messages[action.payload[1]].push(action.payload[0]);
      }else{
        state.messages[action.payload[1]] = [action.payload[0]];
      }
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedOut = false;
    },
  },
  extraReducers: {
    [fetchMessage.pending]: (state, action) => {   
      state.loading = true;
    },
    [fetchMessage.fulfilled]: (state, { payload }) => {
      state.messages[payload[1]].push(payload[0]);
      state.loading = false;
    },
    [fetchMessage.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { setMessages } = messagesSlice.actions;

export default messagesSlice.reducer;


