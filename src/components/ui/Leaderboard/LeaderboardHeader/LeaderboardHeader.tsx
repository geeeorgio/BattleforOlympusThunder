import React from 'react';
import { View } from 'react-native';

import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

const LeaderboardHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.placeColumn}>
        <CustomText extraStyle={styles.headerText}>Place</CustomText>
      </View>
      <View style={styles.playersColumn}>
        <CustomText extraStyle={styles.headerText}>Players</CustomText>
      </View>
      <View style={styles.victoriesColumn}>
        <CustomText extraStyle={styles.headerText}>Victories</CustomText>
      </View>
    </View>
  );
};

export default LeaderboardHeader;
