import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

function UserCard(props) {
  const count = useSelector((state) => state.users.users);

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" image={props.imgUrl} />
          <Typography variant="h5">{props.name}</Typography>
          <Typography variant="p">{props.country}</Typography>
          <Typography variant="p">{props.age}</Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default UserCard;
