import Button          from 'react-bootstrap/Button';
import React           from 'react';
import ReactSummernote from 'react-summernote';

 
export default function RichTextEditor() {
 const[text, setText] =React.useState("");
 function cancel(){

 }
 function save(){
   console.log(text);
 }
    return (
      <>
      <ReactSummernote
        value="Default value"
        options={{
          lang: 'ru-RU',
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview']]
          ]
        }}
        onChange={setText}
      />
  <Button onClick={save}></Button>
  <Button onClick ={cancel}></Button>
  </>
     );
}






