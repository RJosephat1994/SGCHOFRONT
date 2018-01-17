//Dependenicies

import React,{Component} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie} from 'recharts';
import Tabla from '../Global/Tabla.js';
import '../Global/css/Formato.css';
import '../Global/css/tablaCal.css';
import '../Global/css/select.css';
import '../Global/css/Form.css';

class About extends Component{

  constructor(){
  super();
  this.state={
  id:0,
  num:0,
  caja:0,
  sprint:0,
  Resul:null,
  }
   this.handleChanged= this.handleChanged.bind(this);
      this.handleChanged2= this.handleChanged2.bind(this);
this.handleChanged3= this.handleChanged3.bind(this);
  }


handleChanged2(e){
    this.setState({[e.target.name]: e.target.value});

}
handleChanged3(e){
  alert("La fecha es:"+e.target.id);

}

  handleChanged(){

          fetch('http://localhost:8080/ApiCheck/BSprint?numSprint='+this.state.caja+'&idemp='+sessionStorage.getItem('trabajador'))
               .then((response) => {
                 return response.json()
               })
               .then((sprints) => {
                 this.setState({ Resul: sprints })
               })

               if(this.state.Resul==null){

                 this.setState({sprint: 0});
               }else{
                 var nume= this.state.Resul.numSprint;

                 this.setState({sprint: nume});
               }


  }


  render(){


var datos=[];
if(this.state.sprint!=0){

var dias= this.state.Resul.dias;


return(




  <div className="FormatoP">
  <h1>Consulta de Horas Personal</h1>
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
  <div>
  <br/>
  <input  className="ancho" type="button" value="Consultar" id="boton" onClick={this.handleChanged}></input>
  </div>
<br/><br/>
<h2 className="izq" > Número del sprint {this.state.Resul.numSprint}</h2>
<table className="tabla2">
{this.state.Resul.dias.map((item, key)=> <th key={key}  >

  <th>{item.fecha}</th>
  <tr>

<td style={{color:''+item.color+''}} > <Tabla lista={item.registros}/>

 Horas acomuladas: {item.nHoras} HRS
<label style={{visibility:"hidden"}}>  {  datos.push({fecha: item.fecha,horas_laboradas: parseFloat(item.nHoras.substring(0,3))})}
  </label>
</td>





</tr>


  </th>)}
</table>



<br/>
<h2>Total de horas acomuladas en el sprint: {this.state.Resul.totalhoras}. HRS.</h2>



<input type="button"className="Rigth" value="Solicitar correción" id="solbtn" name="solbtn"></input>

<br/><br/><br/><br/>
<div className="center">
    	<BarChart  width={600} height={400} data={datos}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="fecha"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />

       <Bar dataKey="horas_laboradas" fill="#3F51B5" background={{ fill: '#eee'}} />
      </BarChart>


</div>
</div>

);
}

    return (
<div className="about">
<div className="FormatoP">
<h1>Consulta de Horas Personal</h1>
<form>
<br/>
Selecciona el número del sprint
<br/>

<select className="ancho" name="caja" value={this.state.caja} onChange={this.handleChanged2}>
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
<div>
<br/>
<input type="button" className="ancho" value="Consultar" id="button" onClick={this.handleChanged}></input>
</div>
</div>





</div>

    );
  }
}
export default About;
