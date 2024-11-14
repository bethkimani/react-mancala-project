import React from 'react';

const Home = () => {
  return (
    <div className="home-section">
      <h2>Welcome to Mancala!</h2>
      <p>Get ready to play the classic game of strategy and skill.</p>
      <a href="#start" className="cta-button">Start Game</a>
      <div className="marquee">
        <div className="marquee-content">Join us for exciting games and challenges!</div>
      </div>
    </div>
  );
};

export default Home;