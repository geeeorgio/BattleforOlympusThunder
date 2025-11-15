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
}

const initialState: GameplayState = {
  player_1: {
    id: 'player_1',
    name: '',
    image: ZEUS_IMGS.blue,
  },
  player_2: {
    id: 'player_2',
    name: '',
    image: ZEUS_IMGS.red,
  },
  currentPlayer: 'player_1',
  player1Grid: createEmptyGrid(),
  player2Grid: createEmptyGrid(),
  lightningCount: 4,
  isSetupComplete: false,
  isQuitModalVisible: false,
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
        console.log('switchSetupPlayerRedux player 1', state.currentPlayer);
        state.currentPlayer = 'player_2';
        console.log('switchSetupPlayerRedux after switch', state.currentPlayer);
        state.lightningCount = 4;
      } else {
        state.isSetupComplete = true;
        console.log(
          'switchSetupPlayerRedux after complete',
          state.isSetupComplete,
        );
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
} = slice.actions;

export const gameplayReducer = slice.reducer;
