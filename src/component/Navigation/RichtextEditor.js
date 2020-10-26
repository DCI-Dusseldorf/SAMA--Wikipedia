
import React, {useState, useRef} from "react";
import ReactSummernote   from "react-summernote";
import Button            from "react-bootstrap/Button";

const addImage = (fileList) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    ReactSummernote.insertImage(reader.result);
  };
  reader.readAsDataURL(fileList[0]);
};

export default function RichTextEditor(props) {
  const [content, setContent] = useState("");
  const titleref = useRef('');
 
  function getTextAreaValue(data) {
  setContent(data);
  }
  
  function cancel() {}
  function save() {
       let contentObj     = {};
       contentObj.id      = Math.floor(Date.now()/1000);
       contentObj.title   = titleref.current.value;
       contentObj.content =content;
       props.setArticle([contentObj, ...props.article]);
  }
  return (
    <>
     <form className="title">
        <input
          type="text"
          placeholder="Title.."
          name="search"
          ref={titleref}
          ></input>
        
      </form>
      <ReactSummernote
        className="editor"
        value={content}
        options={{
          lang: "ru-RU",
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ["style", ["style"]],
            ["font", ["bold", "underline", "clear"]],
            ["fontname", ["fontname"]],
            ["para", ["ul", "ol", "paragraph"]],
            ["table", ["table"]],
            ["insert", ["link", "picture", "video"]],
            ["view", ["fullscreen", "codeview"]],
          ],
        }}
        onImageUpload={addImage}
        onChange={getTextAreaValue}
      />
      <Button onClick={save}>Save</Button>
      <Button onClick={cancel}>Cancel</Button>
    </>
  );
}
