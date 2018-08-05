import React, { Component } from 'react';
import './App.css';
import ShowName from './ShowName'
import Clock from './Clock';
import Toggle from './Toggle'

class App extends Component {
  render() {
    return (
      <div>
    <ShowName name="Shayan" />
    <ShowName name="ali" />
    <ShowName name="gholi" />
    <Clock />
    <Clock />
    <Clock />
    <Clock />
    <Clock />
    <Clock />
    <Toggle />  
    </div>
    );
  }
}

export default App;
