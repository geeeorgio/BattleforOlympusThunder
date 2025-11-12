import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import type { RootStackParamList } from 'src/types';

const Root = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'fade',
      }}
    >
      <Root.Screen name="OnboardingNavigator" component={OnboardingNavigator} />
      <Root.Screen name="MainNavigator" component={MainNavigator} />
    </Root.Navigator>
  );
};

export default RootNavigator;
