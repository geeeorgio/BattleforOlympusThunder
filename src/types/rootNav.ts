import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { MainStackParamList } from './mainNav';
import type { OnboardingStackParamList } from './onboardingNav';

export type RootStackParamList = {
  OnboardingNavigator: NavigatorScreenParams<OnboardingStackParamList>;
  MainNavigator: NavigatorScreenParams<MainStackParamList>;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
