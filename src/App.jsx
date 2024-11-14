import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Board from './Components/Board';
import Mancala from './Components/Mancala'; // Import Mancala component
import Instructions from './Components/Instructions'; // Import Instructions component
import Pocket from './Components/Pocket'; // Import Pocket component
import Scoreboard from './Components/Scoreboard'; // Import Scoreboard component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home component for the root route */}
          <Route path="/about" element={<About />} />  {/* About component for the /about route */}
          <Route path="/board" element={<Board />} />  {/* Board component for the /board route */}
          <Route path="/mancala" element={<Mancala />} />  {/* Mancala component for the /mancala route */}
          <Route path="/instructions" element={<Instructions />} />  {/* Instructions component for the /instructions route */}
          <Route path="/pocket" element={<Pocket />} />  {/* Pocket component for the /pocket route */}
          <Route path="/scoreboard" element={<Scoreboard />} />  {/* Scoreboard component for the /scoreboard route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;