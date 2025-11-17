import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface LeaderboardPlayer {
  id: string;
  name: string;
  score: number | null;
}

interface LeaderboardState {
  leaderboard: LeaderboardPlayer[];
}

const initialState: LeaderboardState = {
  leaderboard: [],
};

const slice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addVictory: (state, action: PayloadAction<string>) => {
      const winnerName = action.payload;

      const existingPlayerIndex = state.leaderboard.findIndex(
        (p) => p.name.toLowerCase() === winnerName.toLowerCase(),
      );

      if (existingPlayerIndex !== -1) {
        if (state.leaderboard[existingPlayerIndex].score === null) {
          state.leaderboard[existingPlayerIndex].score = 1;
        } else {
          state.leaderboard[existingPlayerIndex].score += 1;
        }
      } else {
        const newPlayer: LeaderboardPlayer = {
          id: `${Date.now()}-${Math.floor(Math.random() * 100000)}`,
          name: winnerName,
          score: 1,
        };
        state.leaderboard.push(newPlayer);
      }
    },

    resetLeaderboard: () => {
      return { ...initialState };
    },
  },
});

export const { addVictory, resetLeaderboard } = slice.actions;
export const leaderboardReducer = slice.reducer;
