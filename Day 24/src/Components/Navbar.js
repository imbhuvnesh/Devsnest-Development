import { Link } from "react-router-dom";
import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>React Router</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/About">About</Link>
        <Link to="/Profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
