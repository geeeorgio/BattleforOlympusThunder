import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { MainStackNavigationProp } from 'src/types';

const HomeMenu = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleGamePress = () => {
    navigation.navigate('GameScreen');
  };

  const handleLeaderboardPress = () => {
    navigation.navigate('LeaderboardScreen');
  };

  const handleAchievementsPress = () => {
    navigation.navigate('AchievementsScreen');
  };

  return (
    <View style={styles.container}>
      <CustomContainer variant="yellow" extraStyle={styles.gameBtnContainer}>
        <CustomButton
          extraStyle={styles.gameButton}
          handlePress={handleGamePress}
        >
          <CustomText extraStyle={styles.gameBtnText}>Game</CustomText>
        </CustomButton>
      </CustomContainer>

      <CustomContainer
        variant="red"
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        extraStyle={styles.redBtnContainer}
      >
        <CustomButton
          extraStyle={styles.redBtn}
          handlePress={handleLeaderboardPress}
        >
          <CustomText extraStyle={styles.redBtnText}>Leaderboard</CustomText>
        </CustomButton>
      </CustomContainer>

      <CustomContainer
        variant="red"
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        extraStyle={styles.redBtnContainer}
      >
        <CustomButton
          extraStyle={styles.redBtn}
          handlePress={handleAchievementsPress}
        >
          <CustomText extraStyle={styles.redBtnText}>Achievements</CustomText>
        </CustomButton>
      </CustomContainer>
    </View>
  );
};

export default HomeMenu;
