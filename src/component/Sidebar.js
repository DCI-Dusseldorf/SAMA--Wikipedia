import React from "react";
import { Link } from "react-router-dom";
import Logo from "../wikipedia.jpeg";

function Sidebar() {
  return (
    <div className="sidenav">
      <div className="Logo">
        <img src={Logo} alt="Wikipedia Logo" />
        <h2>SaMapedia</h2>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/donate">Donate</Link>
      </div>
    </div>
  );
}

export default Sidebar;
