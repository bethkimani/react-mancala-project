// Board.jsx
import React, { useState, useEffect } from 'react';
import Pocket from './Pocket';

function Board() {
  const [pocketsState, setPocketsState] = useState(Array(12).fill(4)); // 12 pockets, each with 4 pieces
  const [mancalaState, setMancalaState] = useState([0, 0]); // Player 1 and 2 Mancalas
  const [activePocket, setActivePocket] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(0); // 0 for Player 1, 1 for Player 2
  const [moveCount, setMoveCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (moveCount < 10 && !gameOver) {
      const interval = setInterval(() => {
        const pocketIndex = Math.floor(Math.random() * 6) + (currentPlayer * 6); // Randomly select a pocket for the current player
        animatePieceDistribution(pocketIndex);
      }, 3000); // Every 3 seconds, pick a new pocket to distribute pieces

      return () => clearInterval(interval);
    } else if (moveCount >= 10) {
      setGameOver(true);
    }
  }, [moveCount, currentPlayer, gameOver]);

  const animatePieceDistribution = (startIndex) => {
    let piecesToDistribute = pocketsState[startIndex];
    if (piecesToDistribute === 0) return; // If empty, skip

    let newPocketsState = [...pocketsState];
    newPocketsState[startIndex] = 0; // Empty starting pocket
    setActivePocket(startIndex);

    let currentPocket = startIndex;

    const interval = setInterval(() => {
      currentPocket = (currentPocket + 1) % 12;

      // If current pocket is a Mancala, add piece to the correct player's Mancala
      if (currentPocket === 6 && currentPlayer === 0) {
        setMancalaState(prev => [prev[0] + 1, prev[1]]);
      } else if (currentPocket === 0 && currentPlayer === 1) {
        setMancalaState(prev => [prev[0], prev[1] + 1]);
      } else {
        // Otherwise, add piece to a regular pocket
        newPocketsState[currentPocket] += 1;
      }

      piecesToDistribute--;

      if (piecesToDistribute === 0) {
        clearInterval(interval); // Stop once all pieces are distributed
        setPocketsState(newPocketsState);
        setActivePocket(null);
        setMoveCount(prev => prev + 1); // Increment the move count
        setCurrentPlayer(prev => (prev === 0 ? 1 : 0)); // Switch player
      } else {
        setPocketsState([...newPocketsState]);
      }
    }, 500); // Delay for animation
  };

  const determineWinner = () => {
    if (mancalaState[0] > mancalaState[1]) {
      return "Player 1 Wins!";
    } else if (mancalaState[0] < mancalaState[1]) {
      return "Player 2 Wins!";
    } else {
      return "It's a Tie!";
    }
  };

  return (
    <main>
      {/* Scoreboard Section */}
      <div className="scoreboard">
        <div className="scoreboard-player">
          <p>Player 1</p>
          <p>{mancalaState[0]}</p>
        </div>
        <div className="scoreboard-player">
          <p>Player 2</p>
          <p>{mancalaState[1]}</p>
        </div>
      </div>

      {gameOver ? (
        <div className="game-over">
          <h2>{determineWinner()}</h2>
        </div>
      ) : (
        <div className="board">
          {/* Player 2's Mancala on the left */}
          <div className="mancala-two">{mancalaState[1]}</div>

          <div className="container">
            {/* Top row of pockets (Player 2's side) */}
            <div className="pocket-row side-one">
              {[...Array(6)].map((_, idx) => (
                <Pocket key={idx} active={activePocket === idx} pieces={pocketsState[idx]} />
              ))}
            </div>

            <div className="row-gap"></div>

            {/* Bottom row of pockets (Player 1's side) */}
            <div className="pocket-row side-two">
              {[...Array(6)].map((_, idx) => (
                <Pocket key={idx + 6} active={activePocket === idx + 6} pieces={pocketsState[idx + 6]} />
              ))}
            </div>
          </div>

          {/* Player 1's Mancala on the right */}
          <div className="mancala-one">{mancalaState[0]}</div>
        </div>
      )}
    </main>
  );
}

export default Board;