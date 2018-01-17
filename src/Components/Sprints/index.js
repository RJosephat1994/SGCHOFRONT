//Dependenicies

import React,{Component} from 'react';

import FormSprint from '../Global/FormularioInsertarSprint.js';
import ListaSprints from '../Global/ListaSprints.js';
import EliminarSprint from '../Global/EliminarSprint.js';
//Assetes


import  '../Global/css/home.css';
//Images
import logor from './logor.png'

class Sprints extends Component{


  render(){


if(sessionStorage.getItem('categoria')==3){



    return (
<div className="sprints">

<h1>Crea un Sprint</h1>
<FormSprint/>

</div>



);}else{
return(
  <div className="sprints">

  <h1>No Tienes Permiso para Acceder a Este Módulo</h1>


  </div>
);
}
  }
}
export default Sprints;
