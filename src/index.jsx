import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, IndexRoute, hashHistory} from "react-router-dom";
import Home from './routes/Home.jsx';
import Store from './routes/Store.jsx';
import Carro from './routes/Carro.jsx';


const app = document.getElementById('app')

ReactDOM.render(

  <BrowserRouter >
    <div>
     <Route exact path="/" component={Home}/>
     <Route path="/store" component={Store}/>
     <Route path="/carro" component={Carro}/>
    </div>
 </BrowserRouter>
  , app);
