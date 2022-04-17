import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Home(){
    const count = useSelector((state) => state.count);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/user');
    } 

    return(
        <div>
            <h1>Home</h1>
            <Button onClick={handleClick}>Meet new people</Button>
        </div>
        
    );
}




export default Home;