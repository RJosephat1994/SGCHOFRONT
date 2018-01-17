import React, { Component } from 'react';
import logo from './Images/logo.svg';
import './css/Form.css';

class FormIni extends Component {
constructor(){
super();
this.state={

  idEmpleado: ""

}
 this.handleInputChanged= this.handleInputChanged.bind(this);
 this.handleButtonClick= this.handleButtonClick.bind(this);
this.handleConsultar= this.handleConsultar.bind(this);
}


handleButtonClick(){
  console.log("asdfjaskf");


}
handleConsultar(e){

alert(this.state.idEmpleado);

}

handleInputChanged(e){
  const nombre= e.target.name;
        this.setState({[e.target.name]: e.target.value});
}

  render() {
    return (
      <div className="FormIni">

  <form>
  ingresa tu id <br/>

  <input type="Number" name="idEmpleado" value={this.state.idEmpleado} onChange={this.handleInputChanged} placeholder="123"></input>
 <br/>
 Selecciona el sprint
<select>
//Aqui Va un Foreach
<option>1</option>
</select>
<br/>
<input type="button" id="button" onClick={this.handleConsultar}  value="Consultar"></input>

  </form>
<p>Lorem p </p>
      </div>
    );
  }
}

export default FormIni;
