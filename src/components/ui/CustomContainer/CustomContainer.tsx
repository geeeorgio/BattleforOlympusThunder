import type { ReactNode } from 'react';
import React from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

import { COLORS } from 'src/constants';

interface CustomContainerProps {
  extraStyle?: StyleProp<ViewStyle>;
  variant: 'yellow' | 'red';
  children?: ReactNode;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

const variantStyles = {
  yellow: styles.yellow,
  red: styles.red,
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
      colors={variant === 'yellow' ? COLORS.yellowGradient : COLORS.redGradient}
      start={start || { x: 0.56, y: 0 }}
      end={end || { x: 0.44, y: 1 }}
      style={[styles.container, extraStyle, variantStyles[variant]]}
    >
      {children}
    </LinearGradient>
  );
};

export default CustomContainer;
