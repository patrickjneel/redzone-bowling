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
   this.setState({
      playerName: event.target.value,
    });
  };

  addScore = (event) => {
    console.log('hi')
    const scores = event.target.value
    const scoreArr = [...this.state.scoreArr, scores]
    this.setState({ scoreArr })
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
              onChange={this.playerScore}
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
