import React, { Component } from 'react';
import './App.css';
import BowlingArea from './components/BowlingArea/BowlingArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="logo-img" src={require('./redzone.png')} alt="redzone-logo"/>
          <h1 className="App-title">BOWLING</h1>
        </header>
        <img className="bowling-img" src={require('./bowl.jpg')} />
        <BowlingArea />
      </div>
    );
  }
}

export default App;
