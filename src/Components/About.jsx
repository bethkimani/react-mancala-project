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
        <li>The game begins with the player selecting a pocket on their side. These pockets are highlighted during your turn.</li>
        <li>The game moves in a counter-clockwise rotation and deposits 1 stone in each pocket along the way until the stones run out.</li>
        <li>The game will skip the computer's mancala, only placing your stones in the pockets and your mancala.</li>
        <li>If the final stone is placed in your mancala, your turn continues and you may select another pocket.</li>
        <li>If the final stone is placed in an empty pocket on your side, it may capture stones in the pocket directly across. The stones in both pockets will go to your mancala.</li>
        <li>When your turn ends, a "Computer's Play" button will appear. Select this to have the computer make its move.</li>
        <li>If you would prefer to play with a friend, just have them select a legal pocket during the computer's turn.</li>
        <li>The game ends when either player has collected more than 24 stones.</li>
        <li>Press the "Play Again!" button if you'd like to try again.</li>
      </ul>
    </section>
  );
};

export default About;
