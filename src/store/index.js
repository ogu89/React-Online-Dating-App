import { configureStore } from "@reduxjs/toolkit";
import messagesSlice from "./messages";
import usersSlice from "./users";

const store = configureStore({
    reducer: {
        users: usersSlice,
        messages: messagesSlice.reducer
    }
});  

export default store;