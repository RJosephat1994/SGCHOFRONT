import React, { Component } from 'react';
import logo from './Images/logo.svg';
import './css/Form.css';
import './css/tabla.css';
import ListaSprints from './ListaSprints.js';

import xlsx from 'node-xlsx';

import $ from 'jquery';
class FormSprint extends Component {
constructor(){
super();
this.state={
id:0,
num:0,
  dias:"",
  fecha_entrega:"",
  fecha_fin: "",
  fecha_revisionypago: "",
  horas: "",
  fecha_inicio: "",
lista: []

}
 this.handleInputChanged= this.handleInputChanged.bind(this);
 this.handleButtonClick= this.handleButtonClick.bind(this);
 this.handleButtonClick3= this.handleButtonClick3.bind(this);
this.handleConsultar= this.handleConsultar.bind(this);
this.CargarExcel= this.CargarExcel.bind(this);
}

CargarExcel(){




    // Parse a file
    const workSheetsFromFile = xlsx.parse('test.xls');
    //Dependencias

console.log(workSheetsFromFile);



}

componentDidMount() {

  fetch('http://localhost:8080/ApiCheck/Sprints')
       .then((response) => {
         return response.json()
       })
       .then((sprints) => {
         this.setState({ lista: sprints })
       })


}

handleButtonClick(e){
  var form_data={
        idSprnt:               0,
        fechaInicio:           this.state.fecha_inicio,
        fechaFin:              this.state.fecha_fin,
        fechaEntrega:          this.state.fecha_entrega,
        num:                   this.state.num,
        diasHabiles:           this.state.dias,
        horas:                 this.state.horas,
          fechaRevisionYPago:       this.state.fecha_revisionypago,
    };

    // submit form data to api
    $.ajax({
        url: "http://localhost:8080/ApiCheck/gsprint",
        type : "GET",
        contentType : 'application/json',
        data :{

          num:0,
           fechaInicio:  this.state.fecha_inicio,
           FechaFin: this.state.fecha_fin,
          DiasHabiles: this.state.dias,
           Horas:this.state.horas,
           FechaEntrega:this.state.fecha_entrega,
           FechaRevisionYPago: this.state.fecha_revisionypago,


        },
        success : function(response) {

            // api message
            this.setState({successCreation: response['message']});

            // empty form
            fetch('http://localhost:8080/ApiCheck/Sprints')
                 .then((response) => {
                   return response.json()
                 })
                 .then((sprints) => {
                   this.setState({ lista: sprints })
                 });

        }.bind(this),
        error: function(xhr, resp, text){
            // show error to console
            console.log(xhr, resp, text);
        }
    });

    e.preventDefault();




}

handleConsultar(e){

alert(this.state.idEmpleado);

}

handleButtonClick3(e){


    // submit form data to api
    $.ajax({
        url: "http://localhost:8080/ApiCheck/ESprints",
        type : "GET",
        contentType : 'application/json',
        data : {id: this.state.id},
        success : function(response) {
          fetch('http://localhost:8080/ApiCheck/Sprints')
               .then((response) => {
                 return response.json()
               })
               .then((sprints) => {
                 this.setState({ lista: sprints })
               });
        }.bind(this),
        error: function(xhr, resp, text){
            // show error in console
            console.log(xhr, resp, text);
        }
    });

    e.preventDefault();
}

handleInputChanged(e){
        this.setState({[e.target.name]: e.target.value});
}

  render() {
    return (


      <div>

  <form>
  <div className="group">

  <input type="file"></input>
  </div>
  <div className="group">

  <br/>
     <input type="number" name="dias" value={this.state.dias} onChange={this.handleInputChanged}
       required/>
     <span className="highlight"></span>
     <span className="bar"></span>
     <label>Número de dias del Sprint</label>
   </div>
   <div className="group">
      <input type="date" name="fecha_inicio" value={this.state.fecha_inicio} onChange={this.handleInputChanged}
        required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Fecha de inicio</label>
    </div>
    <div className="group">
       <input type="date" name="fecha_fin" value={this.state.fecha_fin} onChange={this.handleInputChanged}
         required/>
       <span className="highlight"></span>
       <span className="bar"></span>
       <label>Fecha de Termino </label>
     </div>
     <div className="group">
        <input type="number" name="horas" value={this.state.horas} onChange={this.handleInputChanged}
          required/>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Número horas totales</label>
      </div>
      <div className="group">
         <input type="date" name="fecha_revisionypago" value={this.state.fecha_revisionypago} onChange={this.handleInputChanged}
           required/>
         <span className="highlight"></span>
         <span className="bar"></span>
         <label>Fecha de revisión y pago</label>
       </div>

       <div className="group">
          <input type="date" name="fecha_entrega" value={this.state.fecha_entrega}  onChange={this.handleInputChanged}
            required/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Fecha de entregat</label>
        </div>

<br/>
<input type="button" id="button" onClick={this.handleButtonClick}  value="Guardar Sprint"></input>

  </form>

  <div style={{color:"black"}} className="tabla">
  <h1>Sprints Actuales</h1>

<table>
<tr>
<th>
id Sprint
</th>
<th>
Horas
</th>
<th>
Sprint
</th>
<th>
Fecha Ini.
</th>
<th>
Fecha Fin
</th>
<th>
D. Hábiles
</th>
<th>
F. Entrega
</th>
<th>
F. Revisión
</th>
</tr>


  {this.state.lista.map((item, key)=><tr key={key}>
          <td>
          {item.idSprnt}
          </td>
          <td>
        {item.horas}
          </td>
          <td>
          {item.num}
          </td>
          <td>
        {item.fechaInicio}
          </td>
          <td>
      {item.fechaFin}
          </td>
          <td>
        {item.diasHabiles}
          </td>
          <td>
        {item.fechaEntrega}
          </td>
          <td>
        {item.fechaRevisionYPago}
          </td>
      </tr> )}

</table>
  </div>

  <div className="Eliminar">
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
  <input type="button" id="button" onClick={this.handleButtonClick3}  value="Borrar sprint"></input>

  </form>
  <button onClick={this.CargarExcel}> Cargar Excel</button>
  </div>

      </div>




    );
  }
}


export default FormSprint;
