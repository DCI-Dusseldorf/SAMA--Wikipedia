import React, {useEffect, useState}from 'react';
import "./App.scss";
import Home from "./component/Navigation/Home"
import Topnav from './component/Navigation/Topnav';
import Sidenav from './component/Navigation/Sidenav';
import Content from './component/Navigation/Content';

import RichtextEditor from './component/Navigation/RichtextEditor';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  const [hash, setHash] = useState(window.location.hash);
  const [article, setArticle] = useState(JSON.parse(localStorage.getItem("myWiki"))||[{id:0,title:'Home',content:'Hello world'}]);
  window.onhashchange = function () {
    setHash(window.location.hash);
  };
 useEffect(() => {
 localStorage.setItem('myWiki',JSON.stringify(article));
 }, [article])
 
  return (
    <>
    <Router>
    <Sidenav />
    <div className="main">
      <Topnav />
    </div>
    <div className="aside">
    <Switch>
    <Route path='/home' exact component={Home} />
    <Route path="/richtextEditor" render={(props) => <RichtextEditor {...props} id={hash} article={article} setArticle={setArticle} />}/>
    <Route path = "/content" render={(props) => <Content {...props} id={hash} article={article} setArticle={setArticle} />}/>
    </Switch>
    </div>
    </Router>   
    </>
  );
}

// const Home = ()=>( 
//   <div>
//     <h1>
//       Home Page
//     </h1>
//   </div>
// );

export default App;
