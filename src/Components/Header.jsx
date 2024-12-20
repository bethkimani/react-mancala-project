// Components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/board">Board</Link>
        <Link to="/instructions">Instructions</Link>
      </nav>
    </header>
  );
};

export default Header;