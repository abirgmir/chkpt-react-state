import './App.css';
import React, { Component } from 'react'
import Profile from './Component/Profile';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      show : false 
    }
  }
  toggel = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      <div className='App'>
        <button onClick={this.toggel}>Show</button>
        {this.state.show ? <Profile /> : null }
        
      </div>
    )
  }
}

