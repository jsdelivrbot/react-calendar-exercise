import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        startDate: null,
        numberOfDays: null,
        countryCode: null,
        endDate: null
    }
    this.calculate = this.calculate.bind(this);
  }
  calculate(event) {
    event.preventDefault();
    console.log("should calculate", this.state);
  }
  
  renderCalendar() {
    let currentDate = moment(this.state.startDate);
    let endDate = moment(this.state.startDate).add(this.state.numberOfDays, 'days');

    const days = [0,1,2,3,4,5,6];
    let renderedDays = [];
    let weeks = [];
    while(endDate.isAfter(currentDate)) {
        for(var i = 0; i <= 6; i++) {
            if(currentDate.day() !== i) {
            renderedDays.push(<td className="invalid"></td>);
            } else if (currentDate.day() === i && endDate.isAfter(currentDate)){
                renderedDays.push(<td>{currentDate.date()}</td>);          
                currentDate.add(1, 'days');
            } else {
                renderedDays.push(<td className="invalid"></td>);
            }
        }
        
        weeks.push(<tr>
            {renderedDays.map((d)=>{
                return d;
            })}
            </tr>);
        renderedDays = [];
    }

    return(
    <table className="table table-hover" style={{marginTop: 50}}>
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
                <td colSpan="7" >{currentDate.format('MMM')}</td>
            </tr>
            {weeks.map((w)=>{
                return w;
            })}
        </tbody>
    </table>
    )
  }
  
  render() {
      return (
        <div style={{marginTop: 50}}>
            <form className="m-t-2" onSubmit={this.calculate}>
                <div className="form-group">
                    <label>Start Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        value={this.state.startDate} 
                        onChange={(event) => this.setState({startDate: event.target.value})}/>
                </div>
                 <div className="form-group">
                    <label>Number of days</label>
                    <input
                        type="numer" 
                        className="form-control" 
                        placeholder="Days" 
                        value={this.state.numberOfDays} 
                        onChange={(event) => this.setState({numberOfDays: event.target.value})}/>
                </div>
                 <div className="form-group">
                    <label>Country Code</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Code"
                        value={this.state.countryCode} 
                        onChange={(event) => this.setState({countryCode: event.target.value})}/>
                </div>
                <button type="submit" className="btn btn-default">Calculate</button>
            </form>
            { this.renderCalendar() }
        </div>
        
    );
  }  
}

ReactDOM.render(<App/>, document.querySelector('.container'));