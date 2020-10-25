import React from "react";
import {Link} from "react-router-dom";
import Searchbar from './Searchbar'

export default function Topnav() {
  return (
    <>
      <div className="topnav">
        <Searchbar/>
        <Link to ="/home">
        <li className="active">
          Home
        </li></Link>
        <Link to="/richtextEditor">
        <li>New</li></Link>
        <Link to="/#">
        <li>Search</li></Link>
      </div>
    </>
  );
}
