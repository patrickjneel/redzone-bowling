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
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-total">300</td>
          </tr>
          <tr>
            <td className="player-name">Maisie</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-score">8</td>
            <td className="player-total">300</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ScoreBoard;
