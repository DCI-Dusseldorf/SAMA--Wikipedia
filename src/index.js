import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './App';
import {BrowserRouter as Router} from 'react-router-dom';

import 'react-summernote/dist/react-summernote.css'; 
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

import $ from 'jquery';
window.$ = $;
window.jQuery = $;

// if window location contains github we need to add the base path, else router will point
// to the wron directory
const basename = window.location.toString().match('github') ? '/SAMA--Wikipedia/' : null;

ReactDOM.render(
  <React.StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

