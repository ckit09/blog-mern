import React from "react";
import "./posts.css";
import Post from "../post/Post";

const Posts = ({posts}) => {
  return (
    <div className="posts">
      {
        posts?.length > 0 
        ? (
        posts
        .filter((post) => {
          return post.deleted !== true
        })
        .map((post) => 
        <Post post={post} key={post._id} />)
        ) : null
      }
    </div>
  );
};

export default Posts;
