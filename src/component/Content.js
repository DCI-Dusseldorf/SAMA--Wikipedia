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

function Content({ articles, setArticles }) {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/articles"
          render={() => <Articles articles={articles} />}
        />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/donate" component={Donate} />
        <Route
          path="/add"
          render={() => <Add articles={articles} setArticles={setArticles} />}
        />
        <Route
          path="/edit/:id"
          render={() => <Edit articles={articles} setArticles={setArticles} />}
        />
        <Route
          path="/:id"
          render={() => (
            <Article articles={articles} setArticles={setArticles} />
          )}
        />
      </Switch>
    </div>
  );
}

export default Content;
