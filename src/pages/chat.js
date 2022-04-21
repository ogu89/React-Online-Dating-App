import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Chat(){
    const count = useSelector((state) => state.count);
    const location = useLocation();

    return(
        <div>
           <h3>kl;sjdflksdjf</h3>
           <h1>dl;fjsdf</h1>
           <div>{location.state}</div>
        </div>
    ); 
}

export default Chat;