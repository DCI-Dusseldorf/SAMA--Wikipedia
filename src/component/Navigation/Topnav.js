import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Topnav(props) {
  const [searchValue, setSearchValue] = useState('');
   
  return (
    <>
      <div className="topnav">
      <input
        type="text"
        placeholder="Title.."
        name="search"
        className="search"
        value ={searchValue}  
        onChange={ e => setSearchValue(e.target.value.toUpperCase()) }     
        />
        <Link to ="/">
        <li className="active">
          Home
        </li></Link>
        <Link to="/addArticle">
        <li>New</li></Link>
        <Link to="/searchAndDisplay">
          <li onClick={e =>{
              props.displayContent(searchValue);
              setSearchValue("");
              }}>
               Search
          </li>
        </Link>
      </div>
    </>
  );
}
