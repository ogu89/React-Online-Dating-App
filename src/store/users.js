import { createSlice } from "@reduxjs/toolkit";


const usersSlice = createSlice({
    name: 'users',
    initialState: { 
        users: {
            1:{
                name: "dd",
                age: 11
            },
            2: {
                name: "da",
                age: 32
            }
        }
               
     },
    reducers:{
        setUsers(){
        },
        fetchUsers(context, payload){
            
        }
    }
})


export const usersActions = usersSlice.actions;

export default usersSlice;