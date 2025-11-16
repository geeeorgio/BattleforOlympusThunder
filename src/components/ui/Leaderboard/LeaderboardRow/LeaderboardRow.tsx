import React from 'react';
import { View } from 'react-native';

import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import type { LeaderboardPlayer } from 'src/redux/slices/leaderboard/slice';

interface LeaderboardRowProps {
  player: LeaderboardPlayer;
  place: number;
}

const LeaderboardRow = ({ player, place }: LeaderboardRowProps) => {
  const isTopThree = place <= 3;
  const isEmpty = player.score === null;

  const displayName = isEmpty ? '—' : player.name;

  const displayScore = isEmpty ? '—' : String(player.score);

  const textStyle = isEmpty ? styles.regularPlaceText : styles.placeText;

  const PlaceContent = () => {
    if (isTopThree) {
      return (
        <CustomContainer variant="yellow" extraStyle={styles.placeButton}>
          <CustomText extraStyle={[styles.topPlaceText, styles.yellowBtnText]}>
            {place}
          </CustomText>
        </CustomContainer>
      );
    } else {
      return (
        <CustomContainer variant="grey" extraStyle={styles.placeButton}>
          <CustomText extraStyle={textStyle}>{place}</CustomText>
        </CustomContainer>
      );
    }
  };

  return (
    <View style={styles.rowContainer}>
      <View style={styles.placeColumn}>
        {isEmpty && !isTopThree ? (
          <CustomText extraStyle={textStyle}>{place}</CustomText>
        ) : (
          <PlaceContent />
        )}
      </View>

      <View style={styles.playersColumn}>
        <CustomText extraStyle={textStyle}>{displayName}</CustomText>
      </View>

      <View style={styles.victoriesColumn}>
        <CustomText extraStyle={textStyle}>{displayScore}</CustomText>
      </View>
    </View>
  );
};

export default LeaderboardRow;
