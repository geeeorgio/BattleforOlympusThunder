import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { REWARDS_LIST } from 'src/constants/rewards';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  isClaimed: boolean;
  progress?: number;
  target?: number;
  regularImage: number;
  blurImage: number;
}

interface AchievementsState {
  achievements: Achievement[];
  isFirstStrikeMade: boolean;
  firstStrikePlayerId: 'player_1' | 'player_2' | null;
}

const initialAchievements: Achievement[] = REWARDS_LIST.map((reward) => {
  let progressFields = {};

  if (reward.id === 'friendly_thunder') {
    progressFields = { progress: 0, target: 10 };
  }

  return {
    ...reward,
    ...progressFields,
  };
});

const initialState: AchievementsState = {
  achievements: initialAchievements,
  isFirstStrikeMade: false,
  firstStrikePlayerId: null,
};

const slice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    claimAchievement: (state, action: PayloadAction<string>) => {
      const achievementId = action.payload;
      const achievement = state.achievements.find(
        (a) => a.id === achievementId,
      );

      if (achievement && !achievement.isClaimed) {
        achievement.isClaimed = true;
      }
    },

    incrementProgress: (state, action: PayloadAction<string>) => {
      const achievementId = action.payload;
      const achievement = state.achievements.find(
        (a) => a.id === achievementId,
      );

      if (
        achievement &&
        achievement.progress !== undefined &&
        achievement.target !== undefined &&
        !achievement.isClaimed
      ) {
        achievement.progress += 1;

        if (achievement.progress >= achievement.target) {
          achievement.isClaimed = true;
        }
      }
    },

    setFirstStrike: (state, action: PayloadAction<'player_1' | 'player_2'>) => {
      if (!state.isFirstStrikeMade) {
        state.isFirstStrikeMade = true;
        state.firstStrikePlayerId = action.payload;
      }
    },

    resetAchievements: () => {
      return { ...initialState };
    },
  },
});

export const {
  claimAchievement,
  incrementProgress,
  setFirstStrike,
  resetAchievements,
} = slice.actions;
export const achievementsReducer = slice.reducer;
