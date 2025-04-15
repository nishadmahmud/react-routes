import React, { Suspense, useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import UserDetails2 from "../UserDetails/UserDetails2";

const User = ({ user }) => {
  const [info, setInfo] = useState(false);
  const { name, email, phone, id } = user;
  const [home, setHome] = useState(false);
  const location = useLocation();
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

  if(home){
    return <Navigate to='/'></Navigate>
  }
  return (
    <div className="border border-blue-300 bg-slate-300 p-2 rounded-lg mb-1">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>
        <small>Phone: {phone}</small>
      </p>
      <Link to={`/users/${id}`} className="btn">
        Show Details
      </Link>
      <button onClick={() => setInfo(!info)} className="btn">
        {info ? "Hide Info" : "Show Info"}
      </button>
      {info && (
        <Suspense fallback={<span>Loading.....</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      )}
      <button onClick={() => setHome(true)}>Visit Home</button>
    </div>
  );
};

export default User;
