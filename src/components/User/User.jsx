import React, { Suspense, useState } from "react";
import { Link } from "react-router";
import UserDetails2 from "../UserDetails/UserDetails2";

const User = ({ user }) => {
  const [info, setInfo] = useState(false);
  const { name, email, phone, id } = user;
  const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json())
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
      {
        info && <Suspense fallback={<span>Loading.....</span>}>
            <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      }
    </div>
  );
};

export default User;
