import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor(props) {
    super(props);

  }
  calculate(event) {
    event.preventDefault();
    console.log("should calculate");
  }
  render() {
      return (
        <div style={{marginTop: 50}}>
            <form className="m-t-2" onSubmit={this.calculate}>
                <div className="form-group">
                    <label>Start Date</label>
                    <input type="date" className="form-control"/>
                </div>
                 <div className="form-group">
                    <label>Number of days</label>
                    <input type="numer" className="form-control" placeholder="Days"/>
                </div>
                 <div className="form-group">
                    <label>Country Code</label>
                    <input type="text" className="form-control" placeholder="Code"/>
                </div>
                <button type="submit" className="btn btn-default">Calculate</button>
            </form>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{textAlign: 'center'}}>
                        <td colSpan="7" >Month Here</td>
                    </tr>
                    <tr>
                        <td>S</td>
                        <td>M</td>
                        <td>T</td>
                        <td>W</td>
                        <td>T</td>
                        <td>F</td>
                        <td>S</td>
                    </tr>
                     <tr>
                        <td>S</td>
                        <td>M</td>
                        <td>T</td>
                        <td>W</td>
                        <td>T</td>
                        <td>F</td>
                        <td>S</td>
                    </tr>
                     <tr>
                        <td>S</td>
                        <td>M</td>
                        <td>T</td>
                        <td>W</td>
                        <td>T</td>
                        <td>F</td>
                        <td>S</td>
                    </tr>
                </tbody>
            </table>

        </div>
        
    );
  }  
}

ReactDOM.render(<App/>, document.querySelector('.container'));