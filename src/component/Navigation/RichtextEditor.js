
import React, {useState, useRef} from "react";
import ReactSummernote   from "react-summernote";
import Button            from "react-bootstrap/Button";
import { useParams, Link } from "react-router-dom";
import { getArticleById } from './Content';


const addImage = (fileList) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    ReactSummernote.insertImage(reader.result);
  };
  reader.readAsDataURL(fileList[0]);
};

export default function RichTextEditor(props) {
  const params  = useParams();
  const data = getArticleById(params.id,props.article);
  const [content, setContent] = useState(data.content);
  const titleref = useRef(null);
 
  function getTextAreaValue(data) {
  setContent(data);
  }

  function save() {
    let contentObj     = {};
    if(params.id != null){ //Edit functionality
      console.log(props.article);
      const index = props.article.findIndex((obj) => obj.id === Number(params.id));
      console.log(index);
      contentObj = props.article[index];
      contentObj.id      = Number(params.id);
      contentObj.title   = titleref.current.value.toUpperCase();
      contentObj.content = content;
      props.article[index]=contentObj;
      props.setArticle([...props.article]);
    }else{ //New functionality
      contentObj.id      = Math.floor(Date.now()/1000);
      contentObj.title   = titleref.current.value.toUpperCase();
      contentObj.content = content;
         if(contentObj.title == null){
           alert('Please enter the Title');
         }else{
           if(props.article.every((obj)=>obj.title !== contentObj.title)){
            props.setArticle([contentObj, ...props.article]);
           }else{
            alert('Data available already');
           }
         }
    }
    
  }
  return (
    <>
     <form className="title"> 
        <input
          type="text"
          placeholder="Title.."
          name="search"
          defaultValue = {data.title}
          ref={titleref}
          ></input>
      </form>
      <ReactSummernote
        onInit={() => {
          const editArea = document.querySelector('.note-editable');
          editArea.innerHTML = Object.values({ content});
        }}
        className="editor"
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
      /><Link to = "/content">
      <Button onClick={e =>{if(titleref.current.value === ""){
        alert('Please enter title');
      }else{
        save(); 
      }} }>Save</Button></Link>
      <Link to={`/content/display/${params.id}`}><Button>Cancel</Button></Link>
    </>
  );
}