import { useEffect, useState } from 'react';
import { calculateWinner, isDraw, nextPlayer } from '../utils/gameUtils';

const STORAGE_KEY = 'ttt_state_v1';

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch{ return null; }
}

function saveState(state){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch{}
}

// PUBLIC_INTERFACE
export default function useTicTacToe(){
  /** Hook encapsulating Tic Tac Toe gameplay, persistence, and helpers. */
  const hydrated = loadState();
  const [squares, setSquares] = useState(hydrated?.squares ?? Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(hydrated?.isXNext ?? true);
  const [scores, setScores] = useState(hydrated?.scores ?? { X: 0, O: 0, ties: 0 });
  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo?.winner || null;
  const winningLine = winnerInfo?.line || [];
  const draw = !winner && isDraw(squares);

  useEffect(() => {
    saveState({ squares, isXNext, scores });
  }, [squares, isXNext, scores]);

  // PUBLIC_INTERFACE
  function handleSquareClick(index){
    /** Handles a user clicking on a square; updates board, turn, and scores. */
    if (winner || squares[index]) return;
    const next = squares.slice();
    next[index] = isXNext ? 'X' : 'O';
    const result = calculateWinner(next);

    if (result?.winner){
      setSquares(next);
      setScores(s => ({ ...s, [result.winner]: s[result.winner] + 1 }));
      return;
    }

    if (isDraw(next)){
      setSquares(next);
      setScores(s => ({ ...s, ties: s.ties + 1 }));
      return;
    }

    setSquares(next);
    setIsXNext(x => !x);
  }

  // PUBLIC_INTERFACE
  function resetBoard(){
    /** Clears the board and sets next player to X. */
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  // PUBLIC_INTERFACE
  function resetScores(){
    /** Resets all scoreboard values and clears the current board. */
    setScores({ X: 0, O: 0, ties: 0 });
    resetBoard();
  }

  return { squares, isXNext, winner, winningLine, draw, scores, handleSquareClick, resetBoard, resetScores, currentPlayer: nextPlayer(isXNext) };
}
