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

  // const getItem = () => {
  //   dispatch(fetchUser());
  // }

  console.log(users);
  console.log(typeof users);

  if (loading) {
    return <h2>loading.....</h2>;
  }

  return (
    <div>
      <h1>User List</h1>
      <button>btn</button>
      {users.map((item) => (
        <h2>{item.gender}</h2>
      ))}

      {/* {users.map((user) => (
        <h1>{user.id}</h1>
      ))} */}
      {/* {items.map((item) => (
        <UserCard
          key={item.id}
          name={item.name}
          category={item.category}
          price={item.price}
          date={item.date}
          imgUrl={item.imgUrl}
        />
      ))} */}
    </div>
  );
}

export default UserList;
