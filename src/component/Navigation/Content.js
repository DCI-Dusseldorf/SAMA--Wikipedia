import React from 'react';

const getContent = (content,index) =>{
     console.log('hello'+ content);
return  <div key={index}>{content}</div>
}

const getTitle = ({id,title,content},index) =>  {
 return  <><a href ={id} key={index} onClick={e =>{ e.preventDefault();getContent(content,index)} }>{title}</a> <br /></>
}
   
    

function Content(props) {
    const data =  props.article; 
  
    return <div>{data.map(getTitle)}</div>;
   
}

export default Content;







