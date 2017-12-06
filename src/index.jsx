import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, IndexRoute, hashHistory} from "react-router-dom";
import Home from './routes/Home.jsx';



const app = document.getElementById('app')

ReactDOM.render(

  <BrowserRouter >
    <div>
     <Route path="/" component={Home}/>
  
    </div>
 </BrowserRouter>
  , app);
