import React  from "react";
import {Link} from "react-router-dom";

export default function Sidenav(props) {

  return(
    <div className = "sidenav">
      <section className = "Logo">
        <img
          src = "/wikipedia.jpeg"
          alt = "Wikipedia Logo"
        />
        <h2>SaMapedia</h2>
      </section>

      <section>
        <Link to = "/">
          <li>Main page</li>
        </Link>
        
        <Link to = "/content">
          <li>Contents</li>
        </Link>
        
        <Link to = "/randomArticle">
          <li onClick = {e =>{
              props.randomDisplay(Math.floor(Math.random()*(props.article.length-1)));
              }}>Random article</li>
        </Link>
        
        <Link to = "/about">
          <li>About Wikipedia</li>
        </Link>
        
        <li>Contact us</li>
        <li>Donate</li>
      </section>
    </div>
  );
}
