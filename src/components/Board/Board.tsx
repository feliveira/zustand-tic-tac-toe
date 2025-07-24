import { useGameStore } from "../../features/game/store";

import Square from "./Square";

const Board = () => {
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);

  function handleClick(squareIndex: number) {
    if (squares[squareIndex]) return
    const nextSquares = squares.slice()
    nextSquares[squareIndex] = 'X'
    setSquares(nextSquares)
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
