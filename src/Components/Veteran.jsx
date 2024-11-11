import {useState} from "react";

const VeteranButton = () => {
  const [isVeteranMode, setIsVeteranMode] = useState(false);

  const toggleMode = () => {
    setIsVeteranMode(!isVeteranMode);
  };

  return (
    <button onClick={toggleMode}>
      Veteran Mode: {isVeteranMode ? 'On' : 'Off'}
    </button>
  );
};

export default VeteranButton;