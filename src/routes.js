//Dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Componentes
import App from './Components/App';
import About from './Components/About/index.js';
import Contact from './Components/Contact/index.js';
import Home from './Components/Home/index.js';
import Page404 from './Components/Page404/index.js';
import Sprints from './Components/Sprints/index.js';

const AppRoutes=()=>
<App >

<Switch>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/" component={Home}/>
      <Route  exact path="/sprints" component={Sprints}/>
      <Route  component={Page404}/>
</Switch>
</App>;


export default AppRoutes
