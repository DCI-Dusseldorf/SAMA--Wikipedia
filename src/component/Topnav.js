import React from "react";
import Search from "./Search";

export default function Topnav() {
  return (
    <>
      <div className="topnav">
        <a className="active" href="#">
          Article
        </a>
        <a href="#">Save</a>
        <a href="#">Edit</a>
        <Search />
      </div>
    </>
  );
}
