// Instructions.jsx
import React from 'react';

const instructions = [
  {
    text: "The game begins with the player selecting a pocket on their side. These pockets are highlighted during your turn.",
    img: require('./assets/step one.jpeg') 
  },
  {
    text: "The game moves in a counter-clockwise rotation and deposits 1 stone in each pocket along the way until the stones run out.",
    img: require('./assets/step two.jpeg') 
  },
  {
    text: "If the final stone is placed in an empty pocket on your side, it may capture stones in the pocket directly across.",
    img: require('./assets/step three.jpeg') 
  },
  {
    text: "Players take turns picking up all the stones from one of their pockets and distributing them in the following pockets.",
    img: require('./assets/step four.jpeg') 
  },
  {
    text: "If a player lands in their own Mancala, they get an extra turn.",
    img: require('./assets/step five.jpeg') 
  },
  {
    text: "The game ends when one player has no stones left in their pockets. The other player collects their stones.",
    img: require('./assets/step six.jpeg') 
  },
];

const Instructions = () => {
  return (
    <section>
      <h2>How to Play</h2>
      <p>
        Mancala is a strategic game that involves capturing stones. Here are the basic rules:
      </p>
      {instructions.map((instruction, index) => (
        <div key={index} className="instructions-container">
          <p>{instruction.text}</p>
          <img src={instruction.img} alt={`Instruction ${index + 1}`} />
        </div>
      ))}
      <a href="https://www.youtube.com/watch?v=-A-djjimCcM&t=41s&ab_channel=MissBrain%27sCoolMathVideos">
        Watch How To Play
      </a>
    </section>
  );
};

export default Instructions;