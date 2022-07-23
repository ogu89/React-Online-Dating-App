import { Box,CircularProgress, Container, Grid } from "@mui/material";

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
    return(<Box  display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh">
    <CircularProgress size={100}/>
  </Box>); 
  }

  return (
    <div>
      <Container >
        <Grid container spacing={4} sx={{py: 4}}>
          {Object.keys(users).map((item) => (
            <UserCard
              key={item}
              id={item}
              name={users[item].name}
              gender={users[item].gender}
              age={users[item].age}
              country={users[item].country}
              state={users[item].state}
              city={users[item].city}
              email={users[item].email}
              imgUrl={users[item].picture.large}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default UserList;
