import React from "react";
import "./score-board.css";

const ScoreBoard = ({ scoreArray, frameTotal }) => {
  let finalScore;

  if(!scoreArray.length) {
    <td className="player-total">0</td>;
  } else {
    if(scoreArray.length % 2 === 0) {
      finalScore = scoreArray.reduce((a,b) => parseInt(a) + parseInt(b));
      frameTotal.push(finalScore)
    }
      console.log(frameTotal)
      console.log(finalScore)
  }

  return (
    <div className="score-board-area">
      <table className="score-board">
        <tbody>
          <tr>
            <th className="name">Name</th>
            <th className="frames">1</th>
            <th className="frames">2</th>
            <th className="frames">3</th>
            <th className="frames">4</th>
            <th className="frames">5</th>
            <th className="frames">6</th>
            <th className="frames">7</th>
            <th className="frames">8</th>
            <th className="frames">9</th>
            <th className="frames">10</th>
          </tr>
          <tr>
            <td className="player-name">Enter Name</td>
            <td className="player-score">
              <div className="score-top">
                <span className="frame-score">{scoreArray[0]}</span>
                <span className="frame-score">{scoreArray[1]}</span>
              </div>
              <span className="frame-total">{frameTotal[0]}</span>
            </td>
            <td className="player-score">
              <div className="score-top">
                <span className="frame-score">{scoreArray[2]}</span>
                <span className="frame-score">{scoreArray[3]}</span>
              </div>
              <span className="frame-total">{frameTotal[1]}</span>
            </td>
            <td className="player-score">
              <div className="score-top">
                <span className="frame-score">{scoreArray[4]}</span>
                <span className="frame-score">{scoreArray[5]}</span>
              </div>
              <span className="frame-total">{frameTotal[2]}</span>
            </td>
            <td className="player-score">
              <div className="score-top">
                <span className="frame-score">{scoreArray[6]}</span>
                <span className="frame-score">{scoreArray[7]}</span>
              </div>
              <span className="frame-total">{frameTotal[3]}</span>
            </td>
            <td className="player-score">
              <div className="score-top">
                <span className="frame-score">{scoreArray[8]}</span>
                <span className="frame-score">{scoreArray[9]}</span>
              </div>
              <span className="frame-total">{frameTotal[4]}</span>
            </td>
            <td className="player-score">
              <div className="score-top">
                <span className="frame-score">{scoreArray[10]}</span>
                <span className="frame-score">{scoreArray[11]}</span>
              </div>
              <span className="frame-total">{frameTotal[5]}</span>
            </td>
            <td className="player-score">
              <div className="score-top">
                <span className="frame-score">{scoreArray[12]}</span>
                <span className="frame-score">{scoreArray[13]}</span>
              </div>
              <span className="frame-total">{frameTotal[6]}</span>
            </td>
            <td className="player-score">
              <div className="score-top">
                <span className="frame-score">{scoreArray[14]}</span>
                <span className="frame-score">{scoreArray[15]}</span>
              </div>
              <span className="frame-total">{frameTotal[7]}</span>
            </td>
            <td className="player-score">
              <div className="score-top">
                <span className="frame-score">{scoreArray[16]}</span>
                <span className="frame-score">{scoreArray[17]}</span>
              </div>
              <span className="frame-total">{frameTotal[8]}</span>
            </td>
            <td className="player-score">
              <div className="score-top">
                <span className="frame-score">{scoreArray[18]}</span>
                <span className="frame-score">{scoreArray[19]}</span>
                <span className="frame-score">{scoreArray[20]}</span>
              </div>
              <span className="frame-total">{frameTotal[9]}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreBoard;
