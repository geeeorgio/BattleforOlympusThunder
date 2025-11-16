import type { RootState } from 'src/redux/store';

export const selectPlayer1Name = (state: RootState) => {
  return state.gameplay.player_1.name;
};

export const selectPlayer2Name = (state: RootState) => {
  return state.gameplay.player_2.name;
};

export const selectPlayer1 = (state: RootState) => {
  return state.gameplay.player_1;
};

export const selectPlayer2 = (state: RootState) => {
  return state.gameplay.player_2;
};

export const selectPlayer1Grid = (state: RootState) => {
  return state.gameplay.player1Grid;
};

export const selectPlayer2Grid = (state: RootState) => {
  return state.gameplay.player2Grid;
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

export const selectWinner = (state: RootState) => {
  if (state.gameplay.winner === 'player_1') {
    return state.gameplay.player_1;
  } else if (state.gameplay.winner === 'player_2') {
    return state.gameplay.player_2;
  }
  return null;
};

export const selectIsAlertModalVisible = (state: RootState) => {
  return state.gameplay.isAlertModalVisible;
};
