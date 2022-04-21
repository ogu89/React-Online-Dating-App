import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const response = await axios.get("https://randomuser.me/api/?results=50");
  let users = [];
  for (let user of response.data.results) {
    users.push({
      id: user.login.uuid,
      name: user.name.first + " " + user.name.last,
      gender: user.gender,
      age: user.dob.age,
      country: user.location.country,
      state: user.location.state,
      city: user.location.city,
      email: user.email,
      picture: user.picture,
    });
  }

  return users;
});

export const getUserById = (id) => {
  // return state.users.find(e => e.id == id);
  console.log(id);
  console.log(usersSlice.reducer.state);
  // console.log(usersSlice.users)
  // console.log(getState().users);
  return 1;
}

// export const getUserById = (id) => {
//   return async (dispatch, getState) => {
//        const currentState= getState().users;
//       console.log(currentState) 
//   };
// };

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    // status: null,
    loading: false,
    isSetProfile: false,
    count: 0,
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      // state.status = "loading";
      state.loading = true;
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      // state.users = payload.results;
      state.users = payload;
      state.count += 1;
      state.loading = false;
      state.isSetProfile = true;
      // state.status = "success";
    },
    [fetchUser.rejected]: (state, action) => {
      // state.status = "failed";
      state.loading = false;
    },
  },
});

// export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
