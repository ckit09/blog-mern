import React from "react";
import "./posts.css";
import Post from "../post/Post";

const Posts = ({posts}) => {
  return (
    <div className="posts">
      {posts?.map((post) =>
        post ? (<Post post={post} key={post._id} />) : null
      )}
    </div>
  );
};

export default Posts;
