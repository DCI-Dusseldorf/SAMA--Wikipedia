import React from "react";
import RichTextEditor from "./RichTextEditor";

export default function Search() {
  const searchKeyRef = React.useRef(null);

  function checkKey(e) {
    e.preventDefault();
    const element = searchKeyRef.current;
    const searchKey = element.value;
    let data = [];
    if (localStorage.getItem("myWiki")) {
      data = JSON.parse(localStorage.getItem("myWiki"));
      data.forEach(({ key, value }) => {
        if (key == searchKey) {
          window.location.hash = "#" + key;
        }
      });
    }
    // } else {
    //   data.push({ key });
    //   localStorage.setItem("myWiki", JSON.stringify(data));
    // }
  }
  return (
    <>
      <form className="search">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          ref={searchKeyRef}
        ></input>
        <button type="submit" onClick={checkKey}>
          <i className="fa fa-search"></i>
        </button>
      </form>
    </>
  );
}
