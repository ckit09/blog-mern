import "./sidebar.css";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        {/* <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://picsum.photos/id/237/200/300" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          eligendi molestiae officia, impedit at eius recusandae,
        </p> */}
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ui className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ui>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sideSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
