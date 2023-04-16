import "./write.css";
import { useRef } from "react";
import axios from 'axios';

const Write = () => {
  const titleRef = useRef()
  const articleRef = useRef()

  const handlePublish = async (e) => {
    e.preventDefault();
    try {
      const username = JSON.parse(localStorage.getItem("user")).username
      const res = await axios.post("/posts", {
        username: username,
        title: titleRef.current.value,
        desc: articleRef.current.value,
      })
      if (res.status === 200){
        clearText()
        document.querySelector(".write-modal-container").style.display = "flex"
        setTimeout(()=>{
          document.querySelector(".write-modal-container").style.display = "none"
        }, 2000)
      }
    } catch (error) {
      console.error(error)
    }
  }

  function clearText() {
    titleRef.current.value = ""
    articleRef.current.value = "" 
  }

  return (
    <div className="write">
      <div className="write-modal-container">
        <div className="write-modal">
          <h1>Post has been published <i class="fa-solid fa-check write-tick"></i></h1>
        </div>
      </div>
      <img className="writeImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            ref={titleRef}
          />
          <span>
            <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-plus"></i>
            </label>
          </span>
        </div>
        <div className="writeFormGroup2">
          <textarea
            placeholder="write your post..."
            type="text"
            className="writeInput writeText"
            ref={articleRef}
          ></textarea>
          <button className="writeSubmit" onClick={handlePublish}>Publish</button>
        </div>
      </form>
    </div>
  );
};

export default Write;
