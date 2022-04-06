import React from "react";
import { useSelector } from "react-redux";


function UserList(){
    const count = useSelector((state) => state.count);

    return(
        <div>
            <h1>User List</h1>
        </div>
    );
}


export default UserList;