import { useGameStore } from "../../features/game/store";
import { calculateStatus, calculateTurns, calculateWinner } from "../../features/game/utils";

import Square from "./Square";

const Board = () => {
  const xIsNext = useGameStore((state) => state.xIsNext)
  const setXIsNext = useGameStore((state) => state.setXIsNext)
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);
  const player = xIsNext ? 'X' : 'O'
  const winner = calculateWinner(squares)
  const turns = calculateTurns(squares)
  const status = calculateStatus(winner, turns, player)

  function handleClick(squareIndex: number) {
    if (squares[squareIndex] || winner) return
    const nextSquares = squares.slice()
    nextSquares[squareIndex] = player
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <main className="mx-auto w-fit mt-2">
      <div className="mb-2">{status}</div>
      <div className="grid grid-cols-3 grid-rows-3 w-fit h-fit gap-2 p-2 rounded-xl border border-zinc-400 mt-4">
        {squares.map((square, squareIndex) => (
          <Square key={squareIndex} value={square} onSquareClick={() => handleClick(squareIndex)} />
        ))}
      </div>
    </main>
  );
};

export default Board;
