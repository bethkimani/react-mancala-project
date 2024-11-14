// Mancala.jsx
import React from 'react';

function Mancala({ playerNumber, pieces }) {
  return (
    <div className={`mancala mancala-${playerNumber}`}>
      <h3>Player {playerNumber} Mancala</h3>
      <div className="pieces">{pieces}</div>
    </div>
  );
}

export default Mancala;