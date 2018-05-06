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
    if(this.state.scoreArr.length < 20){
      const scoreArr = [...this.state.scoreArr, this.state.playerScore];
      this.setState({ scoreArr });
      this.setState({ playerScore: ''});
    }
    event.preventDefault();
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
        <div className="rules">
          Enter a Number 0-10 button is disabled if a number over 10 input or less than 0
          </div>
          <form className="input-and-btn-area">
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
            <button 
              onClick={this.addScore}
              disabled={
                this.state.playerScore > 10 || 
                this.state.playerScore < 0 ||
                this.state.playerScore === '' 
              }
            >
              Submit Score
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default BowlingArea;
