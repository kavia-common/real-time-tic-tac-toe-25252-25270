import React from 'react';

// PUBLIC_INTERFACE
export default function Square({ value, onClick, isWinning, index }) {
  /** Interactive cell for a single Tic Tac Toe square. */
  const label = `Square ${Math.floor(index/3)+1}, ${index%3+1}`;
  return (
    <button
      className={`square ${isWinning ? 'square-winning' : ''}`}
      onClick={onClick}
      aria-label={label}
      aria-pressed={!!value}
    >
      {value}
    </button>
  );
}
