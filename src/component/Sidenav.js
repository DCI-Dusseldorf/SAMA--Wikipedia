import React from "react";

function Sidenav() {
  return (
    <div className="sidenav">
      <section className="Logo">
        <img src="./wikipedia.jpeg" alt="Wikipedia Logo" />
        <h2>SaMapedia</h2>
      </section>
      <section>
        <a href="#">Main page</a>
        <a href="#">Contents</a>
        <a href="#">Random article</a>
        <a href="#">About Wikipedia</a>
        <a href="#">Contact us</a>
        <a href="#">Donate</a>
      </section>
    </div>
  );
}

export default Sidenav;
