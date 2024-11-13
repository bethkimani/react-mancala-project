// components/About.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import mancalaBoard from '../assets/download.jpeg'; // Adjust the path based on where you save the image
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <section id="about">
      <h1>About Mancala</h1>
      <img src={mancalaBoard} alt="Mancala Board" />
      <p>
        Mancala is a traditional strategy game focused on capturing stones, with roots tracing back to ancient Africa, particularly Ethiopia. 
        This game, believed to be over 3,000 years old, is often regarded as one of the oldest known games in the world. Mancala has no single creator; 
        instead, it evolved through various cultures and spread across Africa, the Middle East, and later around the globe, adapting in unique ways within different regions.
      </p>
      <h2>How to play:</h2>
      <ul>
        <li>The game begins with the player selecting a pocket on their side. These pockets are highlighted during your turn.</li>
        <li>The game moves in a counter-clockwise rotation and deposits 1 stone in each pocket along the way until the stones run out.</li>
        <li>The game will skip the computer&apos;s mancala, only placing your stones in the pockets and your mancala.</li>
        <li>If the final stone is placed in your mancala, your turn continues and you may select another pocket.</li>
        <li>If the final stone is placed in an empty pocket on your side, it may capture stones in the pocket directly across. The stones in both pockets will go to your mancala.</li>
        <li>When your turn ends, a &quot;Computer&apos;s Play&quot; button will appear. Select this to have the computer make its move.</li>
        <li>If you would prefer to play with a friend, just have them select a legal pocket during the computer&apos;s turn.</li>
        <li>The game ends when either player has collected more than 24 stones.</li>
        <li>Press the &quot;Play Again!&quot; button if you&apos;d like to try again.</li>
      </ul>
    </section>
  );
};

export default About;
