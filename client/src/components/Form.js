import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import header from './header.jpg';
import Result from './Result';
import './Result.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      addr: '',
      name: '',
      result: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const newQuery = {
      address: this.state.addr,
      name: this.state.name,
      placetype: this.state.placetype
    };

    axios.post('/getplaces', qs.stringify(newQuery))
    .then((result) => {
      this.setState({result: result.data});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>

      <div className="bgimg w3-display-container w3-center w3-center w3-grayscale-min" id="form">

        <div className="jumbotron text-center">
          <h1>Search Page</h1>
          <p>For searching for places of interest</p>
        </div>
          <img src={header}  className="w3-margin" alt="img" width="800" height="500" />

          <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
            <span className="w3-tag">For Searching places of Interest</span>
          </div>
          <div className="w3-display-middle w3-center">
            <span className="w3-text-white ">Search Places</span>
          </div>

          <div className="w3-display-bottomright w3-center w3-padding-large">
            <span className="w3-text-black">15 Adr street, 5015</span>
          </div>
        </div>


        <div className="w3-row w3-center w3-card w3-padding text-center">
            <div className="col-sm-12">

              <div className="form-group">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="addr">Enter address:</label>
                <input
                  id="addr"
                  name="addr"
                  className="form-control"
                  type="text"
                  placeholder="Enter address..."
                  value={this.state.addr}
                  onChange={this.onChange}
                />
                <p></p>
                <label htmlFor="name">Enter name:</label>
                <input
                  id="name"
                  name="name"
                  className="form-control"
                  type="text"
                  placeholder="Enter name..."
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <p></p>
                <label htmlFor="places-type">Select type of place:</label>
                <p></p>
                  <select
                    id="places-type"
                    name="placetype"
                    className="form-control"
                    value={this.state.placetype}
                    onChange={this.onChange}
                  >

                    <option value="cafe">cafe</option>

                  </select>
                <p></p>
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>

        <Result list={this.state.result} />
      </div>
    );
  }
}

export default Form;
