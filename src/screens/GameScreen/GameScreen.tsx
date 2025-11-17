import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import {
  AlertModal,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  Gameplay,
  GameSettings,
  QuitModal,
} from 'src/components';
import CustomButton from 'src/components/ui/CustomButton/CustomButton';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectCurrentPlayer,
  selectIsQuitModalVisible,
  selectPlayer1Name,
  selectPlayer2Name,
  selectWinner,
} from 'src/redux/slices/gameplay/selectors';
import {
  hideQuitModal,
  resetGameplay,
  setPlayer1Name,
  setPlayer2Name,
  showQuitModal,
} from 'src/redux/slices/gameplay/slice';
import { addVictory } from 'src/redux/slices/leaderboard/slice';
import type { MainStackNavigationProp } from 'src/types';

const GameScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const player1Name = useAppSelector(selectPlayer1Name);
  const player2Name = useAppSelector(selectPlayer2Name);
  const currentPlayer = useAppSelector(selectCurrentPlayer);
  const winner = useAppSelector(selectWinner);
  const isQuitModalVisible = useAppSelector(selectIsQuitModalVisible);
  const [showGameplay, setShowGameplay] = useState<boolean>(false);

  const handlePlayer1Change = (text: string) => {
    dispatch(setPlayer1Name(text));
  };

  const handlePlayer2Change = (text: string) => {
    dispatch(setPlayer2Name(text));
  };

  const handleStart = () => {
    setShowGameplay(true);
  };

  const handleExitConfirm = () => {
    if (winner) {
      dispatch(addVictory(winner.name));
    }

    dispatch(resetGameplay());
    dispatch(hideQuitModal());
    navigation.navigate('HomeScreen');
  };

  const handleExitCancel = () => {
    dispatch(hideQuitModal());
  };

  const bothPlayersReady = player1Name.length > 0 && player2Name.length > 0;

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = navigation.addListener('beforeRemove', (e) => {
        if (!bothPlayersReady && !isQuitModalVisible) {
          return;
        }

        e.preventDefault();
        dispatch(showQuitModal());
      });

      return unsubscribe;
    }, [dispatch, bothPlayersReady, isQuitModalVisible, navigation]),
  );

  return (
    <CustomScreenWrapper extraStyle={styles.screenWrapper}>
      {showGameplay ? (
        <Gameplay currentPlayer={currentPlayer} />
      ) : (
        <>
          <View style={styles.emptyContainer} />

          <GameSettings
            player1Name={player1Name}
            player2Name={player2Name}
            setPlayer1Name={handlePlayer1Change}
            setPlayer2Name={handlePlayer2Change}
          />

          <CustomContainer
            variant="yellow"
            extraStyle={[
              styles.startButtonContainer,
              !bothPlayersReady && styles.hiddenContainer,
            ]}
          >
            <CustomButton
              extraStyle={styles.startButton}
              handlePress={handleStart}
              isDisabled={!bothPlayersReady}
            >
              <CustomText extraStyle={styles.startButtonText}>Start</CustomText>
            </CustomButton>
          </CustomContainer>
        </>
      )}

      <QuitModal
        isVisible={isQuitModalVisible}
        onConfirm={handleExitConfirm}
        onCancel={handleExitCancel}
      />

      <AlertModal />
    </CustomScreenWrapper>
  );
};

export default GameScreen;
