import type { ReactNode } from 'react';
import React from 'react';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { MAIN_BCKGD } from 'src/constants';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ImageBackground
      source={MAIN_BCKGD}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default Layout;
