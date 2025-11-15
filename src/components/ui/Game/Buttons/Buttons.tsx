import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { BACK_CIRCLE, LIGHTNING } from 'src/constants';

interface ButtonsProps {
  lightningCount: number;
  onBackPress: () => void;
  onNextPlayerPress: () => void;
  isSetupComplete: boolean;
  handleCompleteSetup: () => void;
  showStartButton: boolean;
}

const Buttons = ({
  lightningCount,
  onBackPress,
  onNextPlayerPress,
  handleCompleteSetup,
  showStartButton,
}: ButtonsProps) => {
  return (
    <>
      {lightningCount === 0 ? (
        <CustomContainer
          variant="yellow"
          extraStyle={styles.nextPlayerBtnContainer}
        >
          <CustomButton
            extraStyle={styles.nextPlayerBtn}
            handlePress={
              showStartButton ? handleCompleteSetup : onNextPlayerPress
            }
          >
            <CustomText extraStyle={styles.nextPlayerBtnText}>
              {showStartButton ? 'Start' : 'Next player'}
            </CustomText>
          </CustomButton>
        </CustomContainer>
      ) : (
        <View style={styles.btnsContainer}>
          <CustomContainer
            variant="red"
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            extraStyle={styles.lightningBtnContainer}
          >
            <Image
              source={LIGHTNING}
              resizeMode="contain"
              style={styles.lightningBtnImage}
            />
            <View style={styles.lightningTextContainer}>
              <CustomText extraStyle={styles.lightningBtnCountText}>
                {lightningCount}
              </CustomText>
            </View>
          </CustomContainer>

          <CustomContainer
            variant="red"
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            extraStyle={[
              styles.backBtnContainer,
              lightningCount >= 4 && styles.backBtnContainerDisabled,
            ]}
          >
            <CustomButton
              handlePress={onBackPress}
              extraStyle={styles.backBtn}
              isDisabled={lightningCount >= 4}
            >
              <Image
                source={BACK_CIRCLE}
                resizeMode="contain"
                style={styles.backBtnImage}
              />
            </CustomButton>
          </CustomContainer>
        </View>
      )}
    </>
  );
};

export default Buttons;
