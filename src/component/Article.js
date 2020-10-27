import React from "react";
import { Link, useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

function Article({ articles, setArticles }) {
  const { id } = useParams();
  const index = articles.findIndex((article) => article.id === id);
  const article = articles[index];

  const onDelete = () => {
    articles.splice(index, 1);
    setArticles([...articles]);
  };

  return (
    <div>
      <h1>{article.title}</h1>
      <h2>{ReactHtmlParser(article.description)}</h2>
      <Link to={`/edit/${article.id}`}>
        <button>edit</button>
      </Link>
      <Link to="/Articles">
        <button onClick={onDelete}>delete</button>
      </Link>
    </div>
  );
}

export default Article;
