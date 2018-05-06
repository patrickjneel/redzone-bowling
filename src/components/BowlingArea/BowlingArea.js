import React, { Component } from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './bowling-area.css';

class BowlingArea extends Component {
  constructor() {
    super()
    this.state = {
      initialPins: 11,
      remaningPins: 10,
      playerName: '',
      playerScore: '',
      scoreArr: [],
      scoreObj: {
        10: 0,
        9: [0, 1]
        8: 2,
        7: 3,
        6: 4,
        5: 5,
        4: 6,
        3: 7,
        2: 8,
        1: 9,
        0: 10 
      }
    }
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  addScore = (event) => {  
    if(this.state.scoreArr.length < 20){

      if(this.state.scoreArr.length % 2 === 0) {
        const randomNum = Math.floor(Math.random() * Math.floor(this.state.initialPins))
        const scoreArr = [...this.state.scoreArr, randomNum];
        this.setState({ remaningPins: randomNum, scoreArr })
          console.log(scoreArr)
      }

      if(this.state.scoreArr.length % 2 !== 0) {
        const remaningTest = Math.floor(Math.random() * Math.floor(this.state.scoreObj[this.state.remaningPins]));


        const scoreArr = [...this.state.scoreArr, remaningTest];
        this.setState({ scoreArr });
          console.log(scoreArr)
      }

        



      // const scoreArr = [...this.state.scoreArr, this.state.playerScore];
      // this.setState({ scoreArr });
      // this.setState({ playerScore: ''});
    }
    event.preventDefault();
  }

  render() {
    console.log(this.state.scoreArr)
    return (
      <div className="bowling-area">
        <ScoreBoard 
          name={this.state.playerName}
          scoreArray={this.state.scoreArr}
        />
       
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
              // disabled={
              //   this.state.playerScore > 10 || 
              //   this.state.playerScore < 0 ||
              //   this.state.playerScore === '' 
              // }
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
