import { Button } from "@mui/material";

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



  console.log(users);
  console.log(typeof users);

  if (loading) {
    return <h2>loading.....</h2>;
  }

  return (
    <div>
      <h1>User List</h1>
      {/* {users.map((item) => (
        <h2>{item.gender} </h2>
        
      ))} */}


      {users.map((item) => (
        <UserCard
          key={item.id}
          name={item.name}
          gender={item.gender}
          age={item.age}
          country={item.country}
          state={item.state}
          city={item.city}
          email={item.email}
          imgUrl={item.picture.medium}
        />
      ))}
    </div>
  );
}

export default UserList;
