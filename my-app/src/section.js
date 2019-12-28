import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <div className="Section-header">
          <img src={"https://i1.sndcdn.com/avatars-000721200139-ji21wx-t500x500.jpg"} />
          <h2>Soundcloud</h2>
        </div>
      </div>
    );
  }
}

export default Section;