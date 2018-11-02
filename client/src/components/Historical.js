import React, { Component } from 'react';
import axios from 'axios';
import header from './header.jpg';
import './Historical.css';

class Historical extends Component {
  constructor() {
    super();
    this.state = {
      addr: '',
      name: '',
      placetype: '',
      errors: {},
      result: [
        {
          address: '',
          name: '',
          photo_reference: ''
        }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ result: [] });
    axios
      .post('/delete')
      .then(result => {
        console.log('All docs deleted');
      })
      .catch(error => {
        console.log('Failed to delete all: ', error);
      });
  }

  componentDidMount() {
    axios
      .post('/historical')
      .then(result => {
        this.setState({ result: result.data });
      })
      .catch(error => {
        console.log('error+++++ >:', error);
      });
  }

  render() {
    return (


            <div>

            <div className="bgimg w3-display-container w3-center w3-center w3-grayscale-min" id="form">

              <div className="jumbotron text-center">
                <h1>Delete Page</h1>
                <p>Previous Search Results</p>
              </div>
                <img src={header}  className="w3-margin" alt="img" width="800" height="500" />

                <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
                  <span className="w3-tag">Previous Search Results</span>
                </div>
                <div className="w3-display-middle w3-center">
                  <span className="w3-text-white ">Delete Page</span>
                </div>

                <div className="w3-display-bottomright w3-center w3-padding-large">
                  <span className="w3-text-black">15 Adr street, 5015</span>
                </div>
              </div>


        <div className="row container-fluid">
          <div className="col-md-4 text-center">
            <button
              className="btn btn-primary btn-lg"
              onClick={this.handleClick}
            >
              Delete All
            </button>
            <p />
          </div>
          <table className="tabletable-striped">
            <tbody>
              <tr>
                <th  className="thstyle" >Name</th>
                <th className="thstyle">Address</th>
              </tr>
              {this.state.result.map(result => {
                return (
                  <tr key={result.name}>
                    <td className="tdstyle">{result.name}</td>
                    <td className="tdstyle">{result.address}</td>
                    <td className="tdstyle">
                      <img src={result.photo_reference} width="100px" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}

export default Historical;
