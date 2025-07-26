import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { Squares } from './types';

const useGameStore = create(
  combine({ squares: Array(9).fill(null) as Squares, xIsNext: true }, (set) => ({
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
    setXIsNext: (
      nextXIsNext: boolean | ((prev: boolean) => boolean)
    ) => {
        set((state) => ({
          xIsNext:
            typeof nextXIsNext === 'function'
              ? nextXIsNext(state.xIsNext)
              : nextXIsNext,
        }))
      },
  }))
);

export { useGameStore }