import React, {useState} from "react";
import {Link} from "react-router-dom";
import Searchbar from './Searchbar'

export default function Topnav(props) {
  const [searchValue, setSearchValue] = useState('');
   
  return (
    <>
      <div className="topnav">
        {/* <Searchbar/> */}
      <input
        type="text"
        placeholder="Title.."
        name="search"
        className="search"
        value ={searchValue}  
        onChange={ e => setSearchValue(e.target.value) }     
        />
        <Link to ="/home">
        <li className="active">
          Home
        </li></Link>
        <Link to="/richtextEditor">
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
