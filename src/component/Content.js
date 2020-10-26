import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Articles from "./Articles";
import About from "./About";
import Contact from "./Contact";
import Donate from "./Donate";
import Add from "./Add";
import Edit from "./Edit";
import Article from "./Article";

function Content() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/donate" component={Donate} />
        <Route path="/add" component={Add} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/:id" component={Article} />
      </Switch>
    </div>
  );
}

export default Content;
