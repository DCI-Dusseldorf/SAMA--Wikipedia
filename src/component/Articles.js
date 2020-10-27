import React from "react";
import { Link } from "react-router-dom";

function Articles({ articles }) {
  return (
    <div>
      <h1>Articles list</h1>
      <ul>
        {articles.map((article) => {
          return (
            <Link to={`/${article.id}`}>
              <li>{article.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Articles;
