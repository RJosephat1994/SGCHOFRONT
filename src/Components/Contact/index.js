//Dependenicies

import React,{Component} from 'react';
import TabladeTablas from '../Global/TabladeTablas.js';
//Importando REcharts
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import '../Global/css/Form2.css';
import '../Global/css/Formato.css';
import '../Global/css/tablaCal.css';
import '../Global/css/select.css';
class Contact extends Component{

  constructor(){
  super();
  this.state={
  id:0,
  num:0,
  caja:0,
  sprint:0,
  Resul:[],
  }

     this.handleChanged2= this.handleChanged2.bind(this);
     this.handleChanged= this.handleChanged.bind(this);
          this.handleChanged3= this.handleChanged3.bind(this);
  }

  onCompomentDidAmount(){

}
handleChanged2(e){
    this.setState({[e.target.name]: e.target.value});

}
handleChanged(){
  var equipo= sessionStorage.getItem('equipo');
  fetch('http://localhost:8080/ApiCheck/BSprintEquipo?numSprint='+this.state.caja+'&equipo='+equipo)
       .then((response) => {
         return response.json()
       })
       .then((sprintsEquipo) => {
         this.setState({ Resul: sprintsEquipo })
       })
}

handleChanged3(){

  var equipo= sessionStorage.getItem('equipo');
  fetch('http://localhost:8080/ApiCheck/BSprintTodos?numSprint='+this.state.caja)
       .then((response) => {
         return response.json()
       })
       .then((sprintsEquipo) => {
         this.setState({ Resul: sprintsEquipo })
       })

}



  render(){


if(sessionStorage.getItem("categoria")==2){

  if(this.state.Resul.length>1){
    sessionStorage.setItem("sp",this.state.caja);

  var datos=[];

    return(

      <div className="Equipos">


      <h1>Consulta de horas por equipo</h1>

      <div className="FormatoP">
      <form>
      <br/>
      Selecciona el número del sprint
      <br/>
      <select name="caja" className="ancho" value={this.state.caja} onChange={this.handleChanged2}>
                 <option value="0">0</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
                 <option value="10">10</option>
                 <option value="11">11</option>
                 <option value="12">12</option>
                 <option value="13">13</option>
                 <option value="14">14</option>
                 <option value="15">15</option>
                 <option value="16">16</option>
                 <option value="17">17</option>
                 <option value="18">18</option>
                 <option value="19">19</option>
         </select>

      </form>
      <br/>
      <input  className="ancho" type="button" value="Consultar" id="boton" onClick={this.handleChanged}></input>

    </div>



    <table className="tabla2">

    {this.state.Resul.map((item, key)=> <table key={key}>

    <h3 className="izq">Número del sprint: {item.numSprint}
        <label className="der"> Número de equipo: {item.equipo}</label>
    </h3>
    <h4 className="izq"> Nombre: {item.nombre} </h4>

        <TabladeTablas lista={item} />



      <label style={{visibility:"hidden"}}>  {  datos.push({nombre: item.nombre,horas_laboradas: parseFloat(item.totalhoras.substring(0,3))})}
        </label>
      </table>) }


</table>


<br/>
<br/>

<div className="center">
    	<BarChart  width={600} height={400} data={datos}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="nombre"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />

       <Bar dataKey="horas_laboradas" fill="#3F51B5" background={{ fill: '#eee'}} />
      </BarChart>

</div>

    </div>

    );
  }else{

    return(

      <div className="Equipos">


      <h1>Consulta de Horas por Equipo</h1>

      <div className="FormatoP">
      <form>
      <br/>
      Selecciona el número del sprint
      <br/>
      <select name="caja" className="ancho" value={this.state.caja} onChange={this.handleChanged2}>
                 <option value="0">0</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
                 <option value="10">10</option>
                 <option value="11">11</option>
                 <option value="12">12</option>
                 <option value="13">13</option>
                 <option value="14">14</option>
                 <option value="15">15</option>
                 <option value="16">16</option>
                 <option value="17">17</option>
                 <option value="18">18</option>
                 <option value="19">19</option>
         </select>

      </form>
      <br/>
      <input  className="ancho" type="button" value="Consultar" id="boton" onClick={this.handleChanged}></input>

    </div>

    </div>

    );

  }





}else{

  if(sessionStorage.getItem("categoria")==3){


      if(this.state.Resul.length>1){

        return(

          <div className="Equipos">


          <h1>Consulta de horas por equipo</h1>

          <div className="FormatoP">
          <form>
          <br/>
          Selecciona el número del sprint
          <br/>
          <select name="caja" className="ancho" value={this.state.caja} onChange={this.handleChanged2}>
                     <option value="0">0</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                     <option value="6">6</option>
                     <option value="7">7</option>
                     <option value="8">8</option>
                     <option value="9">9</option>
                     <option value="10">10</option>
                     <option value="11">11</option>
                     <option value="12">12</option>
                     <option value="13">13</option>
                     <option value="14">14</option>
                     <option value="15">15</option>
                     <option value="16">16</option>
                     <option value="17">17</option>
                     <option value="18">18</option>
                     <option value="19">19</option>
             </select>

          </form>
          <br/>
          <input  className="ancho" type="button" value="Consultar" id="boton" onClick={this.handleChanged3}></input>

        </div>



        <table className="tabla2">

        {this.state.Resul.map((item, key)=> <table key={key}>

        <h3 className="izq">Número del sprint: {item.numSprint}
            <label className="der"> Número de equipo: {item.equipo}</label>
        </h3>
        <h4 className="izq"> Nombre: {item.nombre} </h4>

            <TabladeTablas lista={item} />

          </table>) }


    </table>
        </div>

        );
      }else{

        return(

          <div className="Equipos">


          <h1>Consulta de Horas por Equipo</h1>

          <div className="FormatoP">
          <form>
          <br/>
          Selecciona el número del sprint
          <br/>
          <select name="caja" className="ancho" value={this.state.caja} onChange={this.handleChanged2}>
                     <option value="0">0</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                     <option value="6">6</option>
                     <option value="7">7</option>
                     <option value="8">8</option>
                     <option value="9">9</option>
                     <option value="10">10</option>
                     <option value="11">11</option>
                     <option value="12">12</option>
                     <option value="13">13</option>
                     <option value="14">14</option>
                     <option value="15">15</option>
                     <option value="16">16</option>
                     <option value="17">17</option>
                     <option value="18">18</option>
                     <option value="19">19</option>
             </select>

          </form>
          <br/>
          <input  className="ancho" type="button" value="Consultar" id="boton" onClick={this.handleChanged3}></input>

        </div>

        </div>

        );

      }


  }else{

    return(
  <div className="Equipos">
    <h1>No Tienes Permiso para Acceder a Este Módulo</h1>
  </div>
    );

  }


}

  }
}
export default Contact;
