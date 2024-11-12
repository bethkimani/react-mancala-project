import React from "react";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="marquee">
        <span>Welcome to the Mancala Game! Gather your friends and family for a fun experience.</span>
      </div>
      <img src="/src/assets/download.jpeg" alt="Mancala Game" className="home-image" />
      <h2>Welcome to Mancala Game!</h2>
      <p>Experience the ancient game of Mancala. Gather your friends and family for a fun and strategic gameplay!</p>
      <a href="#game-board" className="cta-button">Start Playing Now</a>
    </section>
  );
};

export default Home;