import React, {useRef} from 'react';

export default function Searchbar(){

  function getSearchValue(searchValue){
console.log(searchValue.target.value);
  }
 

return <input
  type="text"
  placeholder="Title.."
  name="search"
  className="search"
  onChange={getSearchValue}
  />
}
