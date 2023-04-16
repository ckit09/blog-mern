import React from "react";
import "./singlePost.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  // it works
  // function deletePost() {
  //   const username = JSON.parse(localStorage.getItem("user")).username
  //   axios.delete(`/posts/${post._id}`, {
  //     data: {username: username,}
  //   })
  // }

  async function handleDeletePost() {
    const username = JSON.parse(localStorage.getItem("user")).username
    const res = await axios.post(`/posts/delete/${post._id}`, {
      username: username
    })
    if(res.status === 200) {
      document.querySelector(".singlePost-modal-container").style.display = "flex"
      setTimeout(()=>{
        window.location = "/"
      }, 2000)
    }
  }

  return (
    <div className="singlePost">
      <div className="singlePost-modal-container">
        <div className="singlePost-modal">
          <h1>Post has been deleted <i class="fa-solid fa-check singlePost-tick"></i></h1>
        </div>
      </div>
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}
      </div>
      <h1 className="singlePostTitle">
        {post.title}
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
          <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDeletePost}></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author:
          <Link
            to={`/?user=${post.username}`}
            className="link"
            style={{ marginLeft: "5px", display: "inline" }}
          >
            <b>{post.username}</b>
          </Link>
        </span>
        <span className="singlePostDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="singlePostDesc">{post.desc}</p>
    </div>
  );
};

export default SinglePost;
