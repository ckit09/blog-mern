import "./post.css";
import React from "react";

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src="https://picsum.photos/960" alt="" srcset="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit
        </span>
        <hr></hr>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eos rerum aspernatur natus eveniet animi illum vel enim laborum nesciunt temporibus sequi, velit aliquid! Hic consequuntur aliquam exercitationem illo suscipit.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eos rerum aspernatur natus eveniet animi illum vel enim laborum nesciunt temporibus sequi, velit aliquid! Hic consequuntur aliquam exercitationem illo suscipit.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eos rerum aspernatur natus eveniet animi illum vel enim laborum nesciunt temporibus sequi, velit aliquid! Hic consequuntur aliquam exercitationem illo suscipit.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eos rerum aspernatur natus eveniet animi illum vel enim laborum nesciunt temporibus sequi, velit aliquid! Hic consequuntur aliquam exercitationem illo suscipit.
      </p>
    </div>
  );
};

export default Post;
