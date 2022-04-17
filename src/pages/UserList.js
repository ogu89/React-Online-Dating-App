import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../components/UserCard";
import { fetchUser } from "../store/users";

function UserList() {
  // const user_items = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const {items, loading} = useSelector((state) => state.users)

  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, [dispatch])

  const getItem = () => {
    dispatch(fetchUser());
  }




  return (
    <div> 
      <h1>User List</h1>
      <button onClick={getItem()}>btn</button>
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
