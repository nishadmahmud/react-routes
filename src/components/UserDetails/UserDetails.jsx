import React from "react";
import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;

  // const params = useParams();
  // const {userId} = useParams();
  return (
    <div>
      <h3>User Details Here</h3>
      <h5>Name: {name}</h5>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;
