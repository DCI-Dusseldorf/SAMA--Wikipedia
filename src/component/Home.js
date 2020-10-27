import React from "react";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl } from "react-bootstrap";

function Home() {
  return (
    <>
      <div className="home">
        <h1>SaMaPedia</h1>
        <h3>The Free Encyclopedia</h3>
        <img
          className="homeImage"
          src="../wikipedia.jpeg"
          alt="Wikipedia Logo"
        />{" "}
      </div>
    </>
  );
}

export default Home;
