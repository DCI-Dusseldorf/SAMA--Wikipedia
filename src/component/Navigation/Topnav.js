import React, {useState} from "react";
import {Link}            from "react-router-dom";

export default function Topnav(props) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className = "topnav">
        <input
          type        = "text"
          placeholder = "Enter Title..."
          name        = "search"
          className   = "search"
          value       = {searchValue}  
          onChange    = {e => setSearchValue(e.target.value.toUpperCase())}     
        />
        
        <Link to = "/">
          <li>Home</li>
        </Link>
        
        <Link to = "/addArticle">
          <li>New</li>
        </Link>
        
        <Link to = "/searchAndDisplay">
          <li onClick = {e =>
            {
              if(searchValue == ''){
                alert('Please enter a title to search');
              }
              else{
                props.displayContent(searchValue);
                setSearchValue("");
              }
            }
          }>Search</li>
        </Link>
      </div>
    </>
  );
}
