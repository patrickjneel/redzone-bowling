import React, { Component } from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './bowling-area.css';

class BowlingArea extends Component {
  constructor() {
    super()
    this.state = {
      playerName: ''
    }
  }

  playerName(event) {
    console.log(event.target.value)
   return this.setState({playerName: event.target.value})
  }

  render() {
    return (
      <div className="bowling-area">
        <ScoreBoard />
        <input placeholder="Player 1 Enter Name"
          onChange={(event) => this.playerName(event)}
          value={this.setState.playerName} 
        />
        <button 
          onClick={(event) => this.playerName(event)}
          value={this.setState.playerName} 
        >
          Submit Name
        </button>
      </div>
    )
  }
}

export default BowlingArea;
