import "./App.scss";

import React, {useEffect, useState}             from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home             from "./component/Navigation/Home";
import About            from "./component/Navigation/About";
import Topnav           from './component/Navigation/Topnav';
import Sidenav          from './component/Navigation/Sidenav';
import Content          from './component/Navigation/Content';
import SearchAndDisplay from './component/Navigation/SearchAndDisplay';
import RichtextEditor   from './component/Navigation/RichtextEditor';
import RandomArticle    from './component/Navigation/RandomArticle';

export default function App() {

  const [article, setArticle] = useState(JSON.parse(localStorage.getItem("myWiki"))||[{id:0,title:'Home',content:'Welcome to SaMaPedia'}]);
  let dataDisplay = '';
  let dataRandom = '';

  // Dynamic interaction with Local storage
  useEffect(() => {
    localStorage.setItem('myWiki',JSON.stringify(article));
  },[article]
  )

  // To display content on search
  function displayContent(searchValue){ 
    dataDisplay ='';

    article.forEach((obj)=>{
      if(obj.title === searchValue){
        dataDisplay = obj.content;
        }
      }
    )

    if(dataDisplay === ''){
        dataDisplay = "<h2>Content not available</h2>";
    }
  }
  
  // To display random article
  function randomDisplay(randomIndex){ 
      dataRandom = article[randomIndex].content ;
  }
  
  // main render
  return (
    <>
    <Router>
      {/* Side bar */}
      <Sidenav  article       = {article} 
                setArticle    = {setArticle} 
                randomDisplay = {randomDisplay}
      />
      
      {/* Top bar */}
      <div className = "main">
        <Topnav article         = {article} 
                setArticle      = {setArticle} 
                displayContent  = {displayContent}/>
      </div>
      
      {/* Main content */}
      <div className = "aside">
        <Switch>
          <Route  path      = '/' 
                  exact 
                  component = {Home} 
          />
          <Route  path      = "/about" 
                  component = {About} 
          />
          <Route  path    = "/addArticle" 
                  exact>
            <RichtextEditor article     = {article} 
                            setArticle  = {setArticle} 
            />
          </Route> 
          <Route  path    = "/richtextEditor/:id">
            <RichtextEditor article     = {article} 
                            setArticle  = {setArticle} 
            />
          </Route> 
          <Route  path    = "/content">
            <Content  article    = {article} 
                      setArticle = {setArticle}>
              {article.title}
            </Content>
          </Route>
          <Route  path    = "/randomArticle"    
                  exact
                  render  = {(props) => <RandomArticle {...props} 
                  data    = {dataRandom} 
                    />
                  }
          />
          <Route  path    = "/searchAndDisplay" 
                  render  = {(props) => <SearchAndDisplay {...props} 
                  data    = {dataDisplay} />}
          />
        </Switch>
      </div>
    </Router>   
    </>
  );
}