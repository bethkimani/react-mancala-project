import React from "react";
import InstructionCard from "./InstructionCard";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";


const instructions = [
  {
    text: "The game begins with the player selecting a pocket on their side. These pockets are highlighted during your turn.",
    img: image1,
  },
  {
    text: "The game moves in a counter-clockwise rotation and deposits 1 stone in each pocket along the way until the stones run out.",
    img: image2,
  },
  {
    text: "If the final stone is placed in an empty pocket on your side, it may capture stones in the pocket directly across.",
    img: image3,
  },
  {
    text: "Players take turns picking up all the stones from one of their pockets and distributing them in the following pockets.",
    img: image4,
  },
  {
    text: "If a player lands in their own Mancala, they get an extra turn.",
    img: image5,
  },
  {
    text: "The game ends when one player has no stones left in their pockets. The other player collects their stones.",
    img: image6,
  },
];

const Instructions = () => {
  return (
    <section className="instructions-section">
      <h2>How to Play</h2>
      <p>
        Mancala is a strategic game that involves capturing stones. Here are
        the basic rules:
      </p>
      <div className="instructions-grid">
        {instructions.map((instruction, index) => (
          <InstructionCard
            key={index}
            img={instruction.img}
            text={instruction.text}
            number={index + 1}  // Pass the step number directly
          />
        ))}
      </div>
      <a
        href="https://www.youtube.com/watch?v=-A-djjimCcM&t=41s&ab_channel=MissBrain%27sCoolMathVideos"
        target="_blank"
        rel="noopener noreferrer"
        className="instruction-link"
      >
        Watch How To Play
      </a>
    </section>
  );
};

export default Instructions;
