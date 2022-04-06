import React from 'react';
import { useSelector } from "react-redux";

function MessageList(){
    const count = useSelector((state) => state.count);


    return(
        <div>
            <h1>Message list page</h1>
            <p> {count} </p>
        </div>
    );
}


export default MessageList;