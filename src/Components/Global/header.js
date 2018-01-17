//Dependencias
import React, { Component } from 'react';
import PropTypes from'prop-types';
import {Link} from 'react-router-dom';
 import Image from 'react';
//Assetes

import './css/Header.css';
import './css/head.css';

//images
import logor from './Images/logor.png'
class Header extends Component {
  static propTypes={
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    log: PropTypes.string.isRequired,
  }
  handleButtonClick(){

    sessionStorage.setItem("log","no");
   window.location.href = "http://localhost:3000";
  }
  render() {
const {title,items,log}= this.props;

if(log=="yes"){



    return (

      <div className="Header">
        <img className="logo" src={logor} alt={'logor'}/>
    <h2 className="titulo">{title}</h2>
    <ul className="menu sobre">
    {items && items.map((item, key)=> <li  key={key}> <Link to={item.url}>{item.title}</Link></li>)}
    <li onClick={this.handleButtonClick}>Cerrar Sesión</li>
    </ul>

      </div>

    );
  }else{
return(
  <div className="Header">
  <img className="logo" src={logor} alt={'logor'}/>

<h2 className="titulo">{title}</h2>

<ul   className="menu sobre" >
<li >inicia Sesión</li>
</ul>

</div>
);

  }
  }
}

export default Header;
