import type { ReactNode } from 'react';
import React from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { CONTAINER_BCKGD } from 'src/constants';

interface FrameContainerProps {
  children: ReactNode;
}

const FrameContainer = ({ children }: FrameContainerProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={CONTAINER_BCKGD}
        resizeMode="contain"
        style={styles.image}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default FrameContainer;
