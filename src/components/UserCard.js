import React from "react";
import { useSelector } from "react-redux";

function UserCard(props) {
  const count = useSelector((state) => state.users.users);

  return (
    <>
      <div className="card m-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <img src={props.imgUrl} className="card-img-top" alt="..." />
          <h5 className="card-title pt-2">{props.name}</h5>
          <p className="card-text">Category: {props.gender}</p>
          <p className="card-text">Price: ${props.age}</p>
          <p className="card-text">Date:{props.country}</p>
          <p className="card-text">Date:{props.state}</p>
          <p className="card-text">Date:{props.city}</p>
          <p className="card-text">Date:{props.email}</p>
        </div>
      </div>
    </>
  );
}

export default UserCard;
