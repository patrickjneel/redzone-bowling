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

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
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
            value={number}>{number}</button>
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
      ? this.completeTurn(event)
      : this.setState({ scoreArr, remaningPins: [] });
    }
  }

  completeTurn = (event) => {
    const {value} = event.target;
    const scoreArr = [...this.state.scoreArr, value];
    const arrLength = this.state.scoreArr.length;
    this.setState({ scoreArr, remaningPins: this.state.scoreObj[value] })
    //if {
        //setState({[...scorArr, 0], remaningPins: [] })
      //}
  }


  render() {
    return (
      <div className="bowling-area">

          <div className="button-container">
            {this.showScores()}
          </div>

        <ScoreBoard 
          scoreArray={this.state.scoreArr}
        />
      </div>
    )
  }
}

export default BowlingArea;
