import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import ReactSummernote from "react-summernote";

function Add({ articles, setArticles }) {
  const titleRef = useRef(null);
  const [desc, setDesc] = useState();

  const addImage = ([file]) => {
    const reader = new FileReader();
    reader.onloadend = () => ReactSummernote.insertImage(reader.result);
    reader.readAsDataURL(file);
  };

  const onDescChange = (data) => {
    setDesc(data);
  };

  const onAddArticle = () => {
    const obj = {};
    obj.id = uuid();
    obj.title = titleRef.current.value;
    obj.description = desc;
    setArticles([...articles, obj]);
  };

  return (
    <div>
      <h1>Add</h1>
      <input ref={titleRef} placeholder="Title" />
      <ReactSummernote
        value={desc}
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
      />
    </div>
  );
}

export default Add;
