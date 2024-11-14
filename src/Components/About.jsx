// About.jsx
import React from 'react';
import mancalaBoard from '../assets/download.jpeg';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <section id="about">
      <h1>About Mancala</h1>
      <img src={mancalaBoard} alt="Mancala Board" />
      <p>
        Mancala is a traditional strategy game focused on capturing stones, with roots tracing back to ancient Africa, particularly Ethiopia.
        This game, believed to be over 3,000 years old, is often regarded as one of the oldest known games in the world.
      </p>
      <h2>How to Play:</h2>
      <p>
        For detailed instructions on how to play Mancala, please refer to the instructions section in the game board.
      </p>
    </section>
  );
};

export default About;