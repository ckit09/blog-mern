import "./sidebar.css";
import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats,setCats] = useState([]);

  useEffect(() => {
    const getCats = async()=>{
      const res= await axios.get("/categories")
      setCats(res.data)
    }
    getCats()
  }, []);
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
        <ul className="sidebarList">
          {
            cats?.length > 0 
            ? (
            cats.map((item, i)=>(
              <Link to={`/?cat=${item.name}`} className='link' key={item.name}>
                <li className="sidebarListItem">{item.name}</li>
              </Link>
            ))) : null
          }
        </ul>
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
