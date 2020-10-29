import React, {useState} from "react";
import {Link}            from "react-router-dom";

export default function Topnav(props) {
  const [searchValue, setSearchValue] = useState('');
  const [showNav,setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };


  return ( <>
        <Link className="icon" id="myTopnav" onClick={toggleNav}>
          <i className="fa fa-bars"></i>
        </Link>
      
      {showNav ? <div className = "topnav" >
        <div class="search">
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
          }><span class="fa fa-search"></span>
          </Link>
          <input
          type        = "text"
          placeholder = "Search SaMapedia..."
          name        = "search"
          className   = "search"
          value       = {searchValue}  
          onChange    = {e => setSearchValue(e.target.value.toUpperCase())}     
          />
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


