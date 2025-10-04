export const LINES = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// PUBLIC_INTERFACE
export function calculateWinner(squares){
  /** Determine if there's a winner on the board.
   * Returns: { winner: 'X' | 'O', line: number[] } or null if no winner.
   */
  for(const [a,b,c] of LINES){
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return { winner: squares[a], line: [a,b,c] };
    }
  }
  return null;
}

// PUBLIC_INTERFACE
export function isDraw(squares){
  /** Returns true if all squares are filled and there is no winner. */
  return squares.every(Boolean);
}

// PUBLIC_INTERFACE
export function nextPlayer(isXNext){
  /** Returns the character of the next player given the isXNext flag. */
  return isXNext ? 'X' : 'O';
}
