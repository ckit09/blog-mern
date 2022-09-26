import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";

const Setting = () => {
  return (
    <div className="setting">
            <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingTitleUpdate">Update Your Account</span>
          <span className="settingTitleDelete">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://images.pexels.com/photos/5129351/pexels-photo-5129351.jpeg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="username" name="name" />
          <label>Email</label>
          <input type="email" placeholder="email@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
