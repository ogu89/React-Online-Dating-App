import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import TransitionsModal from "./TransitionsModal";
import { useNavigate } from "react-router-dom";

function UserCard(props) {
  const count = useSelector((state) => state.users.users);
  const navigate = useNavigate();

  return (
    <>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" image={props.imgUrl} />
            <Typography variant="h5">{props.name}</Typography>
            <Typography variant="p">{props.country}</Typography>
            <Typography variant="p">{props.age}</Typography>
          </CardActionArea>
          <CardActions>
            {/* <TransitionsModal 
            key={props.id}
              id={props.id}
              name={props.name}
              gender={props.gender}
              age={props.age}
              country={props.country}
              state={props.state}
              city={props.city}
              email={props.email}
              imgUrl={props.picture}/> */}
            <Button
              size="small"
              color="primary"
              onClick={() => {navigate(`/user/${props.id}`, {state: props})}}
            >
              Detail
            </Button>
            <Button size="small" color="primary">
              Message
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default UserCard;
