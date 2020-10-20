// import React, { Component } from 'react';
// import $ from "jquery";
// import ReactSummernote from 'react-summernote';
// import 'react-summernote/dist/react-summernote.css';
// import 'react-summernote/lang/summernote-ru-RU';

// export default function Crud(){

//     const inputRef = React.useRef(null);
    
//     function search(){
//       return  ( 
//   <ReactSummernote
//     placeholder = 'Please add your content'
//     options = {{ 
//     tabsize: 2,
//     height: 120,
//     toolbar: [
//       ['style', ['style']],
//       ['font', ['bold', 'underline', 'clear']],
//       ['color', ['color']],
//       ['para', ['ul', 'ol', 'paragraph']],
//       ['table', ['table']],
//       ['insert', ['link', 'picture', 'video']],
//       ['view', ['fullscreen', 'codeview', 'help']]
//     ]
//   }} />
//   );
    
//     }
        
//     return (<>
//     <input  type="text" name="name" ref={inputRef}></input>
//     <button onClick={search}>Submit</button>
//     </>);
//     }

import React, { Component } from 'react';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-ru-RU'; // you can import any other locale
 


 
class RichTextEditor extends Component {
  onChange(content) {
    console.log('onChange', content);
  }
 
  render() {
    return (
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
        onChange={this.onChange}
      />
    );
  }
}
 
export default RichTextEditor;