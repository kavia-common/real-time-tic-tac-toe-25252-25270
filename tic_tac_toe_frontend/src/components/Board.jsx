import React from 'react';
import Square from './Square';

// PUBLIC_INTERFACE
export default function Board({ squares, onPlay, winningLine = [] }) {
  /** Renders the 3x3 game board grid. */
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe board">
      {squares.map((val, i) => (
        <div key={i} role="gridcell" className="cell">
          <Square
            value={val}
            index={i}
            onClick={() => onPlay(i)}
            isWinning={winningLine.includes(i)}
          />
        </div>
      ))}
    </div>
  );
}
