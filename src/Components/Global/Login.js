import React, { Component } from 'react';
import logo from './Images/logo.svg';
import './css/Form.css';

//Dependencias

import $ from 'jquery';
class Login extends Component {
constructor(){
super();
this.state={
user="",
Password="",
}
 this.handleInputChanged= this.handleInputChanged.bind(this);
 this.handleButtonClick= this.handleButtonClick.bind(this);
this.handleConsultar= this.handleConsultar.bind(this);
}


handleButtonClick(e){



}

handleConsultar(e){

alert(this.state.idEmpleado);

}

handleInputChanged(e){
        this.setState({[e.target.name]: e.target.value});
}

  render() {
    return (
      <div className="Login">

  <form>

  <div className="group">
     <input type="text" name="User" value={this.state.user} onChange={this.handleInputChanged}
       required/>
     <span className="highlight"></span>
     <span className="bar"></span>
     <label>Número de dias del Sprint</label>
   </div>
   <div className="group">
      <input type="password" name="Password" value={this.state.Password} onChange={this.handleInputChanged}
        required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Fecha de inicio</label>
    </div>

<br/>
<input type="button" id="button" onClick={this.handleButtonClick}  value="Guardar Sprint"></input>

  </form>

      </div>
    );
  }
}

export default Login;
