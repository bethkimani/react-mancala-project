import React from 'react';
import PropTypes from 'prop-types';
const ScoreBoard = ({ playerOneScore, playerTwoScore }) => (
  <div id="scoreboard">
    <div id="scoreboard-one">
      <p>Player 1:</p>
      <p id="score-one">{playerOneScore}</p>  {/* Displays Player 1's score */}
    </div>
    <div id="scoreboard-two">
      <p>Player 2:</p>
      <p id="score-two">{playerTwoScore}</p>  {/* Displays Player 2's score */}
    </div>
  </div>
);

ScoreBoard.propTypes = {
  playerOneScore: PropTypes.number.isRequired,  // Validate playerOneScore as a number
  playerTwoScore: PropTypes.number.isRequired   // Validate playerTwoScore as a number
};
export default ScoreBoard;
