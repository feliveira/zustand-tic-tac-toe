import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { Squares } from './types';

const useGameStore = create(
  combine({ squares: Array(9).fill(null) as Squares }, (set) => ({
    setSquares: (
      nextSquares: Squares | ((prev: Squares) => Squares)
    ) => {
      set((state) => ({
        squares:
          typeof nextSquares === 'function'
            ? nextSquares(state.squares)
            : nextSquares,
      }));
    },
  }))
);

export { useGameStore }