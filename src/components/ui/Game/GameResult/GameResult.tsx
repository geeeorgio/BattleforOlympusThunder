import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';
import FrameContainer from '../../FrameContainer/FrameContaine';
import GradientText from '../../GradientText/GradientText';

import { styles } from './styles';

import { ZEUS_IMGS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectFirstStrikePlayerId } from 'src/redux/slices/achievements/selectors';
import {
  claimAchievement,
  incrementProgress,
  resetFirstStrike,
} from 'src/redux/slices/achievements/slice';
import {
  selectPlayer1BoltsRemaining,
  selectPlayer2BoltsRemaining,
  selectPlayer1ConsecutiveHits,
  selectPlayer2ConsecutiveHits,
} from 'src/redux/slices/gameplay/selectors';
import { resetGameplay, type Player } from 'src/redux/slices/gameplay/slice';
import { addVictory } from 'src/redux/slices/leaderboard/slice';
import type { MainStackNavigationProp } from 'src/types';
import { handleShare } from 'src/utils';

interface GameResultProps {
  winner: Player;
}

const GameResult = ({ winner }: GameResultProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();
  const achievementsCheckedRef = useRef(false);

  const p1Bolts = useAppSelector(selectPlayer1BoltsRemaining);
  const p2Bolts = useAppSelector(selectPlayer2BoltsRemaining);
  const p1Hits = useAppSelector(selectPlayer1ConsecutiveHits);
  const p2Hits = useAppSelector(selectPlayer2ConsecutiveHits);
  const firstStrikePlayerId = useAppSelector(selectFirstStrikePlayerId);

  useEffect(() => {
    if (!winner || achievementsCheckedRef.current || !navigation.isFocused())
      return;

    const winningPlayerId = winner.id as 'player_1' | 'player_2';

    dispatch(incrementProgress('friendly_thunder'));

    const winningPlayerBolts =
      winningPlayerId === 'player_1' ? p1Bolts : p2Bolts;
    if (winningPlayerBolts === 4) {
      dispatch(claimAchievement('perfect_storm'));
    }

    const winningPlayerConsecutiveHits =
      winningPlayerId === 'player_1' ? p1Hits : p2Hits;
    if (winningPlayerConsecutiveHits >= 2) {
      dispatch(claimAchievement('mind_reader'));
    }

    if (firstStrikePlayerId === winningPlayerId) {
      dispatch(claimAchievement('first_strike'));
    }

    achievementsCheckedRef.current = true;
  }, [
    winner,
    dispatch,
    p1Bolts,
    p2Bolts,
    p1Hits,
    p2Hits,
    firstStrikePlayerId,
    navigation,
  ]);

  const shareResult = () => {
    handleShare();
  };

  const handleHome = () => {
    dispatch(addVictory(winner.name));
    dispatch(resetGameplay());

    dispatch(resetFirstStrike());
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={
            winner.id === 'player_1'
              ? ZEUS_IMGS.vulcanoZeus1
              : ZEUS_IMGS.vulcanoZeus2
          }
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <FrameContainer extraStyle={styles.textContainer}>
        <GradientText style={styles.title}>Congratulations!</GradientText>
        <CustomText extraStyle={styles.description}>
          {`Player ${winner.name.charAt(0).toUpperCase() + winner.name.slice(1)} wins, it was a legendary fight`}
        </CustomText>
      </FrameContainer>

      <View style={styles.buttonContainer}>
        <CustomContainer variant="yellow" extraStyle={styles.container}>
          <CustomButton extraStyle={styles.button} handlePress={shareResult}>
            <CustomText extraStyle={styles.buttonText}>Share</CustomText>
          </CustomButton>
        </CustomContainer>

        <CustomContainer
          variant="red"
          extraStyle={styles.container}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <CustomButton extraStyle={styles.homebutton} handlePress={handleHome}>
            <CustomText extraStyle={styles.homeText}>Home</CustomText>
          </CustomButton>
        </CustomContainer>
      </View>
    </View>
  );
};

export default GameResult;
