import React, { useEffect, useState } from "react";

import "./App.scss";
import Content from "./component/Content";
import Sidebar from "./component/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";

const initState = JSON.parse(localStorage.getItem("articles")) || [];
function App() {
  const [articles, setArticles] = useState(initState);

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  return (
    <div>
      <Sidebar />
      <Content articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default App;
