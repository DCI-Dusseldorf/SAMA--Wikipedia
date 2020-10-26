import React from "react";
import {Link} from "react-router-dom";

function Sidenav() {

  return (
    <div className="sidenav">
      <section className="Logo">
        <img
          src="/wikipedia.jpeg"
          alt="Wikipedia Logo"
        />
        <h2>SaMapedia</h2>
      </section>
      <section>
        {/* <a href="#">Main page</a>
        <Link to = "/content">
        <a href="#" >
          Contents
        </a></Link>
        <a href="#">Random article</a>
        <a href="#">About Wikipedia</a>
        <a href="#">Contact us</a>
        <a href="#">Donate</a> */}
        <Link to = "/home">
        <li>Main page</li></Link>
        <Link to = "/content">
        <li>Contents</li></Link>
        <li>Random article</li>
        <li>About Wikipedia</li>
        <li>Contact us</li>
        <li>Donate</li>
        </section>
    </div>
  );
}

export default Sidenav;
