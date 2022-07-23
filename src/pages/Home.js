import React from "react";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/user");
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
        <Button variant="contained" size="large" onClick={handleClick}>Meet new people </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
