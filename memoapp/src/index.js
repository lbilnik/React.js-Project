/* React imports */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'

/*App components import */
import App from './components/App';
import Kalkulator from './components/Kalkulator/Kalkulator';
import MemeGenerator from './components/MemeGenerator';
/* Style components*/
import './style/style.css';
import './style/Kalk.css';
import './style/burgerStyle.css';

ReactDOM.render((    
  <BrowserRouter>
  <Route exact path ="/" component={App}/>
  <Route exact path ="/App" component={App}/>
  <Route exact path ="/Kalkulator" component={Kalkulator}/>
  <Route exact path ="/MemeGenerator" component={MemeGenerator}/>
  </BrowserRouter>

), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
