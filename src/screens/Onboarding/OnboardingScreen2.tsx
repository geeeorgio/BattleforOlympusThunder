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

const OnboardingScreen2 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen3');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.screenWrapper}>
      <View style={styles.contentWrapper}>
        <View style={styles.imageWrapper}>
          {/* <Image
            source={ZEUS_IMGS.vulcanoZeus1}
            resizeMode="contain"
            style={styles.image}
          /> */}
        </View>

        <FrameContainer extraStyle={styles.frameContainer}>
          <GradientText style={styles.title}>
            Place your lightning bolts on the field of Olimp Volkan.
          </GradientText>

          <CustomText extraStyle={styles.description}>
            Choose your locations wisely - the enemy must not find any!
          </CustomText>
        </FrameContainer>
      </View>

      <CustomContainer variant="yellow" extraStyle={styles.bottomContainer}>
        <CustomButton extraStyle={styles.button} handlePress={handleNext}>
          <CustomText extraStyle={styles.buttonText}>Okay</CustomText>
        </CustomButton>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen2;
