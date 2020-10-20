
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react';

 import ReactSummernote from 'react-summernote';
   

function RichTextEditor (){
  const [text, setText] = React.useState('');
  function cancel(){
    window.location = ''
  }
  function save (){

  console.log(text);
}
return (
  <>
      <ReactSummernote
        value="Default value"
        options={{
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
        onchange= {setText}
         />
        <Button onClick={save}>save</Button>
   );
      }

    export default RichTextEditor;
       