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
import { useAppDispatch } from 'src/hooks/toolkit';
import { completeOnboarding } from 'src/redux/slices/onboarding/slice';

const OnboardingScreen3 = () => {
  const dispatch = useAppDispatch();
  const handleStart = () => {
    dispatch(completeOnboarding());
  };

  return (
    <CustomScreenWrapper extraStyle={styles.screenWrapper}>
      <View style={styles.contentWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={ZEUS_IMGS.onboarding3}
            resizeMode="contain"
            style={styles.image}
          />
        </View>

        <FrameContainer extraStyle={styles.frameContainer}>
          <GradientText style={styles.title}>
            Predict your opponent’s lightning, strike accurately and gain the
            glory of Zeus!
          </GradientText>

          <CustomText extraStyle={styles.description}>
            Climb the leaderboard and become the master of the storm.
          </CustomText>
        </FrameContainer>
      </View>

      <CustomContainer variant="yellow" extraStyle={styles.bottomContainer}>
        <CustomButton extraStyle={styles.button} handlePress={handleStart}>
          <CustomText extraStyle={styles.buttonText}>Start</CustomText>
        </CustomButton>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen3;
