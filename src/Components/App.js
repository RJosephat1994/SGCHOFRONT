

//Depend3ncias
import React, { Component } from 'react';
import PropTypes from'prop-types';

import logo from './Global/Images/logo.svg';
//Components
import Header from'./Global/header.js'
import Content from'./Global/Content.js'
import Footer from'./Global/footer.js'
import './Global/css/Form.css';
import './Global/css/head.css';
//Date
import items from '../data/menu.js'
class App extends Component {

  constructor(){
super();
this.state={
log:"no",
user:"",
Password:"",
usuario:[],
cate:"",
}
this.handleInputChanged= this.handleInputChanged.bind(this);
this.handleButtonClick= this.handleButtonClick.bind(this);

  }

  static proptypes={
    children:PropTypes.object.isRequired,
    log: PropTypes.string.isRequired
  }

handleButtonClick(e){

fetch('http://localhost:8080/ApiCheck/Login?nombre='+this.state.user+'&nip='+this.state.Password, )
       .then(

            (response) => {
            return response.json()
          })
          .then((user) => {
            this.setState({ usuario: user })
          })

if(this.state.usuario.length>0){
  alert("Bienvenido "+this.state.usuario[0].nombrecorto);
  this.setState({cate:""+this.state.usuario[0].categoria});
  this.setState({log:"yes"})
  var valor="yes";
  sessionStorage.setItem('log',valor);
  sessionStorage.setItem('trabajador',this.state.usuario[0].trabajador);
  sessionStorage.setItem('categoria',this.state.usuario[0].categoria);
    sessionStorage.setItem('equipo',this.state.usuario[0].equipo);
}else
{
alert("Error Usuario no Encontrado");
  this.setState({log:"no"});
    var valor="no";
    sessionStorage.setItem('log',valor);
}
}






handleInputChanged(e){

  this.setState({[e.target.name]: e.target.value});

}
  render() {
    const {children}= this.props

    if(sessionStorage.getItem('log')=="yes"){
    return (
      <div className="App">
      <Header title="Sistema de Gestión de Capital Humano" items={items} log={sessionStorage.getItem('log')}/>
       <Content body={children}/>
        <Footer copyright="&copy; Ryndem 2017"/>
      </div>
    );}else{

      return(

        <div className="App">
        <Header title="SGCH" items={items} log={this.state.log}/>

         <Content body={children}/>
<br/><br/><br/>
         <div className="Login">

               <form>

               <div className="group">
                  <input type="text" name="user" value={this.state.user} onChange={this.handleInputChanged}
                    required/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Usuario</label>
                </div>
              
                <div className="group">
                   <input type="password" name="Password" value={this.state.Password} onChange={this.handleInputChanged}
                     required/>
                   <span className="highlight"></span>
                   <span className="bar"></span>
                   <label>Contraseña</label>
                 </div>

               <br/>
               <input type="button" id="button" onClick={this.handleButtonClick}  value="Acceder"></input>

               </form>

                   </div>

          <Footer copyright="&copy; Ryndem 2017"/>
        </div>

      );
    }
  }
}

export default App;
