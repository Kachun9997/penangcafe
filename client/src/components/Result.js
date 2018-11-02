import React from 'react';
import './Result.css';

const Result = props => {
  //console.log(props.list.length);

  return (
    <div className="table">
    <div className="row container-fluid">
      <table className="tabletable-striped">
        <tbody>
          <tr>
            <th className="thstyle">Name</th>
            <th className="thstyle">Address </th>
          </tr>
          {props.list.map(result => {
            return (
              <tr key={result.name}>
                <td className="tdstyle">{result.name}</td>
                <td className="tdstyle">{result.address}</td>
                <td className="tdstyle">
                  <img src={result.photo_reference} width="600" height="400" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Result;
