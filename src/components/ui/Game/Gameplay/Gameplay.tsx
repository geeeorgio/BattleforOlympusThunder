import React from 'react';
import { View } from 'react-native';

import Buttons from '../Buttons/Buttons';
import FieldSetup from '../FieldSetup/FieldSetup';
import GameResult from '../GameResult/GameResult';
import MainGame from '../MainGame/MainGame';
import PlayerGreeting from '../PlayerGreeting/PlayerGreeting';

import { styles } from './styles';

import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectCurrentPlayerGrid,
  selectIsSetupComplete,
  selectLightningCount,
  selectWinner,
} from 'src/redux/slices/gameplay/selectors';
import type { Player } from 'src/redux/slices/gameplay/slice';
import {
  completeSetup,
  decreaseLightningCount,
  placeLightning,
  switchSetupPlayer,
} from 'src/redux/slices/gameplay/slice';

interface GameplayProps {
  currentPlayer: Player;
}

const Gameplay = ({ currentPlayer }: GameplayProps) => {
  const dispatch = useAppDispatch();

  const currentPlayerGrid = useAppSelector(selectCurrentPlayerGrid);
  const lightningCount = useAppSelector(selectLightningCount);

  const isSetupComplete = useAppSelector(selectIsSetupComplete);

  const winner = useAppSelector(selectWinner);

  const showStartButton = currentPlayer.id === 'player_2';

  const handleCellPress = (cellId: string) => {
    dispatch(placeLightning(cellId));
  };

  const handleBackPress = () => {
    dispatch(decreaseLightningCount());
  };

  const handleNextPlayerPress = () => {
    if (currentPlayer.id === 'player_1') {
      dispatch(switchSetupPlayer());
    }
  };

  const handleCompleteSetup = () => {
    if (currentPlayer.id === 'player_2' && !isSetupComplete) {
      dispatch(completeSetup());
    }
  };

  return (
    <View style={styles.container}>
      {winner && <GameResult winner={winner} />}

      {isSetupComplete && !winner && <MainGame isMainGame={isSetupComplete} />}

      {!winner && !isSetupComplete && (
        <>
          <PlayerGreeting
            playerImage={currentPlayer.image}
            currentPlayerName={currentPlayer.name}
          />

          <FieldSetup
            currentPlayerGrid={currentPlayerGrid}
            onCellPress={handleCellPress}
          />

          <Buttons
            lightningCount={lightningCount}
            onBackPress={handleBackPress}
            onNextPlayerPress={handleNextPlayerPress}
            isSetupComplete={isSetupComplete}
            handleCompleteSetup={handleCompleteSetup}
            showStartButton={showStartButton}
          />
        </>
      )}
    </View>
  );
};

export default Gameplay;
