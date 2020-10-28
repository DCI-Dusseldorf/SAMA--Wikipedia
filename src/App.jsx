import React, {useEffect, useState}from 'react';
import "./App.scss";

import Home from "./component/Navigation/Home";
import About from "./component/Navigation/About";
import Topnav from './component/Navigation/Topnav';
import Sidenav from './component/Navigation/Sidenav';
import Content from './component/Navigation/Content';
import SearchAndDisplay from './component/Navigation/SearchAndDisplay';
import RichtextEditor from './component/Navigation/RichtextEditor';
import RandomArticle from './component/Navigation/RandomArticle';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  const [article, setArticle] = useState(JSON.parse(localStorage.getItem("myWiki"))||[{id:0,title:'Home',content:'Hello world'}]);
  let data='';

  useEffect(() => {
 localStorage.setItem('myWiki',JSON.stringify(article));
 }, [article])

 function displayContent(searchValue){ 
   data ='';
    article.forEach((obj)=>{
       if(obj.title === searchValue){
         data = obj.content;
        }
      })
      if(data === ''){
        data = "<h2>Content not available</h2>";
      }
   }
    function randomDisplay(randomIndex){ 
      data = article[randomIndex].content ;
    }
  
  return (
    <>
    <Router>
    <Sidenav article={article} setArticle={setArticle} randomDisplay={randomDisplay}/>
    <div className="main">
      <Topnav article={article} setArticle={setArticle} displayContent={displayContent}/>
    </div>
    <div className="aside">
    <Switch>
    <Route path='/' exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/addArticle" exact><RichtextEditor article={article} setArticle={setArticle} /></Route> 
    <Route path="/richtextEditor/:id" ><RichtextEditor article={article} setArticle={setArticle} /></Route> 
    <Route path = "/content"> <Content article={article} setArticle={setArticle} >{article.title}</Content></Route>
    <Route path = "/searchAndDisplay" render={(props) => <SearchAndDisplay {...props} data={data} />}/>
    <Route path = "/randomArticle" render={(props) => <RandomArticle {...props} data={data} />}/>
    </Switch>
    </div>
    </Router>   
    </>
  );
}

export default App;
