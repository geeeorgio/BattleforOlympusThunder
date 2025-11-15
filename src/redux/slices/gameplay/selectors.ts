import type { RootState } from 'src/redux/store';

export const selectPlayer1Name = (state: RootState) => {
  return state.gameplay.player_1.name;
};

export const selectPlayer2Name = (state: RootState) => {
  return state.gameplay.player_2.name;
};

export const selectCurrentPlayer = (state: RootState) => {
  const currentPlayerId = state.gameplay.currentPlayer;

  if (currentPlayerId === 'player_1') {
    return state.gameplay.player_1;
  }
  return state.gameplay.player_2;
};

export const selectCurrentPlayerGrid = (state: RootState) => {
  if (state.gameplay.currentPlayer === 'player_1') {
    return state.gameplay.player1Grid;
  }
  return state.gameplay.player2Grid;
};

export const selectLightningCount = (state: RootState) => {
  return state.gameplay.lightningCount;
};

export const selectIsSetupComplete = (state: RootState) => {
  return state.gameplay.isSetupComplete;
};

export const selectIsQuitModalVisible = (state: RootState) => {
  return state.gameplay.isQuitModalVisible;
};
