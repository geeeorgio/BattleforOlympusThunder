import type { LeaderboardPlayer } from 'src/redux/slices/leaderboard/slice';

export const mockBoard = (
  realBoard: LeaderboardPlayer[],
): LeaderboardPlayer[] => {
  if (realBoard.length >= 6) {
    return realBoard;
  }

  const emptySlots: LeaderboardPlayer[] = Array.from(
    { length: 6 - realBoard.length },
    (_, index) => ({
      id: `empty-${Date.now()}-${index}-${Math.floor(Math.random() * 100000)}`,
      name: '',
      score: null,
    }),
  );

  return [...realBoard, ...emptySlots];
};
