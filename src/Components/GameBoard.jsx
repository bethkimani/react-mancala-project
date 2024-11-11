<<<<<<< HEAD
import  { useState } from 'react';
import Pocket from './Pocket';
import ScoreBoard from './ScoreBoard';
import VeteranButton from './Veteran';

const GameBoard = () => {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  
  // Initialize pockets with 4 stones each (a common setup in Mancala)
  const initialStones = 4;
  const [sideOnePockets, setSideOnePockets] = useState(Array(6).fill(initialStones));
  const [sideTwoPockets, setSideTwoPockets] = useState(Array(6).fill(initialStones));
  
  // Function to handle moves (simplified for this example)
  const handlePocketClick = (side, index) => {
    if (side === "one") {
      const newSideOnePockets = [...sideOnePockets];
      let stones = newSideOnePockets[index];
      newSideOnePockets[index] = 0; // Clear the stones from the clicked pocket

      // Simple distribution logic (can be customized for actual game rules)
      let currentIndex = index + 1;
      while (stones > 0) {
        if (currentIndex < newSideOnePockets.length) {
          newSideOnePockets[currentIndex]++;
          currentIndex++;
          stones--;
        } else {
          setPlayerOneScore((prev) => prev + 1); // Add extra stone to player score (as an example)
          stones--;
        }
      }
      setSideOnePockets(newSideOnePockets);
    } else {
      const newSideTwoPockets = [...sideTwoPockets];
      let stones = newSideTwoPockets[index];
      newSideTwoPockets[index] = 0;

      let currentIndex = index + 1;
      while (stones > 0) {
        if (currentIndex < newSideTwoPockets.length) {
          newSideTwoPockets[currentIndex]++;
          currentIndex++;
          stones--;
        } else {
          setPlayerTwoScore((prev) => prev + 1);
          stones--;
        }
      }
      setSideTwoPockets(newSideTwoPockets);
    }
  };

  return (
    <div>
      <ScoreBoard playerOneScore={playerOneScore} playerTwoScore={playerTwoScore} />
      <div className="board">
        <div className="mancala-one">{playerOneScore}</div>
        <div className="container">
          {/* Side one pockets */}
          <div className="side-one">
            {sideOnePockets.map((stones, index) => (
              <Pocket key={index} stones={stones} onClick={() => handlePocketClick("one", index)} />
            ))}
          </div>
          {/* Side two pockets */}
          <div className="side-two">
            {sideTwoPockets.map((stones, index) => (
              <Pocket key={index} stones={stones} onClick={() => handlePocketClick("two", index)} />
            ))}
          </div>
        </div>
        <div className="mancala-two">{playerTwoScore}</div>
      </div>
      <VeteranButton />
    </div>
  );
};

export default GameBoard;
=======
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
>>>>>>> 6f68eba778a7c73c34521278b6a1e03a9708c7c1
