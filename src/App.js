import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/index.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '我是首页的内容'
    }
  }
  update(name) {
    this.setState({
      name
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Home update={(name) => this.update(name)} name={this.state.name}></Home>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
