import React from "react";
import "./posts.css";
import Post from "../post/Post";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div className="posts">
      <Link to="/post/:postId" style={{ textDecoration: "none", color: "inherit" }}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Link>
    </div>
  );
};

export default Posts;
