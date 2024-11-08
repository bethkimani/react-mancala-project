import React, { useState } from 'react';

const GameBoard = () => {
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);

  return (
    <main id="game-board">
      <div className="board">
        {/* Render the board structure here, with mancala and pockets */}
        <div className="mancala-one"></div>
        <div className="container">
          {/* Player one and two board sections */}
        </div>
        <div className="mancala-two"></div>
      </div>
    </main>
  );
};

export default GameBoard;