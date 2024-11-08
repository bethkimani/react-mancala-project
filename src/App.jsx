// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import GameBoard from './components/GameBoard';
import Instructions from './components/Instructions';

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
