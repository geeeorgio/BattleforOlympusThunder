import React from 'react';
import { Image, View } from 'react-native';

import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

interface PlayerGreetingProps {
  playerImage: number;
  currentPlayerName: string;
}

const PlayerGreeting = ({
  playerImage,
  currentPlayerName,
}: PlayerGreetingProps) => {
  return (
    <CustomContainer
      variant="red"
      extraStyle={styles.playerGreeting}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View style={styles.playerGreetingImageContainer}>
        <Image
          source={playerImage}
          resizeMode="contain"
          style={styles.playerGreetingImage}
        />
        <CustomText
          extraStyle={styles.playerGreetingText}
        >{`${currentPlayerName.charAt(0).toUpperCase() + currentPlayerName.slice(1)}, arrange the lightning bolts in any order`}</CustomText>
      </View>
    </CustomContainer>
  );
};

export default PlayerGreeting;
