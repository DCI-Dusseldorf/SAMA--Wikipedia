import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";

function Edit({ articles, setArticles }) {
  const { id } = useParams();
  const index = articles.findIndex((article) => article.id === id);
  const article = articles[index];
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const onEditArticle = () => {
    article.title = titleRef.current.value;
    article.description = descRef.current.value;
    setArticles([...articles]);
  };

  return (
    <div>
      <h1>Add</h1>
      <input defaultValue={article.title} ref={titleRef} placeholder="Title" />
      <input
        defaultValue={article.description}
        ref={descRef}
        placeholder="description"
      />
      <Link to={`/${article.id}`}>
        <button onClick={onEditArticle}>update</button>
      </Link>
      <Link to={`/${article.id}`}>
        <button>cancel</button>
      </Link>
    </div>
  );
}

export default Edit;
