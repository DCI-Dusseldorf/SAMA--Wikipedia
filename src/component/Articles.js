import React from "react";
import { Link } from "react-router-dom";

function Articles() {
  return (
    <div>
      <h1>Articles list</h1>
      <ul>
        <Link to="/1">
          <li>Article 1</li>
        </Link>
        <Link to="/2">
          <li>Article 2</li>
        </Link>
        <Link to="/3">
          <li>Article 3</li>
        </Link>
        <Link to="/4">
          <li>Article 4</li>
        </Link>
        <Link to="/5">
          <li>Article 5</li>
        </Link>
      </ul>
    </div>
  );
}

export default Articles;
