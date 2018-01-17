
//Dependencias

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router}from  'react-router-dom'
//Routas
import AppRoutes from './routes'
//Assets
import './index.css';

import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

render(
<Router>
<AppRoutes/>
</Router>
  , document.getElementById('root'));
