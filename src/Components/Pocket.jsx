import React from 'react';

const Pocket = ({ stones, onClick }) => {
  return (
    <button className="pocket" onClick={onClick}>
      {stones}
    </button>
  );
};

export default Pocket;


