// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header>
      <nav role="navigation">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#game-board">Play Mancala</a>
      </nav>
    </header>
  );
};

export default Header;