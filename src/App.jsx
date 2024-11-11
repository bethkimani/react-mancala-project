// App.js

import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import GameBoard from './Components/GameBoard';
import Instructions from './Components/Instructions';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <GameBoard />
      <Instructions />
    </div>
  );
}

export default App;
