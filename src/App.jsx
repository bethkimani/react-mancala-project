import React from 'react';
import Header from './Components/Header';
import Board from './Components/Board';
import Scoreboard from './Components/Scoreboard';
import Pocket from './Components/Pocket';
import Instructions from './Components/Instructions';
import Home from './Components/Home';
import About from './Components/About';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/> 
      <About/>

      
      
      <Scoreboard />
      <Board />
    </div>
  )
}

export default App;