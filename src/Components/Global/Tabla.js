import React, { Component } from 'react';
import PropTypes from'prop-types';


import './css/listas.css';
class Tabla extends Component{

  static propTypes={

    lista: PropTypes.array.isRequired,

  }

render(){
const {lista}= this.props;

return (
  lista.map((item, key)=> <p key={key}>

    {item}   </p>


)

);
}}
export default Tabla;
