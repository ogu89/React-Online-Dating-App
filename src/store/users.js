import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  // return fetch("https://randomuser.me/api/?results=100").then((res) =>
  //   res.json()
  // ).then((data) => 
  console.log("l;dfkjs")
  const response = await axios.get("https://randomuser.me/api/?results=100");
  return response.data
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    status: null,
  },
  reducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.list = [action.payload];
      state.status = "success";
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
