import { Box, Button, CircularProgress, Container, Grid } from "@mui/material";

import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../components/UserCard";
import { fetchUser } from "../store/users";

function UserList() {
  // const user_items = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const { users, loading, isSetProfile } = useSelector((state) => state.users);

  useEffect(() => {
    if (!isSetProfile) dispatch(fetchUser());
  }, []);


  if (loading) {
    return(<Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>); 
  }

  return (
    <div>
      <Container>
        <Grid container spacing={5}>
          {users.map((item) => (
            <UserCard
              key={item.id}
              id={item.id}
              name={item.name}
              gender={item.gender}
              age={item.age}
              country={item.country}
              state={item.state}
              city={item.city}
              email={item.email}
              imgUrl={item.picture.large}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default UserList;
