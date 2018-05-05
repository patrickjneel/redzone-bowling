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

  handleInput = (event) => {
   this.setState({
      playerName: event.target.value
    });
  };

  submitScore = (event) => {
    // if(typeof event.target.value !== 'number' ) {
    //   return (
    //     <div>Pleae enter a number</div>
    //   )
    // }
    this.state.scoreArr.push(event.target.value)
    // this.setState({ scoreArr: scores })
  }

  render() {
    console.log(this.state.scoreArr)
    return (
      <div className="bowling-area">
        <ScoreBoard name={this.state.playerName}/>
        <div className="bowling-score-area">
          <div className="input-and-btn-area">
            <input 
              className="player-inputs"
              placeholder="Player 1 Enter Name"
              value={this.state.playerName}
              onChange={this.handleInput}
            />
            <input 
              className="player-inputs"
              placeholder="Roll Away!!"
              value={this.state.scoreArr}
              onChange={this.submitScore}
            />
            <button onClick={this.submitScore}>
              Submit Score
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default BowlingArea;
