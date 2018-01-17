//Dependencias
import React, { Component } from 'react';
import PropTypes from'prop-types';
import {Link} from 'react-router-dom';
//Assetes

import './css/Header.css';

class Header extends Component {
  static propTypes={
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }
  render() {
const {title,items}= this.props;

    return (

      <div className="Header">

    <h2>{title}</h2>
    <ul className="menu">
  
    </ul>

      </div>

    );
  }
}

export default Header;
