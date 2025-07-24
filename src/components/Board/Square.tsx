import type { SquareValue } from "../../features/game/types";

type SquareProps = {
  value: SquareValue;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps ) => {
  return (
    <button
      className="flex size-16 items-center justify-center bg-zinc-100 border border-zinc-400 rounded font-bold text-base"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
