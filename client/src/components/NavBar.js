import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
}
