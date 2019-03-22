import React, { Component } from 'react';
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
      data: data,
      currentData: null
    }
  }
  
  componentWillMount() {
    this.setState({
      currentData: data[this.state.dataIndex]
    })
    
  }

  changeCard(val) { 
    var newIndex;
    val == 'up' ? newIndex = (this.state.dataIndex + 1) % 25 : newIndex = this.state.dataIndex > 0 ? this.state.dataIndex -1 : newIndex = 24
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
