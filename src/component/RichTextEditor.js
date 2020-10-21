import Button from "react-bootstrap/Button";
import React from "react";
import ReactSummernote from "react-summernote";

const addImage = (fileList) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    ReactSummernote.insertImage(reader.result);
  };
  reader.readAsDataURL(fileList[0]);
};

export default function RichTextEditor(props) {
  function cancel() {}
  function save() {}
  return (
    <>
      <ReactSummernote
        className="editor"
        value={props.content}
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
        // onChange={setText}
      />
      <Button onClick={save}>Save</Button>
      <Button onClick={cancel}>Cancel</Button>
    </>
  );
}
