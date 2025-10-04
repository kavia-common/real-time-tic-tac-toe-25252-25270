import React from 'react';

// PUBLIC_INTERFACE
export default function Scoreboard({ scores, currentPlayer, winner, draw }) {
  /** Displays scores for X, O, ties, and current game status. */
  return (
    <div className="scoreboard" aria-live="polite">
      <div className="score">
        <span className="badge badge-x">X</span>
        <strong>{scores.X}</strong>
      </div>
      <div className="score">
        <span className="badge badge-ties">Ties</span>
        <strong>{scores.ties}</strong>
      </div>
      <div className="score">
        <span className="badge badge-o">O</span>
        <strong>{scores.O}</strong>
      </div>
      <div className="status">
        {winner ? (
          <span className="status-win">Winner: {winner}</span>
        ) : draw ? (
          <span className="status-draw">Draw game</span>
        ) : (
          <span>Turn: <strong>{currentPlayer}</strong></span>
        )}
      </div>
    </div>
  );
}
