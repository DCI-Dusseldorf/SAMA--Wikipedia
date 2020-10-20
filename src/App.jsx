import React from 'react';
import RichTextEditor from './component/RichTextEditor';
import './App.scss';

function App() {
   const [hash, setHash] = React.useState(window.location.hash);
   window.onhashchange = function(){
      setHash(window.location.hash);
   }
  return (
      <div>
         <RichTextEditor id = {hash} />
      </div>
   );
}

export default App;
