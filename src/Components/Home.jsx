import React from 'react';
import homeImage from '../assets/home.jpeg'; // Importing the image from the assets folder

const Home = () => {
  return (
    <div className="home-section">
      <h2>Welcome to Mancala!</h2>
      <p>Get ready to play the classic game of strategy and skill.</p>
      
      {/* Image added */}
      <img src={homeImage} alt="Mancala game home" className="home-image" />

      <div className="marquee">
        <div className="marquee-content">Welcome to Mancala Game!</div>
      </div>
    </div>
  );
};

export default Home;
