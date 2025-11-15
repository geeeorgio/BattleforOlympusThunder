import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { BACK_MENU } from 'src/constants';

const CustomHeader = (props: NativeStackHeaderProps) => {
  const { options, navigation } = props;
  const { title } = options;

  return (
    <View style={styles.container}>
      <CustomContainer
        variant="red"
        extraStyle={styles.backButtonContainer}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <CustomButton
          extraStyle={styles.backButton}
          handlePress={() => navigation.goBack()}
        >
          <Image
            source={BACK_MENU}
            resizeMode="contain"
            style={styles.backButtonImage}
          />
        </CustomButton>
      </CustomContainer>

      <CustomContainer
        variant="red"
        extraStyle={styles.contentContainer}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <CustomText extraStyle={styles.title}>{title}</CustomText>
      </CustomContainer>
    </View>
  );
};

export default CustomHeader;
