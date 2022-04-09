import { Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../components/UserCard";
import { usersActions } from "../store/users";

function UserList() {
  const user_items = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const getItem = () => {
    dispatch(usersActions.fetchUsers());
  };
  console.log(user_items);

  return (
    <div>
      <h1>User List</h1>
      <button onClick={getItem}>btn</button>
      {/* {user_items.map((item) => (
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
