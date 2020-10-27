import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

function Add({ articles, setArticles }) {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const onAddArticle = () => {
    const obj = {};
    obj.id = uuid();
    obj.title = titleRef.current.value;
    obj.description = descRef.current.value;
    setArticles([...articles, obj]);
  };

  return (
    <div>
      <h1>Add</h1>
      <input ref={titleRef} placeholder="Title" />
      <input ref={descRef} placeholder="description" />
      <Link to="/Articles">
        <button onClick={onAddArticle}>submit</button>
      </Link>
      <Link to="/">
        <button>cancel</button>
      </Link>
    </div>
  );
}

export default Add;
