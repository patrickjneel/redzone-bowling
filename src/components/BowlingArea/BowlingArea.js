import React, { Component } from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './bowling-area.css';

class BowlingArea extends Component {
  constructor() {
    super()
    this.state = {
      playerName: '',
      scoreArr: []
    }
  }

  // playerName(event) {
  //   console.log(event.target.value)
  //  return this.setState({playerName: event.target.value})
  // }

  submitScore() {
    console.log('scoreed kljdklfadjflkd')
  }

  render() {
    return (
      <div className="bowling-area">
        <ScoreBoard />
        <div className="bowling-score-area">
          <input placeholder="Player 1 Enter Name"/>
          <button>
            Submit Name
          </button>
          <input placeholder="Roll Away!!"/>
          <button onClick={this.submitScore}>
            Submit Score
          </button>
        </div>
      </div>
    )
  }
}

export default BowlingArea;
