import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  FrameContainer,
  HomeMenu,
} from 'src/components';
import CustomButton from 'src/components/ui/CustomButton/CustomButton';
import { LOGO } from 'src/constants';
import { handleShare } from 'src/utils';

const HomeScreen = () => {
  const handleSharePress = () => {
    handleShare();
  };

  return (
    <CustomScreenWrapper extraStyle={styles.screenWrapper}>
      <FrameContainer extraStyle={styles.frameContainer}>
        <View style={styles.introContainer}>
          <View style={styles.logoContainer}>
            <Image source={LOGO} resizeMode="cover" style={styles.logo} />
          </View>
          <View style={styles.titleContainer}>
            <CustomText extraStyle={styles.title}>
              Tough Way To Olimp Volkan is a thrilling two-player strategy game
              where every move unleashes the power of the gods. Take the role of
              Zeus, place your lightning bolts wisely, and predict your
              opponent’s strikes to dominate the skies. Outsmart, outstrike, and
              prove yourself as the true ruler of thunder!
            </CustomText>
          </View>
        </View>
        <CustomContainer variant="yellow" extraStyle={styles.shareContainer}>
          <CustomButton
            extraStyle={styles.shareButton}
            handlePress={handleSharePress}
          >
            <CustomText extraStyle={styles.shareButtonText}>Share</CustomText>
          </CustomButton>
        </CustomContainer>
      </FrameContainer>

      <View style={styles.homeMenuContainer}>
        <HomeMenu />
      </View>
    </CustomScreenWrapper>
  );
};

export default HomeScreen;
