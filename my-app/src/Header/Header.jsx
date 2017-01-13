import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>WELCOME TO</h1>
        <h1>SIMPLBOT</h1>
        <p>By</p>
      	<img src="http://1b663dd7bf.url-de-test.ws/wp-content/uploads/2014/11/Capture-d%E2%80%99e%CC%81cran-2014-11-14-a%CC%80-16.03.41-300x92.png" />
      </div>
    );
  }
}

export default Header;