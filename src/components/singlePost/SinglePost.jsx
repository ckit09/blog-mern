import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://picsum.photos/1200/800"
          alt=""
          className="singlePostImg"
        />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet
        <div className="singlePostEdit">
          <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
          <i class="singlePostIcon fa-regular fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: <b>NameOfAuthor</b></span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta adipisci exercitationem culpa. Excepturi harum perspiciatis quis sed earum ab vel! Iure, ipsam hic totam ad laudantium reprehenderit natus ducimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta adipisci exercitationem culpa. Excepturi harum perspiciatis quis sed earum ab vel! Iure, ipsam hic totam ad laudantium reprehenderit natus ducimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta adipisci exercitationem culpa. Excepturi harum perspiciatis quis sed earum ab vel! Iure, ipsam hic totam ad laudantium reprehenderit natus ducimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta adipisci exercitationem culpa. Excepturi harum perspiciatis quis sed earum ab vel! Iure, ipsam hic totam ad laudantium reprehenderit natus ducimus.
      </p>
    </div>
  );
};

export default SinglePost;
