// Navbar.js
import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Dictionary App</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
      </nav>
    </div>
  );
};

export default Navbar;
