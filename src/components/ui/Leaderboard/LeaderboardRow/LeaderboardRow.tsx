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

  const displayName = isEmpty ? '——' : player.name;
  const displayScore = isEmpty ? '——' : String(player.score);

  return (
    <View style={styles.rowContainer}>
      <View style={styles.placeColumn}>
        {isTopThree ? (
          <CustomContainer variant="yellow" extraStyle={styles.placeButton}>
            <CustomText
              extraStyle={[styles.topPlaceText, styles.yellowBtnText]}
            >
              {place}
            </CustomText>
          </CustomContainer>
        ) : (
          <CustomContainer variant="grey" extraStyle={styles.placeButton}>
            <CustomText
              extraStyle={[
                isEmpty ? styles.regularPlaceText : styles.topPlaceText,
              ]}
            >
              {place}
            </CustomText>
          </CustomContainer>
        )}
      </View>

      <View style={styles.playersColumn}>
        <CustomText
          extraStyle={isEmpty ? styles.regularPlaceText : styles.topPlaceText}
        >
          {displayName}
        </CustomText>
      </View>

      <View style={styles.victoriesColumn}>
        <CustomText
          extraStyle={isEmpty ? styles.regularPlaceText : styles.topPlaceText}
        >
          {displayScore}
        </CustomText>
      </View>
    </View>
  );
};

export default LeaderboardRow;
