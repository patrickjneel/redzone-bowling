import React, { Component } from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './bowling-area.css';

class BowlingArea extends Component {
  constructor() {
    super()
    this.state = {
      initialPins: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
      remaningPins: [],
      scoreArr: [],
      frameTotal: [],
      scoreObj: {
        10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        9: [0, 1],
        8: [0, 1, 2],
        7: [0, 1, 2, 3],
        6: [0, 1, 2, 3, 4],
        5: [0, 1, 2, 3, 4, 5],
        4: [0, 1, 2, 3, 4, 5, 6],
        3: [0, 1, 2, 3, 4, 5, 6, 7],
        2: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        0: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
      }
    }
  }

  showScores = () => {
    if(!this.state.remaningPins.length) {
      return this.state.initialPins.map(number => {
        return (
            <button 
            className="score-btn" 
            onClick={this.addScore}
            value={number}>{number}</button>
        )
      })  
    } 

   return this.state.remaningPins.map(number => {
        return (
          <button 
            className="score-btn" 
            onClick={this.addScore}
            value={number}>{number}
          </button>
        )
      })

  }

  addScore = (event) => { 
    event.preventDefault();
    const {value} = event.target;
    const scoreArr = [...this.state.scoreArr, value];
    const arrLength = this.state.scoreArr.length;

    if(arrLength < 20){
      arrLength % 2 === 0 
      ? this.setState({ scoreArr, remaningPins: this.state.scoreObj[value] })
      : this.setState({ scoreArr, remaningPins: [] });
    }
  }

  gameOver = () => {
    if(this.state.scoreArr.length === 20) {
      return (
        <div className="gameOver">
          <h4 className="message">
            Game Over Your final Score was  {this.state.scoreArr.reduce((a,b) => parseInt(a) + parseInt(b))}
          </h4>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="bowling-area">
        <div className="button-container">
          {this.showScores()}
        </div>
        {this.gameOver()}
        <ScoreBoard 
          scoreArray={this.state.scoreArr}
          frameTotal={this.state.frameTotal}
        />
      </div>
    );
  };
};

export default BowlingArea;
