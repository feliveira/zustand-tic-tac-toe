import { useGameStore } from "../../features/game/store";

import Square from "./Square";

const Board = () => {
  const xIsNext = useGameStore((state) => state.xIsNext)
  const setXIsNext = useGameStore((state) => state.setXIsNext)
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);
  const player = xIsNext ? 'X' : 'O'

  function handleClick(squareIndex: number) {
    if (squares[squareIndex]) return
    const nextSquares = squares.slice()
     nextSquares[squareIndex] = player
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <div className="grid grid-cols-3 grid-rows-3 w-fit h-fit gap-2 p-2 rounded-xl border border-zinc-400 mx-auto mt-4">
      {squares.map((square, squareIndex) => (
        <Square key={squareIndex} value={square} onSquareClick={() => handleClick(squareIndex)} />
      ))}
    </div>
  );
};

export default Board;
