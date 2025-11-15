export interface Cell {
  id: string;
  hasLightning: boolean;
  isHit: boolean;
  isMiss: boolean;
}

const GRID_SIZE = 5;

export const createEmptyGrid = (): Cell[] => {
  const grid: Cell[] = [];

  Array.from({ length: GRID_SIZE }, (__, row) =>
    Array.from({ length: GRID_SIZE }, (_, col) => {
      grid.push({
        id: `cell_${row}_${col}`,
        hasLightning: false,
        isHit: false,
        isMiss: false,
      });
    }),
  );
  return grid;
};
