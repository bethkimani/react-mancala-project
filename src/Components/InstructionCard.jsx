import React from "react";

const InstructionCard = ({ img, text, number }) => {
  return (
    <div className="instruction-card">
      <div className="step-number">{number}</div>
      <img src={img} alt="Instruction step" className="instruction-image" />
      <p>{text}</p>
    </div>
  );
};

export default InstructionCard;
