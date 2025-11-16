import { createSelector } from '@reduxjs/toolkit';

import type { Achievement } from './slice';

import type { RootState } from 'src/redux/store';

export const selectAchievements = (state: RootState) =>
  state.achievements.achievements;

export const selectIsFirstStrikeMade = (state: RootState) =>
  state.achievements.isFirstStrikeMade;

export const selectFirstStrikePlayerId = (state: RootState) =>
  state.achievements.firstStrikePlayerId;

export const selectAvailableAchievements = createSelector(
  [selectAchievements],
  (achievements) => {
    return [...achievements].sort((a: Achievement, b: Achievement) => {
      if (a.isClaimed && !b.isClaimed) return -1;
      if (!a.isClaimed && b.isClaimed) return 1;
      return 0;
    });
  },
);
