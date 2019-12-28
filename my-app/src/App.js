import React, { Component } from 'react';
import logo from './logo.svg';
import Section from './section.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to W A S music</h2>
        </div>

        <Section />
        <Section />
        <Section />

      </div>

    );
  }
}

export default App;
