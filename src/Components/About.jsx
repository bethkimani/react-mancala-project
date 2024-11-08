// components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h1>About Mancala</h1>
      <img src="download.jpeg" alt="Mancala Board" />
      <p>Mancala is a strategic game of capturing stones.</p>
      <h2>How to play:</h2>
      <ul>
        <li>The game begins with the player selecting a pocket on their side...</li>
        {/* Add remaining instructions here */}
      </ul>
    </section>
  );
};

export default About;