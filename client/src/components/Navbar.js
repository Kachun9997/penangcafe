import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="w3-top">
        <div className="w3-row w3-padding w3-black">
          <div className="w3-col s3">
            <a href="/" className="w3-button w3-block w3-black">HOME</a>
          </div>
          <div className="w3-col s3">
            <a href="#about" className="w3-button w3-block w3-black">ABOUT</a>
          </div>
          <div className="w3-col s3">
            <a href="/form" className="w3-button w3-block w3-black">Form</a>
          </div>
          <div className="w3-col s3">
            <a href="/historical" className="w3-button w3-block w3-black">Previous Searches</a>
          </div>
        </div>
      </div>


    );
  }
}

export default Navbar;
