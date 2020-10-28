import React                              from 'react';
import {ListGroup, Button, ButtonGroup}   from "react-bootstrap";
import {Link, Route, Switch, useParams}   from 'react-router-dom';

// Get matched content by id from Local storage
export function getArticleById(id, article){    

    let data ='';

    article.forEach((obj)=>{
      if(obj.id == id){
        data = obj;
      }
    })
    
    if(data === ''){
      data = "Content not available";
    }

    return data;
}

//Display component
const Display = (props) =>{
  
  const {id}      = useParams();
  const {content} = getArticleById(id,props.article);

  function deleteContent(){
    const index = props.article.findIndex((obj) => obj.id === Number(id));
    props.article.splice(index, 1);
    props.setArticle([...props.article]);
  }

  return <>
    <ButtonGroup aria-label = "Basic example">
      <Link to = "/content">
        <Button color = "primary">Back
        </Button>
      </Link>
      
      <Link to = {`/richtextEditor/${id}`}>
        <Button color = "primary">Edit
        </Button>
      </Link>
      
      <Link to = "/content">
        <Button color   = "primary" 
                onClick = {deleteContent}>Delete
        </Button>
      </Link>
    </ButtonGroup>
    
    <div dangerouslySetInnerHTML = {{ __html: content }} />
  </>
}

// Get title(s) from Local storage
const getTitle = ({id,title,content},index) =>  {

  return  <ListGroup variant="flush">
            <ListGroup.Item className = "listgroupItem"
                            as        = "li" 
                            key       = {index}>
              <a  href = {'/content/display/'+id}
                  key  = {index}>{title}
              </a> 
              <br/>
            </ListGroup.Item>
          </ListGroup>
}

//Content Component
export default function Content(props) {

    const data =  props.article; 

    return <div >
      <Switch>
        <Route  path = "/content" 
                exact>{data.map(getTitle)}
        </Route>
        <Route path = "/content/display/:id">
          <Display article    = {props.article} 
                  setArticle  = {props.setArticle} 
                  data        = {data}>
          </Display>
        </Route>
      </Switch>
    </div>;
}




