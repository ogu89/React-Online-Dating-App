import React from "react";
import { useSelector } from "react-redux";

function UserDetail(){
    const count = useSelector((state) => state.count);

    return(
        <div>
            <h1>User Detail page for </h1>
        </div>
        
    );
}




export default UserDetail;