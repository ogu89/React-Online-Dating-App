import { createSlice } from "@reduxjs/toolkit";


const usersSlice = createSlice({
    name: 'users',
    initialState: { count: 0 },
    reducers:{
        
    }
})


export const usersActions = usersSlice.actions;

export default usersSlice;