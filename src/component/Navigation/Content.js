import React   from 'react';
import {ListGroup}  from "react-bootstrap";
import { Route,Switch, useParams} from 'react-router-dom';


function getArticleById(id,article){    
    let data ='';
    article.forEach((obj)=>{
        if(obj.id == id){
          data = obj.content;
         }
       })
       if(data == ''){
         data = "Content not available";
       }
       return data;
}

const Display = (props) =>{
    const {id} = useParams();
    const content = getArticleById(id,props.article);
    return <>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        </>
   }

const getTitle = ({id,title,content},index) =>  {
 return <>
          <a href ={'/content/display/'+id}key={index}>{title}</a> <br />
    </>
    // return <>
    //         <ListGroup as="ul">
    //         <ListGroup.Item as="li" key={index} 
    //         onClick={e =>{ 
    //                      e.preventDefault();
    //                     getContent(content,index);
    //                     }
    //         }>
    //         {title}
    //         </ListGroup.Item>
    //         </ListGroup>
    //        </>
}
       

function Content(props) {
    const data =  props.article; 
  
    return <div >
             <Switch>
                 <Route path="/content" exact>{data.map(getTitle)}</Route>
                 <Route path ="/content/display/:id"><Display article ={data}></Display></Route>
             </Switch>
           </div>;
   
}

export default Content;







