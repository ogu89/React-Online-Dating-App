import React from "react";
import { useSelector } from "react-redux";
function Chat(){
    const count = useSelector((state) => state.count);

    return(
        <div>
            <h1>Chat page</h1>
        </div>
    ); 
}

export default Chat;