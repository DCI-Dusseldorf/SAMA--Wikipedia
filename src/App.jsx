import React, {useEffect, useState}from 'react';
import "./App.scss";
import Home from "./component/Navigation/Home"
import Topnav from './component/Navigation/Topnav';
import Sidenav from './component/Navigation/Sidenav';
import Content from './component/Navigation/Content';
import Displaycontent from './component/Navigation/Content';
import SearchAndDisplay from './component/Navigation/SearchAndDisplay';

import RichtextEditor from './component/Navigation/RichtextEditor';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  const [hash, setHash] = useState(window.location.hash);
  const [article, setArticle] = useState(JSON.parse(localStorage.getItem("myWiki"))||[{id:0,title:'Home',content:'Hello world'}]);
  let data='';

  useEffect(() => {
 localStorage.setItem('myWiki',JSON.stringify(article));
 }, [article])

 function displayContent(searchValue){ 
   data ='';
    article.forEach((obj,index)=>{
       if(obj.title == searchValue){
         data = obj.content;
        }
      })
      if(data == ''){
        data = "Content not available";
      }
   }
 
 
  return (
    <>
    <Router>
    <Sidenav />
    <div className="main">
      <Topnav id={hash} article={article} setArticle={setArticle} displayContent={displayContent}/>
    </div>
    <div className="aside">
    <Switch>
    <Route path='/home' exact component={Home} />
    <Route path="/richtextEditor" render={(props) => <RichtextEditor {...props} id={hash} article={article} setArticle={setArticle} />}/>
    <Route path = "/content" render={(props) => <Content {...props} id={hash} article={article} setArticle={setArticle} />}>{article.title}</Route>
    <Route path = "/searchAndDisplay" render={(props) => <SearchAndDisplay {...props}  data={data} />}/>
    {/* <Route path="/displayContent" render={(props) => <Displaycontent {...props} id={hash} article={article} setArticle={setArticle} />}> </Route> */}
    </Switch>
    </div>
    </Router>   
    </>
  );
}

export default App;
