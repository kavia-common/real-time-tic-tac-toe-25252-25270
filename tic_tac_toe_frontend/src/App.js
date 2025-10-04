import React from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Board from './components/Board';
import useTicTacToe from './hooks/useTicTacToe';

// PUBLIC_INTERFACE
function App() {
  /** Main application entrypoint for the Tic Tac Toe game UI. */
  const {
    squares,
    isXNext,
    winner,
    winningLine,
    draw,
    scores,
    handleSquareClick,
    resetBoard,
    resetScores,
    currentPlayer
  } = useTicTacToe();

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Scoreboard
          scores={scores}
          currentPlayer={currentPlayer}
          winner={winner}
          draw={draw}
        />
        <Board
          squares={squares}
          onPlay={handleSquareClick}
          winningLine={winningLine}
        />
        <div className="controls">
          <button className="btn btn-primary" onClick={resetBoard}>Reset Board</button>
          <button className="btn btn-outline" onClick={resetScores}>New Game</button>
        </div>
        <footer className="footer">Made with 💙 using the Ocean Professional theme</footer>
      </div>
    </div>
  );
}

export default App;
