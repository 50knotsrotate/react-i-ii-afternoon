import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import Buttons from './components/Buttons'
import data from './data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      dataIndex: 0,
      data,
      currentData: null
    }
  }
  
  componentWillMount() {
    this.setState({
      currentData: data[this.state.dataIndex]
    })
    
  }



  changeCard(upOrDown) { 
    var newIndex;
    upOrDown == 'up' ? newIndex = this.state.dataIndex + 1 : newIndex = this.state.dataIndex -1
    this.setState({
      dataIndex: newIndex,
      currentData: data[newIndex]
    })
  }

  render() {
    return (
      <div className = 'App'>
      
        <Header />
        < div className = 'card-whole' >
        <Card
          currentCard={this.state.currentData}
        />
        <Buttons
          changeCard={this.changeCard.bind(this)}
        />
        </div>
      </div>
    );
  }
}

export default App;
