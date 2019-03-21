import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import Buttons from './components/Buttons'

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Header />
        <Card />
        <Buttons />
        
      </div>
    );
  }
}

export default App;
