import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactSummernote from "react-summernote";

function Edit({ articles, setArticles }) {
  const { id } = useParams();
  const index = articles.findIndex((article) => article.id === id);
  const article = articles[index];
  const titleRef = useRef(null);
  const [desc, setDesc] = useState(article.description);
  const addImage = ([file]) => {
    const reader = new FileReader();
    reader.onloadend = () => ReactSummernote.insertImage(reader.result);
    reader.readAsDataURL(file);
  };

  const onDescChange = (data) => {
    setDesc(data);
  };

  const onEditArticle = () => {
    article.title = titleRef.current.value;
    article.description = desc;
    setArticles([...articles]);
  };

  return (
    <div>
      <h1>Add</h1>
      <input defaultValue={article.title} ref={titleRef} placeholder="Title" />
      <ReactSummernote
        onInit={() => {
          const editArea = document.querySelector(".note-editable");
          editArea.innerHTML = Object.values({ desc });
        }}
        options={{
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ["style", ["style"]],
            ["font", ["bold", "underline", "clear", "color"]],
            ["fontname", ["fontname"]],
            ["para", ["ul", "ol", "paragraph"]],
            ["table", ["table"]],
            ["insert", ["link", "picture", "video"]],
            ["view", ["fullscreen", "codeview"]],
          ],
        }}
        onChange={onDescChange}
        onImageUpload={addImage}
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
