import React from 'react';
import './score-board.css';

const ScoreBoard = () => {
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
            <th className="totals">Total</th>
          </tr>
          <tr>
            <td className="player-name">Norman</td>
            <td className="player-score">
             <span className="frame-score">8</span>
             <span className="frame-score">2</span>
            </td>
            <td className="player-score">
             <span className="frame-score">7</span>
             <span className="frame-score">0</span>
            </td>
            <td className="player-score">
             <span className="frame-score">8</span>
             <span className="frame-score">2</span>
            </td>
            <td className="player-score">
             <span className="frame-score">0</span>
             <span className="frame-score">7</span>
            </td>
            <td className="player-score">
             <span className="frame-score">8</span>
             <span className="frame-score">2</span>
            </td>
            <td className="player-score">
             <span className="frame-score">6</span>
             <span className="frame-score">2</span>
            </td>
            <td className="player-score">
             <span className="frame-score">0</span>
             <span className="frame-score">0</span>
            </td>
            <td className="player-score">
             <span className="frame-score">10</span>
             <span className="frame-score">0</span>
            </td>
            <td className="player-score">
             <span className="frame-score">5</span>
             <span className="frame-score">5</span>
            </td>
            <td className="player-score">
             <span className="frame-score">4</span>
             <span className="frame-score">2</span>
            </td>
            <td className="player-total">300</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ScoreBoard;
