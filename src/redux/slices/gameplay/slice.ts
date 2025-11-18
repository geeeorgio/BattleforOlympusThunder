import { createSlice } from '@reduxjs/toolkit';

import { ZEUS_IMGS } from 'src/constants';
import { createEmptyGrid, type Cell } from 'src/utils';

export interface Player {
  id: string;
  name: string;
  image: number;
}

interface GameplayState {
  player_1: Player;
  player_2: Player;
  currentPlayer: 'player_1' | 'player_2';
  player1Grid: Cell[];
  player2Grid: Cell[];
  lightningCount: number;
  isSetupComplete: boolean;
  isQuitModalVisible: boolean;
  player1BoltsRemaining: number;
  player2BoltsRemaining: number;
  winner: 'player_1' | 'player_2' | null;
  isAlertModalVisible: boolean;
  player1ConsecutiveHits: number;
  player2ConsecutiveHits: number;
}

const initialState: GameplayState = {
  player_1: {
    id: 'player_1',
    name: '',
    image: ZEUS_IMGS.vulcanoZeus1,
  },
  player_2: {
    id: 'player_2',
    name: '',
    image: ZEUS_IMGS.vulcanoZeus2,
  },
  currentPlayer: 'player_1',
  player1Grid: createEmptyGrid(),
  player2Grid: createEmptyGrid(),
  lightningCount: 4,
  isSetupComplete: false,
  isQuitModalVisible: false,
  player1BoltsRemaining: 4,
  player2BoltsRemaining: 4,
  winner: null,
  isAlertModalVisible: false,
  player1ConsecutiveHits: 0,
  player2ConsecutiveHits: 0,
};

const slice = createSlice({
  name: 'gameplay',
  initialState,
  reducers: {
    setPlayer1Name: (state, action) => {
      state.player_1.name = action.payload;
    },
    setPlayer2Name: (state, action) => {
      state.player_2.name = action.payload;
    },

    placeLightning: (state, action) => {
      const cellId = action.payload;
      const isPlayer1 = state.currentPlayer === 'player_1';
      const targetGrid = isPlayer1 ? state.player1Grid : state.player2Grid;

      const cell = targetGrid.find((c) => c.id === cellId);

      if (cell) {
        const placedCount = targetGrid.filter((c) => c.hasLightning).length;

        if (cell.hasLightning) {
          cell.hasLightning = false;
          state.lightningCount += 1;
        } else if (placedCount < 4) {
          cell.hasLightning = true;
          state.lightningCount -= 1;
        }
      }
    },
    decreaseLightningCount: (state) => {
      const isPlayer1 = state.currentPlayer === 'player_1';
      const targetGrid = isPlayer1 ? state.player1Grid : state.player2Grid;

      const placedLightnings = targetGrid.filter((c) => c.hasLightning);

      if (placedLightnings.length > 0) {
        const cellToRemove =
          placedLightnings[Math.floor(Math.random() * placedLightnings.length)];

        cellToRemove.hasLightning = false;

        if (state.lightningCount < 4) {
          state.lightningCount += 1;
        }
      }
    },
    switchSetupPlayer: (state) => {
      if (state.currentPlayer === 'player_1') {
        state.currentPlayer = 'player_2';

        state.lightningCount = 4;
      } else {
        state.isSetupComplete = true;
      }
    },
    completeSetup: (state) => {
      state.isSetupComplete = true;
    },
    showQuitModal: (state) => {
      state.isQuitModalVisible = true;
    },
    hideQuitModal: (state) => {
      state.isQuitModalVisible = false;
    },
    attackCell: (state, action) => {
      const cellId = action.payload;

      const isPlayer1Turn = state.currentPlayer === 'player_1';

      const targetGrid = isPlayer1Turn ? state.player2Grid : state.player1Grid;

      const targetPlayerBolts = isPlayer1Turn
        ? 'player2BoltsRemaining'
        : 'player1BoltsRemaining';

      const currentHitsKey = isPlayer1Turn
        ? 'player1ConsecutiveHits'
        : 'player2ConsecutiveHits';
      const opponentHitsKey = isPlayer1Turn
        ? 'player2ConsecutiveHits'
        : 'player1ConsecutiveHits';

      const cell = targetGrid.find((c) => c.id === cellId);

      if (!cell || cell.isHit || cell.isMiss) {
        return;
      }

      if (cell.hasLightning) {
        cell.isHit = true;
        state[targetPlayerBolts] -= 1;

        state[currentHitsKey] += 1;
        state[opponentHitsKey] = 0;

        if (state[targetPlayerBolts] === 0) {
          state.winner = state.currentPlayer;
          state.isSetupComplete = false;
        }
      } else {
        cell.isMiss = true;

        state[currentHitsKey] = 0;

        state.currentPlayer = isPlayer1Turn ? 'player_2' : 'player_1';
      }
    },
    showAlertModal: (state) => {
      state.isAlertModalVisible = true;
    },
    hideAlertModal: (state) => {
      state.isAlertModalVisible = false;
    },
    resetGameplay: () => {
      return { ...initialState };
    },
  },
});

export const {
  setPlayer1Name,
  setPlayer2Name,
  placeLightning,
  switchSetupPlayer,
  completeSetup,
  resetGameplay,
  decreaseLightningCount,
  showQuitModal,
  hideQuitModal,
  attackCell,
  showAlertModal,
  hideAlertModal,
} = slice.actions;

export const gameplayReducer = slice.reducer;
