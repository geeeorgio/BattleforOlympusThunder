import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import type { TextProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS } from 'src/constants';

interface GradientTextProps extends TextProps {}

const GradientText = (props: GradientTextProps) => {
  return (
    <MaskedView
      style={styles.maskedView}
      maskElement={
        <CustomText extraStyle={props.style}>{props.children}</CustomText>
      }
    >
      <LinearGradient
        colors={COLORS.yellowTextGradient}
        start={{ x: 0.44, y: 1 }}
        end={{ x: 0.56, y: 0 }}
        style={styles.gradient}
      >
        <CustomText extraStyle={[props.style, { color: 'transparent' }]}>
          {props.children}
        </CustomText>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
