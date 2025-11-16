import type { ReactNode } from 'react';
import React from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

import { COLORS } from 'src/constants';

interface CustomContainerProps {
  extraStyle?: StyleProp<ViewStyle>;
  variant: 'yellow' | 'red' | 'grey';
  children?: ReactNode;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

const variantStyles = {
  yellow: styles.yellow,
  red: styles.red,
  grey: styles.grey,
};

const CustomContainer = ({
  extraStyle,
  variant,
  children,
  start,
  end,
}: CustomContainerProps) => {
  return (
    <LinearGradient
      colors={
        variant === 'yellow'
          ? COLORS.yellowGradient
          : variant === 'red'
            ? COLORS.redGradient
            : variant === 'grey'
              ? COLORS.greyGradient
              : []
      }
      start={start || { x: 0.56, y: 0 }}
      end={end || { x: 0.44, y: 1 }}
      style={[styles.container, extraStyle, variantStyles[variant]]}
    >
      {children}
    </LinearGradient>
  );
};

export default CustomContainer;
