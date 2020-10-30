import React, {useState} from "react";
import {Link}            from "react-router-dom";

export default function Topnav(props) {
  const [searchValue, setSearchValue] = useState('');
  const [showNav,setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  function listTitles(){
    const e = document.querySelector('.listTitles');
    e.classList.add('titles');
  }

  function RenderTitles(){ 
    return <div className="listTitles">{ props.article.map((obj)=> <h6>{obj.title}</h6>)}</div>
  }

  return ( <>
        <Link className="icon" id="myTopnav" onClick={toggleNav}>
          <i className="fa fa-bars"></i>
        </Link>
      
      {showNav ? <div className = "topnav" >
        <div className="search">
          <Link onClick = {e =>
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
          </Link>
          <input
          type        = "text"
          placeholder = "Search SaMapedia..."
          name        = "search"
          className   = "search"
          value       = {searchValue}  
          onChange    = {e => setSearchValue(e.target.value.toUpperCase())} 
          onFocus     = {listTitles}
          />
          <RenderTitles />
        </div>
        <span>
        <Link to = "/">
          Home
        </Link>
        
        <Link to = "/addArticle">
          Add
        </Link>
        </span>
      </div> : null}
     
    </>
  );
}


