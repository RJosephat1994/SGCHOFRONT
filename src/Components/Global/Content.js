import React, { Component } from 'react';
import logo from './Images/logo.svg';
import './css/Content.css';
import PropTypes from'prop-types';
//Components
import FormIni from './FormularioIni.js';
import FormSprint from './FormularioInsertarSprint.js'

class Content extends Component {

  static proptypes={
    body:PropTypes.object.isRequired
  }

  constructor(){
    super ();
    this.state={

      count:0
    }

  }
  render() {

    const {body}= this.props
    return (
      <div className="Content">


      {body}

      <br/>

      </div>
    );
  }
}

export default Content;
