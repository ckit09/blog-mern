import { Link } from "react-router-dom";
import "./topBar.css";

const TopBar = ({ isLogin, setLogin }) => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              HOME{" "}
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to="/write"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              WRITE
            </Link>
          </li>
          {isLogin ? (
            <li
              className="topListItem"
              onClick={setLogin}
              style={{ alignSelf: "center" }}
            >
              LOGOUT
            </li>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li className="topListItem">LOGIN</li>
            </Link>
          )}
        </ul>
      </div>
      <div className="topRight">
        <span className="topGreeting">Hi User</span>
          <img
            className="topImg"
            src="https://images.pexels.com/photos/5129351/pexels-photo-5129351.jpeg"
            alt=""
          />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
