import { createSelector } from '@reduxjs/toolkit';

import type { LeaderboardPlayer } from './slice';

import type { RootState } from 'src/redux/store';

export const selectLeaderboard = (state: RootState) => {
  return state.leaderboard.leaderboard;
};

export const selectSortedLeaderboard = createSelector(
  [selectLeaderboard],
  (leaderboard) => {
    return [...leaderboard].sort(
      (a: LeaderboardPlayer, b: LeaderboardPlayer) =>
        (b.score ?? 0) - (a.score ?? 0),
    );
  },
);
