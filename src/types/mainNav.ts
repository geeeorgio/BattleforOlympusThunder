import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamList = {
  HomeScreen: undefined;
  GameScreen: undefined;
  LeaderboardScreen: undefined;
  AchievementsScreen: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;
