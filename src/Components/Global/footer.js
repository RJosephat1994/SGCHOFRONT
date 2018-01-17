import React, { Component } from 'react';
import PropTypes from 'prop-types'

import logo from './Images/logo.svg';
import './css/Footer.css';

class Footer extends Component {
  static proptypes={
    copyright:PropTypes.string
  }
  render() {
const{ copyright='&copy; React 2017'}= this.props

    return (
      <div className="Footer">


<p dangerouslySetInnerHTML={{__html:copyright}}/>
      </div>
    );
  }
}

export default Footer;
