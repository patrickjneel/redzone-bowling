import React, { Component } from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './bowling-area.css';

class BowlingArea extends Component {
  constructor() {
    super()
    this.state = {
      playerName: '',
      playerScore: '',
      scoreArr: []
    }
  }

  handleInput = (event) => {
   this.setState({ playerName: event.target.value });
  };

  handleScore = (event) => {
    this.setState({ playerScore: event.target.value });
  };

  addScore = (event) => {
    const scoreArr = [...this.state.scoreArr, this.state.playerScore]
    this.setState({ scoreArr })
    this.setState({ playerScore: ''}) 
  }

  render() {
    return (
      <div className="bowling-area">
        <ScoreBoard 
          name={this.state.playerName}
          scoreArray={this.state.scoreArr}
        />
        <div className="bowling-score-area">
          <div className="input-and-btn-area">
            <input 
              className="player-inputs"
              placeholder="Enter Player Name"
              value={this.state.playerName}
              onChange={this.handleInput}
              maxLength={8}
            />
            <input 
              className="player-inputs"
              placeholder="Roll Away!!"
              value={this.state.playerScore}
              onChange={this.handleScore}
              maxLength={2}
            />
            <button onClick={this.addScore}>
              Submit Score
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default BowlingArea;
