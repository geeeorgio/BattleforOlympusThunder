import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';
import FrameContainer from '../../FrameContainer/FrameContaine';
import GradientText from '../../GradientText/GradientText';

import { styles } from './styles';

import { ZEUS_IMGS } from 'src/constants';
import { useAppDispatch } from 'src/hooks/toolkit';
import { resetGameplay, type Player } from 'src/redux/slices/gameplay/slice';
import type { MainStackNavigationProp } from 'src/types';
import { handleShare } from 'src/utils';

interface GameResultProps {
  winner: Player;
}

const GameResult = ({ winner }: GameResultProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const shareResult = () => {
    handleShare();
  };

  const handleHome = () => {
    dispatch(resetGameplay());
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={winner.id === 'player_1' ? ZEUS_IMGS.blue : ZEUS_IMGS.red}
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
