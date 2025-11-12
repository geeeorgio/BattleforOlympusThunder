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
}

const variantStyles = {
  yellow: styles.yellow,
  red: styles.red,
};

const CustomContainer = ({
  extraStyle,
  variant,
  children,
}: CustomContainerProps) => {
  return (
    <LinearGradient
      colors={variant === 'yellow' ? COLORS.yellowGradient : COLORS.redGradient}
      style={[styles.container, extraStyle, variantStyles[variant]]}
    >
      {children}
    </LinearGradient>
  );
};

export default CustomContainer;
