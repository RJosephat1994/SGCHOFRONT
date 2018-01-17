import React, { Component } from 'react';
import logo from './Images/logo.svg';
import './css/Form.css';

//Dependencias

import $ from 'jquery';
class EliminarSprint extends Component {
constructor(){
super();
this.state={
id:"",
}
 this.handleInputChanged= this.handleInputChanged.bind(this);
 this.handleButtonClick= this.handleButtonClick.bind(this);
this.handleConsultar= this.handleConsultar.bind(this);
}


handleButtonClick3(e){


    // submit form data to api
    $.ajax({
        url: "http://localhost:8080/ApiCheck/ESprints",
        type : "GET",
        contentType : 'application/json',
        data : {id: this.state.id},
        success : function(response) {
         alert("Se elimino correctamente");
        }.bind(this),
        error: function(xhr, resp, text){
            // show error in console
            console.log(xhr, resp, text);
        }
    });

    e.preventDefault();
}

handleConsultar(e){

alert(this.state.idEmpleado);

}

handleInputChanged(e){
        this.setState({[e.target.name]: e.target.value});
}

  render() {
    return (
      <div>
        <h1>Eliminar Sprint </h1>
  <form>

  <div className="group">
     <input type="number" name="id" value={this.state.id} onChange={this.handleInputChanged}
       required/>
     <span className="highlight"></span>
     <span className="bar"></span>
     <label>Ingresa el Id del Sprint</label>
   </div>


<br/>
<input type="button" id="button" onClick={this.handleButtonClick}  value="Borrar sprint"></input>

  </form>

      </div>
    );
  }
}

export default EliminarSprint;
