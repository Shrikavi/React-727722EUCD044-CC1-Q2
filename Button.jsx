import React, { Component } from 'react';
import './App.css';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "Sunny" };
  }

  handlechange = () => {
    this.setState({ input: "Cloudy" });
  };

  render() {
    return (
      <div className='divi' style={{ textAlign: 'center' }}>
        <h1>City: Coimbatore</h1>
        <h1>Weather: {this.state.input}</h1>
        <button
          onClick={this.handlechange}
          style={{
            backgroundColor: 'skyblue',
            fontSize: '20px',
            borderRadius: '10px',
            padding: '10px 20px',
            color: 'white', // Set the text color to white
          }}
        >
          Refresh weather
        </button>
      </div>
    );
  }
}
