import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const res = axios("/auth",{
      username,
      email,
      password,
    })
    console.log(res);
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={e=>setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={e=>setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>
      <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
}
