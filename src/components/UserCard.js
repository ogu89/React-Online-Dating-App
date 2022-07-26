import React from "react";
// import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Button,
  CardActions,
  Grid,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";

function UserCard(props) {
  // const count = useSelector((state) => state.users.users);
  const navigate = useNavigate();

  return (
    <>
      <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345, py: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={props.imgUrl}
              sx={{ width: 200, height: 200 }}
            />

            <Typography variant="h5">{props.name}</Typography>
            <Typography variant="p">
              <LocationOnIcon fontSize="small" />
              {props.country}
            </Typography>
            <Typography variant="p">Age: {props.age}</Typography>
            {/* </CardActionArea> */}
            <CardActions>
              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => {
                  navigate(`/user/${props.id}`, { state: props });
                }}
              >
                Detail
              </Button>
              <Button
                size="small"
                color="primary"
                variant="outlined"
                onClick={() => {
                  navigate(`/user/${props.id}/chat`, { state: props.id });
                }}
              >
                Message
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </>
  );
}

export default UserCard;
