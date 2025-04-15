import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;
    const nevigate = useNavigate();
  const handleNavigate= () => {
    nevigate(`/posts/${id}`);
  };
  return (
    <div className="border border-blue-300 bg-slate-300 p-2 rounded-lg mb-1">
      <h3 className="font-bold">{title}</h3>
      <Link to={`/posts/${id}`} className="btn">
        Show Detail
      </Link>
      <button className="btn" onClick={handleNavigate}>Details: {id}</button>
    </div>
  );
};

export default Post;
