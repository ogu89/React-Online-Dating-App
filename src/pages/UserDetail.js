import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserById } from "../store/users";

function UserDetail(){
    const users = useSelector((state) => state.users);
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state;
    //console.log(location.state.id);
    // const obj = getUserById(location.state.id);
    // console.log(obj)
    console.log(users);

    return(
        <div>
            <h1>User Detail page for </h1>
            <img src={location.state.imgUrl}/>
            <h1>{location.state.name}</h1>
            <h5>{location.state.age}</h5>
            <h5>{location.state.email}</h5>
            <h5>{location.state.name}</h5>
            <Button onClick={() =>{navigate(`/user/${location.state.id}/chat`, {state: user.id})}}>Message</Button>
        </div>
        
    );
}




export default UserDetail;