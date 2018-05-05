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

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  addScore = (event) => {
    const scoreArr = [...this.state.scoreArr, this.state.playerScore];
    this.setState({ scoreArr });
    this.setState({ playerScore: ''});
  }

  gameOver = () => {
      if(this.state.scoreArr.length > 20) {
        return (
          <div>
           Game Over
          </div>
        )
      }
    }

  render() {
    return (
      <div className="bowling-area">
        <ScoreBoard 
          name={this.state.playerName}
          scoreArray={this.state.scoreArr}
        />
        {
          this.gameOver()
        }
        <div className="bowling-score-area">
          <div className="input-and-btn-area">
            <input 
              className="player-inputs"
              placeholder="Enter Player Name"
              value={this.state.playerName}
              onChange={this.handleInputChange}
              maxLength={8}
              name="playerName"
            />
            <input 
              className="player-inputs"
              placeholder="Roll Away!!"
              value={this.state.playerScore}
              onChange={this.handleInputChange}
              maxLength={2}
              name="playerScore"
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
