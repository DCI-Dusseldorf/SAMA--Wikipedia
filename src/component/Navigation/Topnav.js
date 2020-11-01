import React, {useState} from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import {Link}            from "react-router-dom";

export default function Topnav(props) {
  const [searchValue, setSearchValue] = useState('');

  function toggleNav() {
    var topNavElement = document.getElementById("myTopnav");
    if (topNavElement.className === "topnav") {
      topNavElement.className += " responsive";
    } else {
      topNavElement.className = "topnav";
    }
  } 

  // function listTitles(){
  //   const e = document.querySelector('.listTitles');
  //   e.classList.add('titles');
  // }

  // function RenderTitles(){ 
  //   return <div className="listTitles">{ props.article.map((obj)=> <h6>{obj.title}</h6>)}</div>
  // }

  return ( <>
    
      <div className = "topnav" id="myTopnav" >
        
        <Link className="icon"  onClick={toggleNav}>
          <i className="fa fa-bars"></i>
        </Link>
        
        <Link to = "/">
          Home
        </Link>
        
        <Link to = "/addArticle">
          Add
        </Link>
        
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search SaMapedia..."
            aria-label="Search SaMapedia..."
            aria-describedby="basic-addon2"
            value       = {searchValue}
            onChange    = {e => setSearchValue(e.target.value.toUpperCase())}
          />
          <InputGroup.Append>
            <Button className ="btn-search" variant="light" onClick = {e =>
                  {
                    if(searchValue === ''){
                      alert('Please enter a title to search');
                    }
                    else{
                      props.displayContent(searchValue);
                      setSearchValue("");
                    }
                  }
                }><span className="fa fa-search"></span>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div> 
    </>
  );
}


