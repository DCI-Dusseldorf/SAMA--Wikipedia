import React from "react";
import Topnav from "./component/Topnav";
import Sidenav from "./component/Sidenav";
import RichTextEditor from "./component/RichTextEditor";
import "./App.scss";
import Search from "./component/Search";

function App() {
  const [hash, setHash] = React.useState(window.location.hash);
  //   const [text, setText] = React.useState("");
  const searchKey = hash;
  let text = "";
  window.onhashchange = function () {
    setHash(window.location.hash);
  };
  if (localStorage.getItem("myWiki")) {
    const data = JSON.parse(localStorage.getItem("myWiki"));
    data.forEach(({ key, value }) => {
      if (key == searchKey.slice(1)) {
        //   setText(value);
        text = value;
        console.log(value);
      }
    });
  }
  return (
    <>
      <Sidenav />
      <div className="main">
        <Topnav />
      </div>
      <div className="aside">
        <RichTextEditor id={hash} content={text} />
      </div>
    </>
  );
}

export default App;
