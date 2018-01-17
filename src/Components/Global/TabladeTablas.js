import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabla from './Tabla.js';

//Dependenicies
import Modal from 'react-modal';



import './css/tablaCal.css';

import './css/modal.css';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    color: 'black',
    width: '25%',
    height: '500px', // <-- This sets the height
      overlfow: 'scroll', // <-- This tells the modal to scrol
  }
};

class TabladeTablas extends Component{

  constructor(){
  super();
  this.state={
  id:0,
  num:0,
  caja:0,
  sprint:0,
  Resul:[],
   modalIsOpen: false,
   fecha:"",
   trabajador:0,
   ResModal:[],
   hora:"",
   nuevo:"",

  }

           this.handleChanged2= this.handleChanged2.bind(this);
           this.handleChanged3= this.handleChanged3.bind(this);
           this.openModal = this.openModal.bind(this);
           this.afterOpenModal = this.afterOpenModal.bind(this);
           this.closeModal = this.closeModal.bind(this);
           this.enviar = this.enviar.bind(this);
           this.nuevo= this.nuevo.bind(this);
           this.guardar= this.guardar.bind(this);
    }


  static propTypes={

    lista: PropTypes.array.isRequired,

  }

  nuevo(e){
    this.setState({[e.target.name]:e.target.value});


  }
  guardar(){
  var sprint= sessionStorage.getItem("sp");
  var fecha= this.state.fecha;
  var trabajador= this.state.trabajador;
  var checada= this.state.nuevo;

//algoritmo para formatear la fecha
  var pos1= fecha.indexOf("/");
  var aa= fecha.substring(0,pos1)
  var pos2=fecha.indexOf("/",pos1+1);
  var mm= fecha.substring(pos1+1,pos2);
   var dd= fecha.substring(pos2+1);
   var fechaaux=(aa+"-"+mm+"-"+dd);

  fetch('http://localhost:8080/ApiCheck/GChecada?trabajador='+trabajador+'&checada='+checada+'&fecha='+fechaaux+'&sprint='+sprint)

alert("Se han Actualizado los datos Vuelve a Consultar los registros para verificar");
this.closeModal();
  }


  enviar(e) {

var checada= sessionStorage.getItem("valorchecada");
fetch('http://localhost:8080/ApiCheck/ActualizarChecada?emp='+e.target.id+'&checada='+checada)
     .then((response) => {
       return response.json()
     })
     .then((checadas) => {
       this.setState({ ResModal: checadas })
     })

alert("Se han Actualizado los datos Vuelve a Consultar los registros para verificar");

 }

  openModal() {
   this.setState({modalIsOpen: true});
 }

 afterOpenModal() {
   // references are now sync'd and can be accessed.
   this.subtitle.style.color = '#f00';
 }

 closeModal() {
   this.setState({modalIsOpen: false});
 }

  handleChanged2(e){
sessionStorage.setItem("valorchecada",e.target.value);




  }

  handleChanged3(e){

       var pos= e.target.id.indexOf(",");
       var fechareg=  e.target.id.substring(0,pos);
       var trabajadorreg= e.target.id.substring(pos+1);
        this.setState({fecha:fechareg});
        this.setState({trabajador: trabajadorreg});

         var pos1= fechareg.indexOf("/");
         var aa= fechareg.substring(0,pos1)
         var pos2=fechareg.indexOf("/",pos1+1);
         var mm= fechareg.substring(pos1+1,pos2);
          var dd= fechareg.substring(pos2+1);
          var fechaaux=(aa+"-"+mm+"-"+dd);

        fetch('http://localhost:8080/ApiCheck/BDia?fecha='+fechaaux+'&trabajador='+trabajadorreg)
             .then((response) => {
               return response.json()
             })
             .then((checadas) => {
               this.setState({ ResModal: checadas })
             })


        this.setState({modalIsOpen: true});
  }

  render(){

    const {lista}= this.props;


if(this.state.ResModal.length>0){

  return(
  <div>

  <table className="tabla2">


  {lista.dias.map((item, key)=> <th key={key}>

    <th>{item.fecha}</th>
    <tr>

  <td style={{color:''+item.color+''}}  id={item.fecha+","+item.Trabajador} onClick={this.handleChanged3} > <Tabla lista={item.registros}/>
  Horas acomuladas: {item.nHoras} HRS
  </td>



  </tr>


    </th>)}
  </table>


  <h2>Total de horas acomuladas en el sprint: {lista.totalhoras}. HRS.</h2>

  <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
     style={customStyles}
        contentLabel="Example Modal"

      >
      <div className="modalbox movedown">
        <button className="esquina" onClick={this.closeModal}>X</button>
        <h1 className="center2" ref={subtitle => this.subtitle = subtitle}>Editor de registros </h1>
        <h2> Fecha:{this.state.fecha} Emp: {this.state.trabajador} </h2>

        <div>Realice los cambios necesarios y oprima guardar</div>
      {this.state.ResModal.map((item2, key2)=> <form key={key2}>
<div  classname="anchoTextbox" style={{width:"100%"}}>
          <input type="text" id="caja2"  name="caja2" value={item2.checada}></input>
          <br/>
            <div className="group">



            <input type="text"  onChange={this.handleChanged2} id="registronuevo" required />
               <span className="highlight"></span>
                 <span className="bar"></span>
                 <label>Datos Nuevos en HH:MM:SS</label>
             </div>

           <input type="button" value="Guardar Registro" name="asdasdf" id={item2.emp} onClick={this.enviar} />
            <br/>
</div>


        </form>)}
        ------------------------------------------------------<br/>
Agregar nuevo registro
<br/><br/>
  <div className="group">
  <input type="text"  onChange={this.nuevo} name="nuevo" value={this.state.nuevo} id="registronuevo" required />
  <br/><br/>
     <span className="highlight"></span>
       <span className="bar"></span>
       <label>Datos Nuevos en HH:MM:SS</label>


          <input type="button" value="Guardar" id="modalbtn" onClick={this.guardar} />
</div>

  </div>
      </Modal>

  </div>





  );

}else{

  return(
  <div>

  <table className="tabla2">


  {lista.dias.map((item, key)=> <th key={key}>

    <th>{item.fecha}</th>
    <tr>

  <td style={{color:''+item.color+''}}  id={item.fecha+","+item.Trabajador} onClick={this.handleChanged3} > <Tabla lista={item.registros}/>
  Horas acomuladas: {item.nHoras} HRS
  </td>



  </tr>


    </th>)}
  </table>


  <h2>Total de horas acomuladas en el sprint: {lista.totalhoras}. HRS.</h2>

  <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
     style={customStyles}
        contentLabel="Example Modal"

      >
      <div className="modalbox movedown">
        <button className="esquina" onClick={this.closeModal}>X</button>
        <h1 className="center2" ref={subtitle => this.subtitle = subtitle}>Editor de registros </h1>
        <h2> Fecha:{this.state.fecha} Emp: {this.state.trabajador} </h2>

        <div>No existen Registros para Editar</div>
        ---------------------------------------------------------<br/>
            Agregar nuevo registro
            <br/><br/>
            <div className="group">
            <input type="text"  onChange={this.nuevo} name="nuevo" value={this.state.nuevo} id="registronuevo" required />
            <br/><br/>
               <span className="highlight"></span>
                 <span className="bar"></span>
                 <label>Datos Nuevos en HH:MM:SS</label>


                    <input type="button" value="Guardar" id="modalbtn" onClick={this.guardar} />
            </div>
  </div>
      </Modal>

  </div>





  );

}






  }

}

export default TabladeTablas;
