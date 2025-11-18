import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  FrameContainer,
  GradientText,
} from 'src/components';
import CustomButton from 'src/components/ui/CustomButton/CustomButton';
import { ZEUS_IMGS } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen1 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen2');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.screenWrapper}>
      <View style={styles.contentWrapper}>
        <View style={styles.imageWrapper}>
          {/* <Image
            source={ZEUS_IMGS.vulcanoZeus2}
            resizeMode="contain"
            style={styles.image}
          /> */}
        </View>

        <FrameContainer extraStyle={styles.frameContainer}>
          <GradientText style={styles.title}>
            Welcome to the Tough Way To Olimp Volkan!
          </GradientText>

          <CustomText extraStyle={styles.description}>
            Here lightning, strategy, and glory rule.
          </CustomText>
          <CustomText extraStyle={styles.description}>
            Embrace the power of thunder and enter the battle of the gods.
          </CustomText>
        </FrameContainer>
      </View>

      <CustomContainer variant="yellow" extraStyle={styles.bottomContainer}>
        <CustomButton extraStyle={styles.button} handlePress={handleNext}>
          <CustomText extraStyle={styles.buttonText}>Next</CustomText>
        </CustomButton>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen1;
