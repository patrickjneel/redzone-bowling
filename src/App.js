import React, { Component } from 'react';
import './App.css';
import BowlingArea from './components/BowlingArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="logo-img" src={require('./redzone.png')} />
          <h1 className="App-title">BOWLING</h1>
        </header>
        <BowlingArea />
      </div>
    );
  }
}

export default App;
